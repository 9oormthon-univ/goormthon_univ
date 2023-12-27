import React, { useEffect, useState } from 'react';
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
  const [daysRemaining, setDaysRemaining] = useState(0);

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

  return (
    <S.HeaderContainer>
      <S.HeaderTitleWrapper>
        <S.HeaderTitleText>
          구름톤 유니브 2기 모집 중!
          <h4>D-{daysRemaining}</h4>
        </S.HeaderTitleText>

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
