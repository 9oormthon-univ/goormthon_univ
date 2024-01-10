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

function RecruitUnivScrolling() {
  const doubledUniversities = [...Universities, ...Universities, ...Universities];
  return (
    <>
      <Container>
        <ImageSlider>
          {doubledUniversities.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </ImageSlider>
      </Container>
    </>
  );
}

export default RecruitUnivScrolling;
