import React from 'react';

import Content from '../content';

import './_index.css';

const Locations = () => {
  return (
    <Content>
      <div>
        <p className="Locations_paragraph">
          Arlington<br/>
          12 Medford St.<br/>
          P 781 859-5503<br/>
          Monday - Saturday<br/>
          11:00 AM - 9:00 PM<br/>
          Sunday<br/>
          11:00 AM - 8:00 PM
        </p>
        <p className="Locations_paragraph">
          Beverly<br/>
          6 Wallis st.<br/>
          P 978 969-2228<br/>
          Monday - Saturday<br/>
          11:00 AM - 9:00 PM<br/>
          Sunday<br/>
          Closed
        </p>
      </div>
    </Content>
  )
};

export default Locations;