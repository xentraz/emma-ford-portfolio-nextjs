import { NavStyle } from './nav.style';
import { useState } from 'react';
import NavItems from './navItems';

const Navigation = () => {
  return (
    <>
      <NavStyle>
        <NavItems/>
      </NavStyle> 
    </>
  );
}; 

export default Navigation;


