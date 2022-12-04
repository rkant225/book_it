import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LayoutMain = (props) => {
  const { children, title = "Book best hotels for your holidays" } = props;
  return (
    <div className="app">
      {/* Head tag */}
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* NavBar */}
      <Header />

      {/* Main Content */}
      <div className="section-container">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutMain;
