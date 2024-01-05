import { Badge, Button } from '@goorm-dev/gds-components';
import { GithubIcon } from '@goorm-dev/gds-icons';
import React, { useEffect, useRef } from 'react';
import * as S from './style';

export default function ProjectModal({
  award,
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
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalOverview>{content}</S.ModalOverview>
        <S.BadgeWrapper>
          <Badge color="dark" size="md" toggle={null}>
            {award}
          </Badge>
          <Badge color="primary" size="md" toggle={null}>
            {releaseLink === '' ? '' : '서비스 중'}
          </Badge>
        </S.BadgeWrapper>

        <S.ModalPosterImg src={image} alt="project__poster-img" />
        <S.ModalContent>
          <S.ModalMemberWrapper>
            <S.ModalMemberRowContent>
              <S.ModalMemberRowContentDetail>
                <S.PartText>기획 :&nbsp; </S.PartText>
                <S.NameText> {pm}</S.NameText>
              </S.ModalMemberRowContentDetail>
              <S.ModalMemberRowContentDetail>
                <S.PartText>디자인 :&nbsp; </S.PartText>
                <S.NameText> {design}</S.NameText>
              </S.ModalMemberRowContentDetail>
            </S.ModalMemberRowContent>

            <S.ModalMemberRowContent>
              <S.ModalMemberRowContentDetail>
                <S.PartText>프론트엔드 :&nbsp; </S.PartText>
                <S.NameText>{frontend.join(', ')}</S.NameText>
              </S.ModalMemberRowContentDetail>
              <S.ModalMemberRowContentDetail>
                <S.PartText>백엔드 :&nbsp; </S.PartText>
                <S.NameText>{backend.join(', ')}</S.NameText>
              </S.ModalMemberRowContentDetail>
            </S.ModalMemberRowContent>
          </S.ModalMemberWrapper>

          <S.ButtonWrapper>
            <Button
              color="link"
              iconSide="right"
              size="xl"
              tag="button"
              onClick={() => window.open(backendLink, '_blank')}
            >
              <GithubIcon />
              백엔드
            </Button>
            <Button
              color="link"
              iconSide="right"
              size="xl"
              tag="button"
              onClick={() => window.open(frontendLink, '_blank')}
            >
              <GithubIcon />
              프론트엔드
            </Button>
            <Button
              color="primary"
              iconSide="right"
              size="xl"
              tag="button"
              disabled={releaseLink === '' ? true : false}
              onClick={() => window.open(releaseLink, '_blank')}
            >
              서비스 바로가기
            </Button>
          </S.ButtonWrapper>
          {/* Team Members */}
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
}
