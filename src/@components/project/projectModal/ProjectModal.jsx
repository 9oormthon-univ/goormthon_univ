import React, { useEffect, useRef } from 'react';
import * as S from './style';

export default function ProjectModal({
  title,
  content,
  image,
  backendLink,
  frontendLink,
  releaseLink,
  pm,
  design,
  frontend,
  backend,
  setModalOpen,
}) {
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
          {/* Display URLs */}
          <div>
            {backendLink && (
              <p>
                Backend GitHub:{' '}
                <a href={backendLink} target="_blank" rel="noopener noreferrer">
                  {backendLink}
                </a>
              </p>
            )}
            {frontendLink && (
              <p>
                Frontend GitHub:{' '}
                <a href={frontendLink} target="_blank" rel="noopener noreferrer">
                  {frontendLink}
                </a>
              </p>
            )}
            {releaseLink && (
              <p>
                Release URL:{' '}
                <a href={releaseLink} target="_blank" rel="noopener noreferrer">
                  {releaseLink}
                </a>
              </p>
            )}
          </div>
          {/* Team Members */}
          <div>
            <p>PM: {pm}</p>
            <p>Design: {design}</p>
            <p>Frontend: {frontend.join(', ')}</p>
            <p>Backend: {backend.join(', ')}</p>
          </div>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
}
