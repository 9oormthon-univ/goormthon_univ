import { SearchInput } from '@goorm-dev/gds-components';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Universities from '../../../utilities/UnivData';
import UniversityItem from '../UniversityItem/UniversityItem';

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
`;

const ImageSlider = styled.div`
  display: flex;
  animation: ${slideLeft} 50s linear infinite;
  overflow: hidden;

  &:hover {
    animation-play-state: paused;
  }
  margin-bottom: 1rem;
`;

const ImageSlider2 = styled.div`
  display: flex;
  animation: ${slideRight} 50s linear infinite;
  overflow: hidden;

  &:hover {
    animation-play-state: paused;
  }
`;

const SearchInputCustom = styled(SearchInput)`
  margin-bottom: 6rem;
  padding: 0.5rem 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShadowBgContainer = styled.div`
  filter: drop-shadow(var(--gray-200) 0px 8px 40px);
`;

function RecruitUnivScrolling({ searchable }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredUniversities = Universities.filter((univ) =>
    univ.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // 슬라이더 아이템 복제
  const firstHalfUniversities = filteredUniversities.slice(0, Math.ceil(filteredUniversities.length / 2));
  const secondHalfUniversities = filteredUniversities.slice(Math.ceil(filteredUniversities.length / 2));
  const duplicatedFirstHalf = [...firstHalfUniversities, ...firstHalfUniversities, ...firstHalfUniversities];
  const duplicatedSecondHalf = [...secondHalfUniversities, ...secondHalfUniversities, ...secondHalfUniversities];

  return (
    <ShadowBgContainer className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center">
      </div>
      {searchQuery ? (
        <SearchContainer>
          {filteredUniversities.map((univ, index) => (
            <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
          ))}
        </SearchContainer>
      ) : (
        <Container>
          <ImageSlider>
            {duplicatedFirstHalf.map((univ, index) => (
              <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
            ))}
          </ImageSlider>
          <ImageSlider2>
            {duplicatedSecondHalf.map((univ, index) => (
              <UniversityItem key={index} image={univ.image} name={univ.name} link={univ.link} />
            ))}
          </ImageSlider2>
        </Container>
      )}
    </ShadowBgContainer>
  );
}

export default RecruitUnivScrolling;
