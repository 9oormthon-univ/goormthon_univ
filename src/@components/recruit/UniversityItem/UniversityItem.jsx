import React from 'react';
import * as S from './style';

const UniversityItem = ({ image, name, link }) => {
  return (
    <S.HeaderUnivlWrapper onClick={() => window.open(link, '_blank')}>
      <S.UnivImg src={image} />
      <S.UnivName className="p-lg-3">{name}</S.UnivName>
    </S.HeaderUnivlWrapper>
  );
};

export default UniversityItem;
