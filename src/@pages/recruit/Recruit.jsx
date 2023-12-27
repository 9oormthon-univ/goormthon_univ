import React from 'react';
import * as S from './style';
import { Button } from 'reactstrap';
import KoreaUnivSaejongImg from '../../assets/images/university/koreaSaejong.png';
import { TextButton } from '@goorm-dev/gds-components';

export default function Recruit() {
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitleWrapper>
          <S.HeaderTitleText>구름톤 유니브 2기 모집 중!</S.HeaderTitleText>
          <TextButton>학교 대표 신청</TextButton>
        </S.HeaderTitleWrapper>
        <S.HeaderUnivContainer>
          <S.HeaderUnivTitleText>현재 함께하는 유니브 9개</S.HeaderUnivTitleText>
          <S.HeaderUnivListContainer>
            <S.HeaderUnivlWrapper>
              <S.UnivImg src={KoreaUnivSaejongImg} />
              <S.UnivName class="p-lg-3">고려대학교(세종)</S.UnivName>
            </S.HeaderUnivlWrapper>
            <S.HeaderUnivlWrapper>
              <S.UnivImg src={KoreaUnivSaejongImg} />
              <S.UnivName class="p-lg-3">고려대학교(세종)</S.UnivName>
            </S.HeaderUnivlWrapper>
            <S.HeaderUnivlWrapper>
              <S.UnivImg src={KoreaUnivSaejongImg} />
              <S.UnivName class="p-lg-3">고려대학교(세종)</S.UnivName>
            </S.HeaderUnivlWrapper>
          </S.HeaderUnivListContainer>
        </S.HeaderUnivContainer>
        모집 페이지 입니다.
      </S.HeaderContainer>
      <div>으아아악</div>
    </>
  );
}
