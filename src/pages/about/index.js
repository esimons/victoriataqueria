import React from "react";

import Content from "../../components/content";

import "./_index.css";

const About = () => {
  return (
    <Content>
      <div>
        <p className="About_paragraph">Mexican Street Food</p>
        <p className="About_paragraph">
          La Victoria is a celebration of Mexican street food. We are pleased to
          bring you the flavors of Mexico, combining top quality local
          ingredients with family recipes and a passion for food.
        </p>
        <p className="About_paragraph">
          You deserve the best, you deserve La Victoria.
        </p>
        <p className="About_paragraph">Been provecho!</p>
        <p className="About_paragraph">Dine In/Take Out/Catering</p>
        <p className="About_paragraph">
          Monday - Saturday<br />
          11:00am - 9:00pm
        </p>
      </div>
    </Content>
  );
};

export default About;
