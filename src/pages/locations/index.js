import React from "react";

import Content from "../../components/content";
import Heading from "../../components/heading";
import Paragraph from "../../components/paragraph";

import "./_index.css";

const Locations = () => {
  return (
    <Content className="Locations">
      <div className="Locations_wrap">
        <div className="Locations_item">
          <Heading children="Arlington" />
          <Paragraph className="Locations_paragraph">
            12 Medford St.<br />
            P 781 859-5503<br />
            Monday - Saturday<br />
            11:00 AM - 9:00 PM<br />
            Sunday<br />
            11:00 AM - 8:00 PM
          </Paragraph>
        </div>
        <div className="Locations_item">
          <Heading children="Beverly" />
          <Paragraph className="Locations_paragraph">
            6 Wallis st.<br />
            P 978 969-2228<br />
            Monday - Saturday<br />
            11:00 AM - 9:00 PM<br />
            Sunday<br />
            Closed
          </Paragraph>
        </div>
      </div>
    </Content>
  );
};

export default Locations;
