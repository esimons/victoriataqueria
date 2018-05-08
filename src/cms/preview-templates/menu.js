import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from "../../pages/menu";

const MenuPreview = ({ entry }) => (
  <Menu
    content={entry.get("data").toJS()}
  />
);

MenuPreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func
  })
};

export default MenuPreview;
