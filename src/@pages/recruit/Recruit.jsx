import React from 'react';
import * as S from './style';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import DefaultImg from '../../assets/images/dummy.png';
export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* 지원 대상 */}
        <RecuritTarget />
        <S.RecuritCalendarWrapper>
          <S.BodyTitle>모집일정</S.BodyTitle>
          <S.RecuritCalendarImg src={DefaultImg}></S.RecuritCalendarImg>
        </S.RecuritCalendarWrapper>
      </S.RecuritBody>
    </>
  );
}
