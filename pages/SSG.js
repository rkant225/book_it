import React from "react";
import LayoutNextJsPOC from "../components/Layouts/NextJsPOC/LayoutNextJsPOC";

const SSG = ({ data }) => {
  return (
    <div>
      <div className="poc-time">
        {data?.datetime
          ? new Date(data?.datetime)?.toLocaleTimeString().split(" ")[0]
          : "Loading..."}
      </div>

      <div className="info-container">
        <div className="info-header">
          Static Site Generation <code>SSG</code>
        </div>
        <div className="method">
          Method : <code>getStaticProps</code>
        </div>
        <div className="info">
          <ol>
            <li>
              1. <code>getStaticProps</code> function, this function is the key
              indicator that a page is using Static Site Generation.
            </li>
            <li>
              2. Data is fetched while running <code>yarn build</code> or{" "}
              <code>npm run build</code>, the API will be hit <code>ONLY</code>{" "}
              when the application is building.
            </li>
            <li>
              3. Data will <code>not change</code> because no further fetch,
              which is why the time shown is the <code>same</code> for each
              reloads.
            </li>
          </ol>
        </div>
        <pre>
          {`export const getStaticProps = async () => {
  const res = await axios.get('https://worldtimeapi.org/api/ip');

  return {
    props: { dateTime: res.data.datetime },
  };
};`}
        </pre>
      </div>
    </div>
  );
};

export default SSG;

export const getStaticProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

SSG.getLayout = (page) => {
  return (
    <LayoutNextJsPOC title="Next JS different types of Rendering POC">
      {page}
    </LayoutNextJsPOC>
  );
};
