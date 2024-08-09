import React from 'react';
import * as S from './style';

function RecuritCautionRowBox({ title, detail }) {
  return (
    <S.CautionRowBox>
      <S.CautionTitle>{title}</S.CautionTitle>
      <S.CautionDetail>{detail}</S.CautionDetail>
    </S.CautionRowBox>
  );
}

export default RecuritCautionRowBox;
