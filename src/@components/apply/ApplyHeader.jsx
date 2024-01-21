import React from 'react';
import * as S from './style';

function ApplyHeader() {
  return (
    <S.FormDescription>
      <S.CautionTitle>유니브 대표 주요 일정</S.CautionTitle>
      <ul>
        <li>
          <strong>신규 유니브 모집 신청</strong> : 12월 29일 (금) ~ 1월 12일 (금) (총 14일)
        </li>
        <li>
          <strong>대표 인터뷰 기간</strong> : 별도 안내 예정
        </li>
        <li>
          <strong>합격 발표</strong> : 1월 17일(수)
        </li>
        <li>
          <strong>대표 OT</strong> : 1월 00일(토)
        </li>
        <li>
          <strong>운영진 모집 기간</strong> : 1월 11일 ~ 2월 11일
        </li>
        <S.CautionWrapper>
          <li className="text-gray-600">현재 함께하는 유니브에서는 대표 신청이 불가합니다.</li>
          <li className="text-gray-600">2명 이상 대표 신청을 할 시 인터뷰 진행 후 대표 선정됩니다.</li>
          <li className="text-gray-600">제출해주신 메일로 인터뷰 안내 예정입니다.</li>
        </S.CautionWrapper>
      </ul>
    </S.FormDescription>
  );
}

export default ApplyHeader;
