import React, { useState } from 'react';
import ProjectCard from '../../@components/project/ProjectCard';
import BeotkkotProject2024Data from '../../constants/BeotkkotProject2024Data';
import DanpoongProject2023Data from '../../utilities/ProjectData';
import * as S from './style';

import { Text } from '@goorm-dev/gds-components';
import { useNavigate } from 'react-router-dom';

export default function Project() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  // Define the animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const allProjects = [...DanpoongProject2023Data, ...BeotkkotProject2024Data].sort(() => Math.random() - 0.5);

  return (
    <>
      <S.BodyTitle>프로젝트 둘러보기</S.BodyTitle>
      <S.BtnWrapper>
        <S.GoormBtn onClick={() => handleButtonClick(0)} active={activeIndex === 0}>
          전체
        </S.GoormBtn>
        <S.GoormBtn onClick={() => handleButtonClick(1)} active={activeIndex === 1}>
          1기
        </S.GoormBtn>
        <S.GoormBtn onClick={() => handleButtonClick(2)} active={activeIndex === 2}>
          2기
        </S.GoormBtn>
        <S.GoormBtn onClick={() => handleButtonClick(3)} active={activeIndex === 3}>
          3기
        </S.GoormBtn>
      </S.BtnWrapper>

      <S.ProjectBody>
        {activeIndex === 0 && (
          <>
            <S.ProjectCardGrid>
              {allProjects.map((project, index) => (
                <ProjectCard
                  index={index}
                  award={project.award}
                  title={project.title}
                  content={project.content}
                  backendLink={project.backendLink}
                  frontendLink={project.frontendLink}
                  releaseLink={project.releaseLink}
                  image={project.image}
                  pm={project.pm}
                  design={project.design}
                  frontend={project.frontend}
                  backend={project.backend}
                />
              ))}
            </S.ProjectCardGrid>
          </>
        )}
        {activeIndex === 1 && (
          <>
            {/* 1기 배너 */}
            {/* <S.ProjectBanner src={DummyBannerImg}></S.ProjectBanner> */}
            {/* 1기 프로젝트들 와다다 */}
            {/* 카드 컴포넌트 */}
            <S.ProjectCardGrid>
              {DanpoongProject2023Data.map((project, index) => (
                <ProjectCard
                  index={index}
                  award={project.award}
                  title={project.title}
                  content={project.content}
                  backendLink={project.backendLink}
                  frontendLink={project.frontendLink}
                  releaseLink={project.releaseLink}
                  image={project.image}
                  pm={project.pm}
                  design={project.design}
                  frontend={project.frontend}
                  backend={project.backend}
                />
              ))}
            </S.ProjectCardGrid>
          </>
        )}
        {activeIndex === 2 && (
          // <S.SecondTabContainer
          //   initial="hidden"
          //   animate="visible"
          //   transition={{ duration: 1 }}
          //   variants={fadeInVariants}
          // >
          //   <S.SeasonthonImg src={SeasonImg} />
          //   <h4 style={{ color: '#2B2D36', marginTop: '1.5rem' }}>
          //     구름톤 유니브와 함께하여 <br />
          //     2기 갤러리를 꾸며주세요 :)
          //   </h4>
          //   <S.GoormBtn2 onClick={() => navigate('/recruit')}>모집 페이지로 가기</S.GoormBtn2>
          // </S.SecondTabContainer>
          <S.ProjectCardGrid>
            {BeotkkotProject2024Data.map((project, index) => (
              <ProjectCard
                index={index}
                award={project.award}
                title={project.title}
                content={project.content}
                backendLink={project.backendLink}
                frontendLink={project.frontendLink}
                releaseLink={project.releaseLink}
                image={project.image}
                pm={project.pm}
                design={project.design}
                frontend={project.frontend}
                backend={project.backend}
              />
            ))}
          </S.ProjectCardGrid>
        )}
        {activeIndex === 3 && (
          <S.SecondTabContainer
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={fadeInVariants}
          >
            <S.EmptyContainer>
              <Text typography="heading3">3번째 주인공 모집 완료!</Text>
              <Text typography="body1">새롭게 완성될 멋진 프로젝트들을 기대해주세요!</Text>
            </S.EmptyContainer>
          </S.SecondTabContainer>
        )}
      </S.ProjectBody>
    </>
  );
}
