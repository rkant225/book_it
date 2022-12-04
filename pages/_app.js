import LayoutMain from "../components/Layouts/LayoutMain";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const page = Component.getLayout ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <LayoutMain title="Book best hotels">
      <Component {...pageProps} />
    </LayoutMain>
  );

  return <>{page}</>;
}

export default MyApp;
