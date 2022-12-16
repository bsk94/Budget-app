import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledHeaderIcon, StyledBg } from './navigation-styled';

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <StyledBg>
        <StyledHeaderIcon alt="piggy bank icon" />
        <h1>Budget app</h1>
      </StyledBg>
    </>
  );
};

export default Navbar;
