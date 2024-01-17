import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CustomFooter from '../layout/footer/CustomFooter';
import { Footer } from '@goorm-dev/gds-components';
import CustomNavbar from './navbar/CustomNavbar';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <CustomNavbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <CustomFooter />
      <StyledFooter localeListGroup={[]} />
    </>
  );
};
export default Layout;

const StyledFooter = styled(Footer)`
  position: absolute;
  width: 100%;
  z-index: 2;
`;
