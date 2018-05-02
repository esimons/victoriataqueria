import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";

import "./_index.css";

const Page = ({ children }) => {
  return <div>
      <Helmet>
        <html lang="en" />
        <title>La Victoria</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Helmet>
      <Navbar />
      {children()}
    </div>;
};

export default Page;
