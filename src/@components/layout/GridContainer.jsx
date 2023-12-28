import React from 'react';
import styled from 'styled-components';

export default function GridContainer({ children }) {
  return <GridContainerWrapper>{children}</GridContainerWrapper>;
}

export const GridContainerWrapper = styled.div`
  width: 1104px;
`;
