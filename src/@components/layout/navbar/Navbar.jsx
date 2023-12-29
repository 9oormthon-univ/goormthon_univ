import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import { ChevronRightIcon, MenuIcon } from '@goorm-dev/gds-icons';
import GULogo from '../../../assets/images/goormthon_univ_BI-Bk.png';

const useScrollDirection = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return scrollDirection;
};

function Navbar() {
  const navbarRef = useRef();
  const scrollDirection = useScrollDirection();

  //사이드바 열고 닫는 함수
  const sideBar = useRef();
  const sideBarBackground = useRef();
  const [isMobile, setisMobile] = useState(false);

  //네브바 열릴떄
  const sideBarOpen = () => {
    sideBar.current.style.display = 'block';
    sideBarBackground.current.style.display = 'block';

    //랜더링. 하기.
    setTimeout(() => {
      sideBar.current.style.opacity = '1';
      sideBar.current.style.right = '0';
      sideBarBackground.current.style.opacity = '1';
    }, 10);
  };

  // 네브바 닫힐때
  const sideBarClose = () => {
    sideBar.current.style.opacity = '0';
    sideBar.current.style.right = '-16rem';
    sideBarBackground.current.style.opacity = '0';

    // 에니메이션
    setTimeout(() => {
      sideBar.current.style.display = 'none';
      sideBarBackground.current.style.display = 'none';
    }, 300);
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
      link: `/recruit`,
      title: 'Recruit',
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

  useEffect(() => {
    if (scrollDirection === 'down') {
      navbarRef.current.style.top = '-7rem';
    } else {
      navbarRef.current.style.top = '0';
    }
  }, [scrollDirection]);

  const setMenu = () => {
    return menuContents.map((menu, idx) => {
      const isActive = menu.link === '/' ? location.pathname === menu.link : location.pathname.startsWith(menu.link);
      return (
        <React.Fragment key={idx}>
          <S.NavMenuLink to={menu.link} $isActive={isActive}>
            {menu.title}
          </S.NavMenuLink>
          {menu.title === 'Recruit' && !isMobile && location.pathname === '/' ? (
            <S.AlertMessage>2기 모집중 !</S.AlertMessage>
          ) : null}
        </React.Fragment>
      );
    });
  };

  //윈도우가 479px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth <= 479) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizingHandler);
    resizingHandler();

    return () => {
      window.removeEventListener('resize', resizingHandler);
    };
  }, [isMobile]);

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
      <S.NavWrapper ref={navbarRef}>
        <S.NavLogo to={'/'}>
          <S.NavLogoIcon src={GULogo} alt="9oormthon Univ" />
        </S.NavLogo>

        {isMobile ? (
          <>
            <S.NavMobileMenu>
              <MenuIcon width="2rem" className="MenuIcon__icon" onClick={sideBarOpen} color="black" />
            </S.NavMobileMenu>
            {/* 사이드바 */}
            <S.NavSideBarWrapper ref={sideBar}>
              <S.NavSideBarMenu>
                <S.NavSideBarHeader>
                  <ChevronRightIcon
                    height="2rem"
                    width="2rem"
                    className="ChevronRightIcon__icon"
                    color="#000000"
                    onClick={sideBarClose}
                  />
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
