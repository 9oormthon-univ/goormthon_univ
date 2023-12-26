import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';
import { ChevronRightIcon, MenuIcon } from '@goorm-dev/gds-icons';
import GULogo from '../../../assets/images/goormthon_univ_BI-Bk.png';
function Navbar() {
  //사이드바 열고 닫는 함수
  const sideBar = useRef();
  const sideBarBackground = useRef();
  const [isMobile, setisMobile] = useState(false);

  const sideBarOpen = () => {
    sideBar.current.style.display = 'flex';
    sideBarBackground.current.style.display = 'block';
  };

  //윈도우가 550px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth < 550) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  const sideBarClose = () => {
    sideBar.current.style.display = 'none';
    sideBarBackground.current.style.display = 'none';
  };

  const menuContents = [
    {
      link: `/`,
      title: 'About',
    },
    {
      link: `/project`,
      title: 'Project',
    },
    {
      link: `/recruite`,
      title: 'recruite',
    },
  ];

  //위치가 바뀔때마다
  const location = useLocation();
  useEffect(() => {
    if (isMobile) {
      sideBarClose();
    }
    window.scrollTo(0, 0);
  }, [location]);

  const setMenu = () => {
    return menuContents.map((menu, idx) => {
      // Check for an exact match if the link is '/', otherwise check with startsWith
      const isActive = menu.link === '/' ? location.pathname === menu.link : location.pathname.startsWith(menu.link);

      return (
        <S.NavMenuLink to={menu.link} key={idx} $isActive={isActive}>
          {menu.title}
        </S.NavMenuLink>
      );
    });
  };

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setisMobile(true);
    }
    window.addEventListener('resize', resizingHandler);

    return () => {
      window.removeEventListener('resize', resizingHandler);
    };
  }, []);

  return (
    <>
      <S.NavWrapper>
        <S.NavLogo to={'/'}>
          <S.NavLogoIcon src={GULogo} alt="9oormthon Univ" />
        </S.NavLogo>

        {isMobile ? (
          <>
            <S.NavMobileMenu>
              <MenuIcon width="3rem" className="MenuIcon__icon" onClick={sideBarOpen} />
            </S.NavMobileMenu>
            {/* 사이드바 */}
            <S.NavSideBarWrapper ref={sideBar}>
              <S.NavSideBarMenu>
                <S.NavSideBarHeader>
                  <ChevronRightIcon width="1rem" className="ChevronRightIcon__icon" />
                </S.NavSideBarHeader>
                <S.NavSideBarBody>{setMenu()}</S.NavSideBarBody>
              </S.NavSideBarMenu>
            </S.NavSideBarWrapper>
            <S.NavSideBarBackground ref={sideBarBackground} onClick={sideBarClose} />
          </>
        ) : (
          <S.NavMonitorMenu>{setMenu()}</S.NavMonitorMenu>
        )}
      </S.NavWrapper>
    </>
  );
}

export default Navbar;
