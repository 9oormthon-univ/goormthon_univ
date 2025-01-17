import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import RecruitModal from '../recruitModal/RecruitModal';
import RecruitUnivScrolling from '../recruitUnivScrolling/RecruitUnivScrolling';
import * as S from './style';

function RecuritHeader() {
  const [isRecruitmentOver, setIsRecruitmentOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isInit, setIsInit] = useState(false);
  const navigate = useNavigate();

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 모달 오픈
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

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
      window.open('https://forms.gle/rDKEvu58VSZqScCn9', '_blank');
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
        <h1>3기 모집 완료!</h1>
        <h6>4기 모집은 2025년 1월 예정입니다!</h6>
      </S.HeaderTitleText>
      <S.GoormBtn color="primary" size="xl" tag="button" onClick={handleButtonClick}>
        4기 사전 신청 알림받기
      </S.GoormBtn>
    </>
  );

  return (
    <S.HeaderContainer className="container">
      <S.HeaderTitleWrapper className="d-flex justify-content-center align-items-center flex-column">
        <RecruitmentClosedContent />
      </S.HeaderTitleWrapper>
      {/* <S.HEaderOpenDayWrapper className="clo-4 d-flex">
        <S.DatesmallText>미르미 신청 OPEN</S.DatesmallText>
        <S.DateBigText>1/22</S.DateBigText>
      </S.HEaderOpenDayWrapper> */}
      <S.HeaderUnivContainer>
        <S.HeaderUnivTitleText>3기와 함께하는 48개의 유니브</S.HeaderUnivTitleText>
        <S.HeaderUnivListContainer>
          <RecruitUnivScrolling searchable={true} />
        </S.HeaderUnivListContainer>
      </S.HeaderUnivContainer>
      {/* <TextButton color="dark" ref={cardRef} onClick={() => setModalOpen(true)}>
        유니브 전체 보기
        <ChevronRightIcon />
      </TextButton> */}
      {isModalOpen && <RecruitModal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
    </S.HeaderContainer>
  );
}

export default RecuritHeader;
