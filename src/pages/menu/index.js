import React from "react";
import PropTypes from "prop-types";

import Content from "../../components/content";
import Heading from "../../components/heading";

// import luchadore from "../../images/luchadore.png";

import "./_index.css";

const MenuSection = ({ item }) => (
  <li className="Menu_item">
    <Heading className="Menu_heading" level="2">
      {item.title} {item.price}
    </Heading>
    {item.description && (
      <p className="Menu_subHeading">({item.description})</p>
    )}
    {item.ingredients && (
      <ul className="Menu_subList">
        {item.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    )}
    {item.types && (
      <ul className="Menu_subList">
        {item.types.map(type => (
          <li key={type.title} className="Menu_item">
            <Heading className="Menu_heading" level="3">
              {type.title}
            </Heading>
            <ul className="Menu_subList">
              {type.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
    {item.list && (
      <ul className="Menu_subList">
        {item.list.map(listItem => (
          <li key={listItem.title}>
            {listItem.title}
            {listItem.price && ` ${listItem.price}`}
          </li>
        ))}
      </ul>
    )}
  </li>
);

export const Menu = ({ content }) => (
  <Content className="Menu">
    <ul className="Menu_list">
      <MenuSection item={content.burrito} />
      <MenuSection item={content.quesadilla} />
      <MenuSection item={content.taco} />
      <MenuSection item={content.plato} />
      <MenuSection item={content.salad} />
      <li className="Menu_item">
        <p className="Menu_note">{content.addons}</p>
      </li>
      <MenuSection item={content.tortas} />
    </ul>
    <ul className="Menu__secondary_list">
      <MenuSection item={content.fillings} />
      <MenuSection item={content.sides} />
      <MenuSection item={content.drinks} />
    </ul>
  </Content>
);

Menu.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query MenuQuery {
    allFile(filter: { relativePath: { eq: "menu.md" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              burrito {
                title
                description
                price
                ingredients
              }
              taco {
                title
                description
                price
                ingredients
              }
              quesadilla {
                title
                description
                price
                ingredients
              }
              salad {
                title
                description
                price
                ingredients
              }
              plato {
                title
                description
                price
                ingredients
              }
              addons
              drinks {
                title
                list {
                  title
                  price
                }
              }
              fillings {
                title
                list {
                  title
                }
              }
              sides {
                title
                list {
                  title
                  price
                }
              }
              tortas {
                title
                description
                price
                ingredients
                types {
                  title
                  ingredients
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  return <Menu content={content} />;
};
