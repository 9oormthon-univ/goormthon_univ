import React, { useEffect, useRef } from 'react';
import * as S from './style';

export default function ProjectModal({ title, content, image, setModalOpen }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setModalOpen]);

  return (
    <S.ModalContainer>
      <S.Modal ref={modalRef}>
        <S.ModalCloseBtn onClick={() => setModalOpen(false)}>X</S.ModalCloseBtn>
        <S.ModalPosterImg src={image} alt="project__poster-img" />
        <S.ModalContent>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalOverview>{content}</S.ModalOverview>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
}
