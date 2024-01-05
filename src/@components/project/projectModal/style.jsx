import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6); // Semi-transparent background
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2.5em;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;

  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1rem;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const ModalPosterImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1.2rem;
  margin-bottom: 2rem;
`;

export const ModalContent = styled.div`
  text-align: center;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const ModalOverview = styled.h6`
  color: var(--alternative);
`;

export const ModalMemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  gap: 1rem;
`;

export const ModalMemberRowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: start;
  align-items: flex-start;
`;

export const ModalMemberRowContentDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PartText = styled.h5``;
export const NameText = styled.h6`
  color: var(--hint);
`;
