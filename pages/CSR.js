import React, { useEffect, useState } from "react";
import LayoutNextJsPOC from "../components/Layouts/NextJsPOC/LayoutNextJsPOC";

const CSR = () => {
  const [time, setTime] = useState("CSR : Loading...");

  useEffect(() => {
    getDateTime();
  }, []);

  const getDateTime = async () => {
    const res = await fetch("https://worldtimeapi.org/api/ip");
    const data = await res.json();
    setTime(new Date(data?.datetime)?.toLocaleTimeString().split(" ")[0]);
  };

  return (
    <div>
      <div className="poc-time">{time}</div>

      <div className="info-container">
        <div className="info-header">
          <div className="header">
            Client Side Rendering <code>CSR</code>
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
          Method : <code>useEffect</code>
        </div>
        <div className="info">
          <ol>
            <li>
              1. <code>useEffect</code>, this function is the key indicator that
              a page is using Client-Side Rendering.
            </li>
            <li>
              2. <code>LOADING</code> indicator, because the data fetching runs
              after the page is rendered, the data is not fetched instantly,
              therefore showing a loading state.
            </li>
            <li>
              3. Data is fetched on <code>every page request</code>, which is
              why the time shown is different for each reloads.
            </li>
          </ol>
        </div>
        <pre>
          {`  React.useEffect(() => {
    axios
      .get('https://worldtimeapi.org/api/ip')
      .then((res) => {
        setDateTime(res.data.datetime);
      })
      .catch((error) => console.error(error));
  }, []);`}
        </pre>
      </div>
    </div>
  );
};

CSR.getLayout = (page) => {
  return (
    <LayoutNextJsPOC title="Next JS different types of Rendering POC">
      {page}
    </LayoutNextJsPOC>
  );
};

export default CSR;
