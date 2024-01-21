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
  animation: slide 23s linear infinite;

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

const ImageSlider2 = styled.div`
  display: flex;
  animation: slide2 23s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  @keyframes slide2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(50%);
    } // 목록의 절반만큼만 이동
  }
`;

function RecruitUnivScrolling() {
  const firstHalfUniversities = Universities.slice(0, Universities.length / 2);
  const secondHalfUniversities = Universities.slice(Universities.length / 2);
  const double1 = [...firstHalfUniversities];
  const double2 = [...secondHalfUniversities];
  return (
    <div className="d-flex flex-column">
      <Container>
        <ImageSlider>
          {double1.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </ImageSlider>
      </Container>

      <Container className="mt-3">
        <ImageSlider2>
          {double2.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </ImageSlider2>
      </Container>
    </div>
  );
}

export default RecruitUnivScrolling;
