import React, { useEffect, useState } from 'react';
import * as S from './style';
import UniversityItem from '../../recruit/UniversityItem/UniversityItem';
import Universities from '../../../utilities/UnivData';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import RecruitUnivScrolling from '../../recruit/recruitUnivScrolling/RecruitUnivScrolling';

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
`;

const ImageSlider = styled.div`
  display: flex;
  animation: slide 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    } // 목록의 절반만큼만 이동
  }
`;

function FindingUniv() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // 목표 날짜 설정 (24년 1월 12일)
    const targetDate = new Date('2024-01-12');

    // 현재 날짜 가져오기
    const currentDate = new Date();

    // 남은 날짜 계산
    const timeRemaining = targetDate - currentDate;
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    setDaysRemaining(daysRemaining);
  }, []);

  const navigateToRecruit = () => {
    navigate('/recruit');
    window.scrollTo(0, 0);
  };

  const AutoScrollingImages = () => {
    const doubledUniversities = [...Universities, ...Universities, ...Universities];

    return (
      <Container>
        <ImageSlider>
          {doubledUniversities.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </ImageSlider>
      </Container>
    );
  };

  return (
    <S.FindingUnivWrapper>
      <S.HeaderContainer>
        <S.HeaderTitleWrapper>
          <S.HeaderTitleText>새로운 유니브를 찾고 있어요!</S.HeaderTitleText>
          <S.HeaderTitleTextSmall>새로운 유니브를 찾고 있어요!</S.HeaderTitleTextSmall>

          <S.GoormBtn color="primary" size="xl" tag="button" onClick={() => navigateToRecruit()}>
            자세히 보기
          </S.GoormBtn>
        </S.HeaderTitleWrapper>
        <S.HeaderUnivContainer>
          <S.HeaderUnivTitleText>현재 함께하는 유니브 18개</S.HeaderUnivTitleText>
          <S.HeaderUnivTitleTextSmall>현재 함께하는 유니브 18개</S.HeaderUnivTitleTextSmall>
          <RecruitUnivScrolling searchable={false} />
          {/* <S.HeaderUnivListContainer>
            <AutoScrollingImages />
          </S.HeaderUnivListContainer> */}
        </S.HeaderUnivContainer>
      </S.HeaderContainer>
    </S.FindingUnivWrapper>
  );
}

export default FindingUniv;
