import React from "react";
import LayoutNextJsPOC from "../components/Layouts/NextJsPOC/LayoutNextJsPOC";

function ISR({ data }) {
  return (
    <div>
      <div className="poc-time">
        {data?.datetime
          ? new Date(data?.datetime)?.toLocaleTimeString().split(" ")[0]
          : "Loading..."}
      </div>

      <div className="info-container">
        <div className="info-header">
          Incremental Static Regeneration <code>ISR</code>
        </div>
        <div className="method">
          Method : <code>getStaticProps + revalidate</code>
        </div>
        <div className="info">
          <ol>
            <li>
              1. We have given <code>revalidate of 10 seconds</code> means{" "}
              <code>10-second of cooling period</code>.
            </li>
            <li>
              2. When we are in a <code>10-second</code> cooldown period
              reloading does not trigger changes. This is because the page is in
              a cooldown state, as we set on the revalidate key.
            </li>
            <li>
              3. After the <code>10-second</code> cooldown we did{" "}
              <code>2 reloads</code>.
            </li>
            <li>
              4. On <code>First Reload</code> we know that it is not on the
              cooldown state anymore. The first visit after the cooldown state
              is off, is going to trigger <code>page rebuild</code>. Page
              rebuild meaning, only this certain page is going to be rebuild.
              Not the whole application. The fetch API will run in the{" "}
              <code>server</code>, but there will be no changes on the returned
              Preview Time.
            </li>
            <li>
              5. On <code>Second Full Reload</code> the Preview Time changes.
              Exactly a second after the page rebuild which means the rebuild
              takes about 1s. This second reload is going to serve that{" "}
              <code>rebuilt page</code> which was triggered from the{" "}
              <code>previous reload</code>.
            </li>
          </ol>
        </div>
        <pre>
          {`export const getStaticProps = async () => {
  const res = await axios.get('https://worldtimeapi.org/api/ip');

  return {
    props: { dateTime: res.data.datetime },
    revalidate: 20,
  };
};`}
        </pre>
      </div>
    </div>
  );
}

export default ISR;

export const getStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
    revalidate: 5,
  };
};

ISR.getLayout = (page) => {
  return (
    <LayoutNextJsPOC title="Next JS different types of Rendering POC">
      {page}
    </LayoutNextJsPOC>
  );
};
