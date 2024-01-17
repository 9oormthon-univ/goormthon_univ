import React, { useState } from 'react';
import { GoormNavbar, Nav, NavItem } from '@goorm-dev/gds-components';
import LogoDark from '../../../assets/images/goormthon_univ_BI-Bk.png';
import LogoLight from '../../../assets/images/goormthon_univ_BI-W.png';
import * as S from './style';
import { useLocation } from 'react-router-dom';

function CustomNavbar() {
  const [isOpened, setIsOpened] = useState(false);

  const location = useLocation();
  const isAbout = location.pathname === '/';

  return (
    <GoormNavbar isOpened={isOpened} setIsOpened={setIsOpened}>
      <GoormNavbar.Brand href="/">
        <S.NavLogoIcon src={isAbout && !isOpened ? LogoLight : LogoDark} alt="9oormthon Univ" />
      </GoormNavbar.Brand>
      <GoormNavbar.Collapse isOpened={isOpened} className="justify-content-end">
        <Nav navbar>
          <NavItem>
            <S.NavLink
              $isAbout={isAbout}
              $isOpened={isOpened}
              className="nav-link"
              to="/"
              onClick={() => isOpened && setIsOpened((prev) => !prev)}
            >
              About
            </S.NavLink>
          </NavItem>
          <NavItem>
            <S.NavLink
              $isAbout={isAbout}
              $isOpened={isOpened}
              className="nav-link"
              to="/project"
              onClick={() => isOpened && setIsOpened((prev) => !prev)}
            >
              Project
            </S.NavLink>
          </NavItem>
          <NavItem>
            <S.NavLink
              $isAbout={isAbout}
              $isOpened={isOpened}
              className="nav-link"
              to="/recruit"
              onClick={() => isOpened && setIsOpened((prev) => !prev)}
            >
              Recruit
            </S.NavLink>
          </NavItem>
        </Nav>
      </GoormNavbar.Collapse>
      <S.Toggler isOpened={isOpened} $isAbout={isAbout} onClick={() => setIsOpened((prev) => !prev)} />
    </GoormNavbar>
  );
}

export default CustomNavbar;
