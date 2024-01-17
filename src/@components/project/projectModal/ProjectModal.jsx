import * as S from './style';
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@goorm-dev/gds-components';

function ProjectModal({
  toggleModal,
  isModalOpen,
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
}) {
  return (
    <>
      <Modal isOpen={isModalOpen} direction="vertical" size="md" toggle={toggleModal} type="center">
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          <S.ModalBodyContainer>
            <S.ProjectContent>
              <S.Title>{title}</S.Title>
              <S.Description>{content}</S.Description>
              <S.ProjectImg src={image} alt={title} />
            </S.ProjectContent>
            <S.ContributorContent>
              <S.ContributorInfo>
                <S.Role>기획</S.Role>
                <S.Name className="paragraph-lg">{pm}</S.Name>
              </S.ContributorInfo>
              <S.ContributorInfo>
                <S.Role>디자인</S.Role>
                <S.Name className="paragraph-lg">{design}</S.Name>
              </S.ContributorInfo>
              <S.ContributorInfo className="developer">
                <S.Role>프론트엔드</S.Role>
                <S.Name className="paragraph-lg">{frontend.join(', ')}</S.Name>
              </S.ContributorInfo>
              <S.ContributorInfo className="developer">
                <S.Role>백엔드</S.Role>
                <S.Name className="paragraph-lg">{backend.join(', ')}</S.Name>
              </S.ContributorInfo>
            </S.ContributorContent>
          </S.ModalBodyContainer>
        </ModalBody>
        <ModalFooter>
          <React.Fragment key=".0">
            <Button color="link" size="lg" onClick={() => window.open(backendLink, '_blank')}>
              백엔드 Github
            </Button>
            <Button color="link" size="lg" onClick={() => window.open(frontendLink, '_blank')}>
              프론트엔드 Github
            </Button>
            <Button
              color="primary"
              size="lg"
              disabled={releaseLink === ''}
              onClick={() => window.open(releaseLink, '_blank')}
            >
              서비스 바로가기
            </Button>
          </React.Fragment>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ProjectModal;
