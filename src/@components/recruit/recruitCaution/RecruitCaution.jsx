import React from 'react';
import RecuritCautionRowBox from '../recuritCautionRowBox/RecuritCautionRowBox';
import styled from 'styled-components';

export const CautionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

function RecruitCaution() {
  return (
    <CautionWrapper>
      <RecuritCautionRowBox title="활동기간" detail="2월부터 8월까지 운영 가능해야 합니다." />
      <RecuritCautionRowBox title="성실함" detail="대표로서 성실하고 책임감있게 활동해야 합니다." />
      <RecuritCautionRowBox title="모집 마감일 준수" detail="교내 학생 및 운영진 모집 마감일은 2월 11일까지입니다." />
      <RecuritCautionRowBox title="중앙행사 참여" detail="OT와 벚꽃톤은 필수적으로 참여해야 합니다." />
      <RecuritCautionRowBox title="대표 미팅" detail="매달 첫째 주에 진행되는 대표 미팅에 참여가 가능해야 합니다." />
    </CautionWrapper>
  );
}

export default RecruitCaution;
