import React from 'react'
import PropTypes from 'prop-types'
import { Locations } from "../../pages/locations";

const LocationsPreview = ({ entry }) => (
  <Locations
    content={entry.get("data").toJS()}
  />
);

LocationsPreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func
  })
};

export default LocationsPreview;
