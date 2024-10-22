import styled from 'styled-components';

export const HeaderUnivlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  cursor: pointer;
  filter: drop-shadow(var(--gray-300) 2px 8px 11px);
`;

export const UnivImg = styled.img`
  width: 17.875rem;
  height: 6rem;
`;

export const UnivName = styled.p`
  font-size: 0.8rem;
`;
