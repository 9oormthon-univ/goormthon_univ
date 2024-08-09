// import { Text } from '@goorm-dev/gds-components';
import React from 'react';
import * as S from './style';

function RecuritCautionRowBox({ title, detail }) {
  return (
    <S.CautionRowBox>
      <S.CautionTitle>
        <S.TitleText typography="heading5">{title}</S.TitleText>
      </S.CautionTitle>
      <S.CautionDetail>
        <S.ContentsText typography="paragraph1">{detail}</S.ContentsText>
      </S.CautionDetail>
    </S.CautionRowBox>
  );
}

export default RecuritCautionRowBox;
