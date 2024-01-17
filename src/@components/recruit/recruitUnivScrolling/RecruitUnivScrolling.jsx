import React from 'react';
import Universities from '../../../utilities/UnivData';
import UniversityItem from '../UniversityItem/UniversityItem';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
`;

const ImageSlider = styled.div`
  display: flex;
  animation: slide 15s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    } // 목록의 절반만큼만 이동
  }
`;

const ImageSlider2 = styled.div`
  display: flex;
  animation: slide2 15s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  @keyframes slide2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    } // 목록의 절반만큼만 이동
  }
`;
const ShadowBgCotianer = styled.div`
  filter: drop-shadow(rgba(50, 83, 198, 0.14) 0px 18px 40px);
`;

function RecruitUnivScrolling() {
  const firstHalfUniversities = Universities.slice(0, Universities.length / 2);
  const secondHalfUniversities = Universities.slice(Universities.length / 2);
  return (
    <ShadowBgCotianer className="d-flex flex-column">
      <Container>
        {[...Array(3)].map((_, idx) => (
          <ImageSlider>
            {firstHalfUniversities.map((univ, index) => (
              <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
            ))}
          </ImageSlider>
        ))}
      </Container>
      <Container className="mt-3">
        {[...Array(3)].map((_, idx) => (
          <ImageSlider2>
            {secondHalfUniversities.map((univ, index) => (
              <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
            ))}
          </ImageSlider2>
        ))}
      </Container>
    </ShadowBgCotianer>
  );
}

export default RecruitUnivScrolling;
