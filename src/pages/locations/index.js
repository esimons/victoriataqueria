import React from "react";

import Content from "../../components/content";
import Heading from "../../components/heading";
import Paragraph from "../../components/paragraph";

import "./_index.css";

const LocationItem = ({
  city,
  address,
  phone,
  hours
}) => (
  <div className="Locations_item">
    <Heading>{city}</Heading>
    <Paragraph className="Locations_paragraph">
      {address}<br />
      {phone}<br />
      {hours.map(({day, time}, i) => [
        i === 0 ? null : <br />,
        day,
        <br />,
        time
      ])}
    </Paragraph>
  </div>
);

export const Locations = ({content}) => {
  return (
    <Content className="Locations">
      <div className="Locations_wrap">
        {content.locations.map(location => <LocationItem {...location} />)}
      </div>
    </Content>
  );
};

export const pageQuery = graphql`
  query LocationsQuery {
    allFile(filter: { relativePath: { eq: "locations.md" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              locations {
                city
                address
                phone
                hours {
                  day
                  time
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
  return <Locations content={content} />;
};