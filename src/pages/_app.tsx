
import App, { Container, NextAppContext } from "next/app";
import React, { ReactNode } from "react";
import NProgress from "nprogress";

import { Router } from "@root/routes";
import "normalize.css/normalize.css";
import "nprogress/nprogress.css";
import "../styles/main.scss";

interface AppProps {
  pageProps: {
    [key: string]: any;
  }; 
}

declare global {
  interface Window {
    CATEGORIES_STATE: string;
    appLoaded?: boolean;
  }
}
class MyApp extends App<AppProps> {
  public static async getInitialProps({
    Component,
    ctx,
  }: NextAppContext): Promise<AppProps> {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  constructor(props: any) {
    super(props);
    Router.onRouteChangeStart = () => {
      NProgress.start();
    };
    Router.onRouteChangeComplete = () => {
      NProgress.done();
    };
    Router.onRouteChangeError = () => {
      NProgress.done();
    };
  }

  public render(): ReactNode {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
