import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 1.5rem;
  z-index: 2;
  border: 1px solid red;
`;

// 로고
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 10rem;
  color: gray;
`;

export const NavLogoIcon = styled.img`
  height: 0.9375rem;
  object-fit: cover;
  margin-right: 1.5rem;
`;

export const NavLogoTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

// 모니터
export const NavMonitorMenu = styled.div`
  gap: 0.25rem;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 1;
`;

// 네브링크
export const NavMenuLink = styled(Link)`
  padding: 0.56rem 1rem;
  color: var(--basic-color-gray-gray-900, #2b2d36);
  font-size: 0.875rem;
  text-decoration: ${(props) => (props.$isActive ? 'underline' : 'none')};
  -webkit-text-decoration: ${(props) => (props.$isActive ? 'underline' : 'none')};
  &:hover {
    border-radius: var(--border-radius-300, 0.5rem);
    background: var(--semantic-color-theme-link-transparent-8, rgba(133, 136, 153, 0.08));
    color: var(--basic-color-gray-gray-900, #2b2d36);
  }
  &:focus {
    color: var(--basic-color-gray-gray-900, #2b2d36);
  }
`;
// 모바일
export const NavMobileMenu = styled.div`
  height: 6rem;
  width: 10;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 1;
`;

// NavLink
export const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
`;

// 한글 영어
export const NavBarTranslate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;

  * {
    font-size: 1.5rem;
  }
`;

export const NavTranslateLanguage = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: gray;
  }
`;

export const NavTranslateSection = styled.div`
  padding: 0.2rem;
`;

// 사이드바
export const NavSideBarBackground = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: gray;
  opacity: 30%;
`;

export const NavSideBarWrapper = styled.div`
  display: none;
  opacity: 100%;
  width: 40rem;
  height: 100vh;
  padding: 2rem 2.5rem;
  z-index: 3;
  position: fixed;
  right: 0;
  top: 0;

  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  background-color: #fff;
  * {
    font-size: 2rem;
  }
`;

export const NavSideBarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavSideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  margin-bottom: 4rem;
  border-bottom: 0.2rem solid;
  border-color: black;
  color: blue;
  * {
    font-size: 3rem;
  }
`;

export const NavSideBarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
`;
