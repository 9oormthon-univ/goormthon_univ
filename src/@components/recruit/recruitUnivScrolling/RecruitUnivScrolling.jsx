import React, { useState } from 'react';
import Universities from '../../../utilities/UnivData';
import UniversityItem from '../UniversityItem/UniversityItem';
import styled, { keyframes } from 'styled-components';
import { SearchInput } from '@goorm-dev/gds-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  animation: slide 60s linear infinite;
  overflow-x: hidden;

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
  animation: slide2 60s linear infinite;
  overflow-x: hidden;
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

const SearchInputCustom = styled(SearchInput)`
  margin-bottom: 6rem;
  width: 25rem;
  height: 3.5rem;
`;

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  animation: ${(props) => (props.isHidden ? fadeOut : fadeIn)} 0.5s ease-in-out;
  &:hover {
    animation-play-state: paused;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShadowBgCotianer = styled.div`
  filter: drop-shadow(var(--gray-200) 0px 8px 40px);
`;

function RecruitUnivScrolling() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredUniversities = Universities.filter((univ) =>
    univ.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const firstHalfUniversities = filteredUniversities.slice(0, filteredUniversities.length / 2);
  const secondHalfUniversities = filteredUniversities.slice(filteredUniversities.length / 2);

  return (
    <ShadowBgCotianer className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <SearchInputCustom
          value={searchQuery}
          placeholder="나의 유니브 찾기"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery ? (
        <SearchContainer isHidden={searchQuery !== ''}>
          {filteredUniversities.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </SearchContainer>
      ) : (
        <>
          <Container isHidden={searchQuery !== ''}>
            {[...Array(1)].map((_, idx) => (
              <ImageSlider key={idx}>
                {firstHalfUniversities.map((univ, index) => (
                  <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
                ))}
              </ImageSlider>
            ))}
          </Container>
          <Container isHidden={searchQuery !== ''} className="mt-3">
            {[...Array(1)].map((_, idx) => (
              <ImageSlider2 key={idx}>
                {secondHalfUniversities.map((univ, index) => (
                  <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
                ))}
              </ImageSlider2>
            ))}
          </Container>
        </>
      )}
    </ShadowBgCotianer>
  );
}

export default RecruitUnivScrolling;
