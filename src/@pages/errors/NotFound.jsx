import React from 'react';
import { useRouteError } from 'react-router-dom';
import NotFoundImg from '../../assets/images/notfound.png';
import * as S from './style';

export default function NotFound() {
  const error = useRouteError();

  // 디폴트 메세지
  let errorMessage = '이런, 잘못된 페이지로 들어왔네요! 상단 오른쪽 로고를 통해 메인으로 이동해보아요 :) ';
  let errorDetail = '이런, 잘못된 페이지로 들어왔네요! 상단 왼쪽 로고를 통해 메인으로 이동해보아요 :)';

  // 에러 있을시
  if (error) {
    errorMessage = error.statusText || 'An unexpected error has occurred.';
    errorDetail = error.message || '';
  }

  return (
    <S.MainWrapper>
      <S.NotFoundImg src={NotFoundImg} />
      <S.MainTitle>잘못된 페이지에요!</S.MainTitle>
      {/* <S.MainDescription>{errorMessage}</S.MainDescription> */}
      <S.MainSubDescription>{errorDetail}</S.MainSubDescription>
    </S.MainWrapper>
  );
}
