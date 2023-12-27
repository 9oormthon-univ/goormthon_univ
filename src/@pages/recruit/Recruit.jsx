import React from 'react';
import * as S from './style';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import { CalendarIcon, GroupIcon, SchoolIcon } from '@goorm-dev/gds-icons';

export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        <S.TargetContainer>
          <S.TargetTitle>학교 대표 지원 대상</S.TargetTitle>
          <S.TargetDetail>: IT 서비스에 관심이 많고 교내 IT 확산을 하고자 하는 사람</S.TargetDetail>
          <S.TargetRowDetailWrapper>
            <S.TargetRowDetailBox>
              {/* icon */}
              <SchoolIcon width="2rem" className="SchoolIcon__icon" color="black" />
              <S.TargetDetailBoxText>대학 재학 및 휴학중인 사람</S.TargetDetailBoxText>
              {/* text */}
            </S.TargetRowDetailBox>
            <S.TargetRowDetailBox>
              {/* icon */}
              <CalendarIcon width="2rem" className="CalendarIcon__icon" color="black" />
              <S.TargetDetailBoxText>2월부터 8월까지 활동이 가능한 사람</S.TargetDetailBoxText>
              {/* text */}
            </S.TargetRowDetailBox>
            <S.TargetRowDetailBox>
              {/* icon */}
              <GroupIcon width="2rem" className="GroupIcon__icon" color="black" />
              <S.TargetDetailBoxText>교내 운영 가능한 사람</S.TargetDetailBoxText>
              {/* text */}
            </S.TargetRowDetailBox>
          </S.TargetRowDetailWrapper>
        </S.TargetContainer>
      </S.RecuritBody>
    </>
  );
}
