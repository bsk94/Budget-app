import React from 'react';
import fileIcon from '../../../assets/icons/notfound.svg';
import { StyledContainer } from './notFound-styled';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

const NotFound = () => {
  return (
    <StyledContainer>
      <img src={fileIcon} alt="not found icon" />
      <h2>Page not found!</h2>
      <p>The page you are looking for was moved, removed, renamed or migth never existed.</p>
      <Link to={routes.overview}>
        <button>Go back to home page</button>
      </Link>
    </StyledContainer>
  );
};

export default NotFound;
