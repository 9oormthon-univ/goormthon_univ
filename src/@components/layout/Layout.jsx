import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
export default Layout;
