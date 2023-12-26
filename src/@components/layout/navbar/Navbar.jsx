import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';
import GULogo from '../../../assets/images/goormthon_univ_BI-W.png';
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
      link: `/about`,
      title: 'About',
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
    return menuContents.map((menu, idx) => (
      <Link to={menu.link} key={idx} $isActive={location.pathname.startsWith(menu.link)}>
        {menu.title}
      </Link>
    ));
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
        <S.NavLogo>
          <S.NavLogoIcon src={GULogo} alt="9oormthon Univ" />
          {/* <S.NavLogoTitle to={`/`}> </S.NavLogoTitle> */}
        </S.NavLogo>

        {isMobile ? (
          <>
            <S.NavMobileMenu>아이콘</S.NavMobileMenu>
            {/* 사이드바 */}
            <S.NavSideBarWrapper ref={sideBar}>
              <S.NavSideBarMenu>
                <S.NavSideBarHeader>
                  아이콘
                  {/* <BsChevronCompactRight /> */}
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
