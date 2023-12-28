import React, { useState } from 'react';
import { Button, ButtonGroup } from '@goorm-dev/gds-components';
import * as S from './style';
import DummyBannerImg from '../../assets/images/dummyBanner.png';
import ProjectCard from '../../@components/project/ProjectCard';
import DanpoongProject2023Data from '../../utilities/ProjectData';
export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <S.BodyTitle>프로젝트 둘러보기</S.BodyTitle>
      <S.BtnWrapper>
        <S.GoormBtn onClick={() => handleButtonClick(0)} active={activeIndex === 0}>
          1기
        </S.GoormBtn>
        <S.GoormBtn onClick={() => handleButtonClick(1)} active={activeIndex === 1}>
          2기
        </S.GoormBtn>
        {/* <S.GoormBtn onClick={() => handleButtonClick(2)} active={activeIndex === 2}>
          3기
        </S.GoormBtn> */}
      </S.BtnWrapper>

      <S.ProjectBody>
        {activeIndex === 0 && (
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
                  link={project.link}
                  image={project.image}
                />
              ))}
            </S.ProjectCardGrid>
          </>
        )}
        {activeIndex === 1 && (
          <h4 style={{ color: '#2B2D36', marginTop: '5rem' }}>
            구름톤 유니브와 함께하여 <br />
            2기 갤러리를 꾸며주세요 :)
          </h4>
        )}
      </S.ProjectBody>
    </>
  );
}
