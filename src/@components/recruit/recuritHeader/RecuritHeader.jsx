import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import RecruitUnivScrolling from '../recruitUnivScrolling/RecruitUnivScrolling';
import { Spinner } from 'reactstrap';
import { TextButton } from '@goorm-dev/gds-components';
import { ChevronRightIcon } from '@goorm-dev/gds-icons';

function RecuritHeader() {
  const [isRecruitmentOver, setIsRecruitmentOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isInit, setIsInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const targetDate = new Date('2024-01-13T00:00:00+09:00');

    const updateRemainingTime = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setIsRecruitmentOver(true);
      }

      setIsInit(true);
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    // 컴포넌트가 언마운트될 때 clearInterval을 통해 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  // 버튼 클릭시
  const handleButtonClick = () => {
    // 모집기간 지났을때 구글폼으로
    if (isRecruitmentOver) {
      window.open('https://forms.gle/dn3EWJtAK1VWtzTu6', '_blank');
    } else {
      // 그 외에는 모집 페이지로
      navigate('/apply');
    }
  };

  // 모집 중 컨텐츠
  const RecruitmentContent = () => (
    <>
      <S.HeaderTitleText>
        구름톤 유니브 2기 모집 중!
        <h4>
          {isInit ? (
            <>
              {timeRemaining.hours + timeRemaining.days * 24}시간 {timeRemaining.minutes}분 {timeRemaining.seconds}초
            </>
          ) : (
            <>
              <Spinner />
            </>
          )}
        </h4>
      </S.HeaderTitleText>
      <S.GoormBtn color="primary" size="xl" tag="button" onClick={handleButtonClick}>
        유니브 대표 신청
      </S.GoormBtn>
    </>
  );

  // 마감 후 콘텐츠
  const RecruitmentClosedContent = () => (
    <>
      <S.HeaderTitleText>
        <h1>대표 모집이 마감되었어요!</h1>
        <h6>아래 유니브에서 구름톤 유니브 일원인 ‘미르미’ 지원이 가능합니다.</h6>
      </S.HeaderTitleText>
      <S.GoormBtn color="primary" size="xl" tag="button" onClick={handleButtonClick}>
        3기 사전 알림 신청
      </S.GoormBtn>
    </>
  );

  return (
    <S.HeaderContainer className="container">
      <div className="col-8" style={{ border: '1px solid orange' }}>
        <div className="row">
          <S.HeaderTitleWrapper
            className="col-8 d-flex justify-content-center align-items-start flex-column"
            style={{ border: '1px solid orange' }}
          >
            <RecruitmentClosedContent />
          </S.HeaderTitleWrapper>
          <S.HEaderOpenDayWrapper
            className="clo-4 d-flex"
            style={{ border: '1px solid blue' }}
          ></S.HEaderOpenDayWrapper>
        </div>
      </div>

      <S.HeaderUnivContainer>
        <S.HeaderUnivTitleText>현재 함께하는 유니브 27개</S.HeaderUnivTitleText>
        {/* <p>추가21개 유니브 인터뷰 진행 중 ☁️</p> */}
        <S.HeaderUnivListContainer>
          <RecruitUnivScrolling />
        </S.HeaderUnivListContainer>
      </S.HeaderUnivContainer>
      <TextButton color="dark">
        유니브 전체 보기
        <ChevronRightIcon />
      </TextButton>
    </S.HeaderContainer>
  );
}

export default RecuritHeader;
