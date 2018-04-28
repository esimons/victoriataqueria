import React from 'react';
import Navbar from '../components/navbar';

import './_index.css';

const Page = ({children}) => {
  return (
    <div>
      <Navbar />
      {children()}
    </div>
  )
};

export default Page;
