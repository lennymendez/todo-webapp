import React from "react";
import Head from "next/head";

const Layout = props => (
  <div
    style={{
      margin: "0",
      padding: "0"
    }}
  >
    <Head>
      <title>NextJS Boilerplate for Static Pages</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
      />
    </Head>
    {props.children}
  </div>
);

export default Layout;
