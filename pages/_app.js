import LayoutMain from "../components/Layouts/LayoutMain";
import PageNavigationLoader from "../components/Utils/PageNavigationLoader";
import "../styles/globals.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const page = Component.getLayout ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <LayoutMain title="Book best hotels">
      <Component {...pageProps} />
    </LayoutMain>
  );

  return (
    <>
      <PageNavigationLoader />
      {page}
    </>
  );
}

export default MyApp;