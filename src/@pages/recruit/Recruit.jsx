import React from 'react';
import * as S from './style';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';

export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* 지원 대상 */}
        <RecuritTarget />
        
        <S.BodyTitle>
          모집일정
        </S.BodyTitle>
      </S.RecuritBody>
    </>
  );
}
