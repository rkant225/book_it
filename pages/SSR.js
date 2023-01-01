import React from "react";
import LayoutNextJsPOC from "../components/Layouts/NextJsPOC/LayoutNextJsPOC";

const SSR = ({ data }) => {
  return (
    <div>
      <div className="poc-time">
        {data?.datetime
          ? new Date(data?.datetime)?.toLocaleTimeString().split(" ")[0]
          : "Loading..."}
      </div>

      <div className="info-container">
        <div className="info-header">
          <div className="header">
            Server Side Rendering <code>SSR</code>
          </div>
          <div className="credits">
            <a
              href="https://theodorusclarence.com/blog/nextjs-fetch-method"
              rel="noreferrer"
              target="_blank"
            >
              <code>Credits : @theodorusclarence</code>
            </a>
          </div>
        </div>
        <div className="method">
          Method : <code>getServerSideProps</code>
        </div>
        <div className="info">
          <ol>
            <li>
              1. <code>getServerSideProps</code> function, this function is the
              key indicator that a page is using{" "}
              <code>Server-Side Rendering</code>.
            </li>
            <li>
              2. <code>DELAY</code> before render, and no <code>LOADING</code>{" "}
              indicator shows the data is fetched before the page is rendered,
              so there will be a slight delay where the API is being hit at the
              moment, then it will show the page without loading indicator.
            </li>
            <li>
              3. Data is fetched on <code>every page request</code>, which is
              why the time shown is different for <code>each reloads</code>.
            </li>
            <li>
              4. <code>CSR</code> hit the API <code>after</code> the page loads.
              While using CSR the <code>Search Engine Optimization SEO</code> is
              not really great because the <code>data</code> is only fetched{" "}
              <code>after the page renders</code>. This is useful and convenient
              when we are creating a page with a{" "}
              <code>gated authentication</code>, as you do not really need SEO
              for pages like the dashboard, edit profile page, etc.
            </li>
            <li>
              5. <code>SSR</code> hit the API <code>before</code> the page.
              Although it creates a <code>delay</code>, Data that was fetched is
              injected and helps <code>SEO</code>. This is quite useful for a{" "}
              <code>thread or post</code> that we need to get{" "}
              <code>traffic into</code>, like Reddit or some sort. loads.
            </li>
          </ol>
        </div>
        <pre>
          {`export const getServerSideProps = async () => {
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

export default SSR;

export const getServerSideProps = async () => {
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

SSR.getLayout = (page) => {
  return (
    <LayoutNextJsPOC title="Next JS different types of Rendering POC">
      {page}
    </LayoutNextJsPOC>
  );
};
