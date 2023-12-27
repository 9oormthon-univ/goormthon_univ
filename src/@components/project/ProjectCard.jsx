import React from 'react';
import * as S from './style';


function ProjectCard({ award, title, content, link, image }) {
  return (
    <S.CardContainer onClick={() => window.open(link, '_blank')}>
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
