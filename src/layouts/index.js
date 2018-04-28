import React from 'react';
import Navbar from '../components/navbar';

const Page = ({children}) => {
  return (
    <div>
      <Navbar />
      {children()}
    </div>
  )
};

export default Page;
