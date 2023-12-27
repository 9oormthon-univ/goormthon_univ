import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  background: var(--light-gray-gray-050, #f7f7fa);
  color: #000;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  margin-top: 6.25rem;
  margin-bottom: 8.25rem;
`;

export const HeaderTitleText = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.5rem;
`;

export const HeaderUnivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid blue;
  margin-bottom: 4.5rem;
`;

export const HeaderUnivTitleText = styled.h5`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 1.5rem;
`;

export const HeaderUnivListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  border: 1px solid purple;
`;

export const HeaderUnivlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid purple;
`;

export const UnivImg = styled.img`
  width: 3.875rem;
  height: 5.375rem;
`;

export const UnivName = styled.p``;
