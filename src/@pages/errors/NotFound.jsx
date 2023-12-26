import React from 'react';
import { useRouteError } from 'react-router-dom';
import * as S from './style';

export default function NotFound() {
  const error = useRouteError();

  // 디폴트 메세지
  let errorMessage = "The page you're looking for cannot be found.";
  let errorDetail = 'Please check the URL or go back to the homepage.';

  // 에러 있을시
  if (error) {
    errorMessage = error.statusText || 'An unexpected error has occurred.';
    errorDetail = error.message || '';
  }

  return (
    <S.MainWrapper>
      <S.MainTitle>Oops!</S.MainTitle>
      <S.MainDescription>{errorMessage}</S.MainDescription>
      <S.MainSubDescription>{errorDetail}</S.MainSubDescription>
    </S.MainWrapper>
  );
}
