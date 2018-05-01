import React from "react";

import Content from "../../components/content";
import Heading from "../../components/heading";

// import luchadore from "../../images/luchadore.png";

import "./_index.css";

const Menu = () => {
  return (
    <Content className="Menu">
      <ul className="Menu_list">
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Burrito 5.5*
          </Heading>
          <p className="Menu_subHeading">(12” Flour Tortilla)</p>
          <ul className="Menu_subList">
            <li>Mexican Rice</li>
            <li>Beans</li>
            <li>Pico De Gallo</li>
            <li>Choice Of Filling</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Quesadilla 4.95*
          </Heading>
          <p className="Menu_subHeading">(10” Flour Tortilla)</p>
          <ul className="Menu_subList">
            <li>Cheese</li>
            <li>Choice Of Filling</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Taco 2.85
          </Heading>
          <ul className="Menu_subList">
            <li>Soft Corn Tortilla</li>
            <li>Onions</li>
            <li>Cilantro</li>
            <li>Salsa</li>
            <li>Choice Of Filling</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Plato Mexicano 5.95*
          </Heading>
          <ul className="Menu_subList">
            <li>Mexican Rice</li>
            <li>Beans</li>
            <li>Pico De Gallo</li>
            <li>Sour Cream</li>
            <li>Choice Of Filling</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Salad 3.95
          </Heading>
          <ul className="Menu_subList">
            <li>Lettuce</li>
            <li>Tomatoes</li>
            <li>Avacado</li>
            <li>Onions</li>
            <li>Queso Fresco</li>
          </ul>
        </li>
        <li className="Menu_item">
          <p className="Menu_note">
            *Add Guacamole, Sour Cream Or Cheese .50 Each. Extra Fillings Add
            1.00 Each
          </p>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Tortas 6.50
          </Heading>
          <p className="Menu_subHeading">(Mexican Sandwich)</p>
          <ul className="Menu_subList">
            <li>Telera Bread</li>
            <li>Bean Puree</li>
            <li>Tomato</li>
            <li>Jalapeños</li>
            <li>Onions</li>
            <li>Queso Fresco ‘ Chipotle Mayo</li>
            <li>Avacado</li>
            <li>Lettucs*</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Victoria
          </Heading>
          <ul className="Menu_subList">
            <li>Smoked Ham</li>
            <li>Pork Carnitas</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Milanesa *
          </Heading>
          <p className="Menu_subHeading">Breaded Chicken Fillet</p>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Choriqueso
          </Heading>
          <ul className="Menu_subList">
            <li>Mexican Sausage</li>
            <li>Melted Cheese</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Dos Caidas
          </Heading>
          <ul className="Menu_subList">
            <li>Pork Carnitas</li>
            <li>Mexican Sausage</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            El Chavo *
          </Heading>
          <ul className="Menu_subList">
            <li>Smoked Ham</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Vegetal *
          </Heading>
          <ul className="Menu_subList">
            <li>Assorted Vegetables</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Surtido
          </Heading>
          <ul className="Menu_subList">
            <li>Pork Skin</li>
            <li>Meat</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Al Pastor
          </Heading>
          <ul className="Menu_subList">
            <li>Marinated Pork</li>
          </ul>
        </li>
      </ul>
      <ul className="Menu__secondary_list">
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Fillings
          </Heading>
          <ul className="Menu_subList">
            <li>Marinated Chicken</li>
            <li>Pork Carnitas</li>
            <li>Mexican Sausage</li>
            <li>Steak</li>
            <li>Pastor</li>
            <li>Vegetables</li>
            <li>Pork Skin</li>
            <li>Meat</li>
            <li>Beef Tongue</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Sides
          </Heading>
          <ul className="Menu_subList">
            <li>Rice 2</li>
            <li>Beans 2</li>
            <li>Chips &amp; Salsa 2.5</li>
            <li>Guacamole 2.75</li>
          </ul>
        </li>
        <li className="Menu_item">
          <Heading className="Menu_heading" level="2">
            Drinks
          </Heading>
          <ul className="Menu_subList">
            <li>Horchata 2</li>
            <li>Jarritos 2</li>
            <li>Sodas 1.5</li>
            <li>Water 1.5</li>
          </ul>
        </li>
      </ul>
    </Content>
  );
};

export default Menu;
