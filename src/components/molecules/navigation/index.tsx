import React from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarData } from '../../../helper/sidebar';
import {
  StyledHeaderIcon,
  StyledBg,
  StyledNav,
  StyledList,
  StyledLogoutLink,
  StyledLogoutLinkMobile,
  StyledLinkMobile,
  StyledLogoutIcon,
  StyledListItem
} from './navigation-styled';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(location.pathname);

  return (
    <>
      <StyledBg>
        <StyledHeaderIcon alt="piggy bank icon" />
        <h1>Budget app</h1>
      </StyledBg>
      <StyledNav>
        <StyledList>
          {sidebarData.map(({ icon, title, link }) => {
            return (
              <Link to={link} key={title}>
                <StyledListItem className={pathname === link ? 'active' : ''}>
                  <img src={icon} alt={icon} />
                  <p>{title}</p>
                </StyledListItem>
              </Link>
            );
          })}
        </StyledList>
        <StyledLogoutLink to={routes.login}>
          <StyledLogoutIcon alt="log out icon" />
          <button>Log out</button>
        </StyledLogoutLink>
      </StyledNav>
    </>
  );
};

export default Navbar;
