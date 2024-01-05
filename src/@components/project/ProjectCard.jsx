import React, { useRef, useEffect, useState } from 'react';
import ProjectModal from './projectModal/ProjectModal';

import * as S from './style';

function ProjectCard({
  index,
  award,
  title,
  content,
  backendLink,
  frontendLink,
  releaseLink,
  image,
  pm,
  design,
  frontend,
  backend,
}) {
  // 애니메이션 설정
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  //
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 모달 오픈
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '400px 0px',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <S.CardContainer
        ref={cardRef}
        onClick={() => setModalOpen(true)}
        // onClick={() => window.open(link, '_blank')}
        key={index}
        variants={variants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.4, delay: index * 0.3 }}
      >
        <S.CardImgWrapper>
          <S.CardImg src={image} />
          {award ? (
            <>
              <S.CardBedge>{award}</S.CardBedge>
            </>
          ) : (
            <></>
          )}
        </S.CardImgWrapper>
        <S.CardBodyWrapper>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardContent>{content}</S.CardContent>
        </S.CardBodyWrapper>
      </S.CardContainer>
      {isModalOpen && (
        <ProjectModal
          title={title}
          content={content}
          image={image}
          backendLink={backendLink}
          frontendLink={frontendLink}
          releaseLink={releaseLink}
          pm={pm}
          design={design}
          frontend={frontend}
          backend={backend}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

export default ProjectCard;
