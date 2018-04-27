import React from 'react';

import Content from '../content';

import Image from '../../images/lavictoria.jpg';

import './_index.css';

const Home = () => {
  return (
    <Content>
      <div className="Home">
        <img src={Image} title="La Victoria" alt="" />
      </div>
    </Content>
  )
};

export default Home;