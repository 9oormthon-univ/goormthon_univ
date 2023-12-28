import React from 'react';

import * as S from './style';

import Img1 from '../../../assets/images/about/activity1.png';
import Img2 from '../../../assets/images/about/activity2.png';
import Img3 from '../../../assets/images/about/activity3.png';
import Img4 from '../../../assets/images/about/activity4.png';

export default function ActivityList() {
  const ACTIVITY_DATA = [
    {
      imgSrc: Img1,
      title: '스터디',
      title_en: 'STUDY',
      description:
        '구름톤 유니브에 소속될시 IDE, EDU, 인프런 쿠폰이 제공됩니다. 해당 쿠폰을 사용하며, 교내 혹은 교외학생들과 스터디를 진행하실 수 있습니다.',
    },
    {
      imgSrc: Img2,
      title: '세미 해커톤',
      title_en: 'SEMI HACKATHON',
      description:
        '벚꽃톤/단풍톤 진행 이전, 세미 해커톤이 개최됩니다! 교내에서 팀을 구성하여 참여 가능하며, 이 행사를 통해 교내 구성원이 더 단단해지고 해커톤을 맛보는 경험을 해보세요!',
    },
    {
      imgSrc: Img3,
      title: '팀 빌딩',
      title_en: 'TEAM BUILDING',
      description:
        '기획(1), 디자인(1), 프론트(2), 백엔드(2)가 모여 하나의 팀을 이루는 팀빌딩 행사입니다. 대면 팀빌딩 행사로 아이디어 등록자는 아이디어 발표를, 아이디어 미등록자는 본인PR을 하여 팀빌딩을 진행합니다.',
    },
    {
      imgSrc: Img4,
      title: '해커톤',
      title_en: 'HACKATHON',
      description:
        '팀빌딩 후 해커톤 기간까지 기획을 합니다. 개발은 단 3일간 이뤄집니다. 3월에는 벚꽃톤, 10월에는 단풍톤이 진행됩니다.(온보딩 시작 기준)',
    },
  ];

  return (
    <S.ActivityWrapper>
      <S.HeaderTitleText>이런 활동들을 해요!</S.HeaderTitleText>
    </S.ActivityWrapper>
  );
}
