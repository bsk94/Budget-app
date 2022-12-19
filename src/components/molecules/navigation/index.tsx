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
} from './navigation-styles';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import Button from '../../atoms/button';

const Navbar = () => {
  const { pathname } = useLocation();

  const { isDesktop } = useIsDesktop();

  return (
    <>
      {isDesktop ? (
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
              <Button>Log out</Button>
            </StyledLogoutLink>
          </StyledNav>
        </>
      ) : (
        <>
          <StyledLogoutLinkMobile to={routes.login}>
            <StyledLogoutIcon alt="log out icon" />
            <Button>Log out</Button>
          </StyledLogoutLinkMobile>
          <StyledNav>
            <StyledList>
              {sidebarData.map(({ icon, title, link }) => {
                return (
                  <StyledLinkMobile to={link} key={title}>
                    <img src={icon} alt={icon} />
                    <p>{title}</p>
                  </StyledLinkMobile>
                );
              })}
            </StyledList>
          </StyledNav>
        </>
      )}
    </>
  );
};

export default Navbar;
