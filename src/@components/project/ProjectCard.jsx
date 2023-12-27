import React from 'react';
import * as S from './style';

function ProjectCard({ index, award, title, content, link, image }) {
  // 애니메이션 설정
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  // const isView = useInview

  return (
    <S.CardContainer
      onClick={() => window.open(link, '_blank')}
      key={index}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.2 }}
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
  );
}

export default ProjectCard;
