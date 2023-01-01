import { useRouter } from "next/router";
import React, { useEffect } from "react";
import NProgress from "nprogress";

const PageNavigationLoader = () => {
  NProgress.configure({ showSpinner: false });
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });

    return () => {
      router.events.off("routeChangeStart", () => {
        NProgress.start();
      });
      router.events.off("routeChangeComplete", () => {
        NProgress.done();
      });
      router.events.off("routeChangeError", () => {
        NProgress.done();
      });
    };
  }, [router]);

  return <></>;
};

export default PageNavigationLoader;
