import React from 'react';
import * as S from './style';
import RecuritHeader from '../../@components/recruit/recuritHeader/RecuritHeader';
import RecuritTarget from '../../@components/recruit/recuritTarget/RecuritTarget';
import DefaultImg from '../../assets/images/dummy.png';
import RecuritCautionRowBox from '../../@components/recruit/recuritCautionRowBox/RecuritCautionRowBox';
export default function Recruit() {
  return (
    <>
      <RecuritHeader />
      <S.RecuritBody>
        {/* ---------------- 지원 대상 ---------------- */}
        <RecuritTarget />
        {/* ---------------- 모집일정 ---------------- */}
        <S.RecuritCalendarWrapper>
          <S.BodyTitle>모집일정</S.BodyTitle>
          <S.RecuritCalendarImg src={DefaultImg}></S.RecuritCalendarImg>
        </S.RecuritCalendarWrapper>
        {/* ---------------- 유의 사항 ---------------- */}
        <S.RecuritCautionWrapper>
          <S.BodyTitle>유의사항</S.BodyTitle>
          <S.CautionWrapper>
            <RecuritCautionRowBox title="활동기간" detail="2월부터 8월까지 운영 가능해야 합니다." />
            <RecuritCautionRowBox title="성실함" detail="대표로서 성실하고 책임감있게 활동해야 합니다." />
            <RecuritCautionRowBox
              title="모집 마감일 준수"
              detail="교내 학생 및 운영진 모집 마감일은 2월 11일까지입니다."
            />
            <RecuritCautionRowBox title="중앙행사 참여" detail="OT와 벚꽃톤은 필수적으로 참여해야 합니다." />
            <RecuritCautionRowBox
              title="대표 미팅"
              detail="매달 첫째 주에 진행되는 대표 미팅에 참여가 가능해야 합니다."
            />
          </S.CautionWrapper>
        </S.RecuritCautionWrapper>
        {/* ---------------- 자주 묻는 질문 ---------------- */}
        <S.RecuritFAQWrapper>
          <S.BodyTitle>자주 묻는 질문</S.BodyTitle>
          <S.CautionWrapper>
            <RecuritCautionRowBox title="활동기간" detail="2월부터 8월까지 운영 가능해야 합니다." />
            <RecuritCautionRowBox title="성실함" detail="대표로서 성실하고 책임감있게 활동해야 합니다." />
            <RecuritCautionRowBox
              title="모집 마감일 준수"
              detail="교내 학생 및 운영진 모집 마감일은 2월 11일까지입니다."
            />
            <RecuritCautionRowBox title="중앙행사 참여" detail="OT와 벚꽃톤은 필수적으로 참여해야 합니다." />
            <RecuritCautionRowBox
              title="대표 미팅"
              detail="매달 첫째 주에 진행되는 대표 미팅에 참여가 가능해야 합니다."
            />
          </S.CautionWrapper>
        </S.RecuritFAQWrapper>
      </S.RecuritBody>
    </>
  );
}
