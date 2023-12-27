import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import UniversityItem from '../UniversityItem/UniversityItem';
import Universities from '../../../utilities/UnivData';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './style.css';

function RecuritHeader() {
  return (
    <S.HeaderContainer>
      <S.HeaderTitleWrapper>
        <S.HeaderTitleText>구름톤 유니브 2기 모집 중!</S.HeaderTitleText>
        <S.GoormBtn>학교 대표 신청</S.GoormBtn>
      </S.HeaderTitleWrapper>
      <S.HeaderUnivContainer>
        <S.HeaderUnivTitleText>현재 함께하는 유니브 10개</S.HeaderUnivTitleText>
        <S.HeaderUnivListContainer>
          <Swiper
            spaceBetween={0}
            autoplay={{ delay: 3000 }} // 3초(3000 밀리초)마다 자동으로 넘어감
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              //크기별로 다르게 주기
              1378: {
                slidesPerView: 10,
                slidesPerGroup: 10,
              },
              998: {
                slidesPerView: 10,
                slidesPerGroup: 10,
              },
              625: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              0: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {Universities.map((univ, index) => (
              <SwiperSlide key={index}>
                <UniversityItem image={univ.image} name={univ.name} link={univ.link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.HeaderUnivListContainer>
      </S.HeaderUnivContainer>
    </S.HeaderContainer>
  );
}

export default RecuritHeader;
