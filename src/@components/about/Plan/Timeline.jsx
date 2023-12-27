import React from 'react';
import Card from './Card';

import * as S from './style';

import { GroupIcon, SchoolIcon, LightningIcon, CakeIcon } from '@goorm-dev/gds-icons';
import BeotkkotSmall from '../../../assets/svgs/BeotkkotSmall';
import Lightbulb from '../../../assets/svgs/Lightbulb';

export default function Timeline() {
  const TIMELINE_DATA = [
    {
      imgSrc: GroupIcon,
      title: '9oormthon univ 2기 모집!',
      description: '벚꽃톤을 함께할 2기 운영진과 참가자를 모집하여 2024년을 힘차게 시작해요',
    },
    {
      imgSrc: SchoolIcon,
      title: 'OT & 학교별 해커톤',
      description: '학교별로 팀을 구성하여 당일 해커톤을 진행해요. 교내 미르미들과 끈끈한 네트워크를 만드세요!',
    },
    {
      imgSrc: Lightbulb,
      title: '무박 2일, 팀 빌딩',
      description: '타 학교 미르미에게 자신의 아이디어를 공유하고 함께 성장할 시너지있는 팀을 꾸려보아요.',
    },
    {
      imgSrc: BeotkkotSmall,
      title: '2024 벚꽃톤',
      description: '구름톤유니브의 하이라이트, 벚꽃톤! 모든 미르미가 밤을 새워 아이디어를 실현하는 장이에요.',
    },
    {
      imgSrc: CakeIcon,
      title: '구름톤 에프터 파티, GUAP',
      description: '해커톤의 여운을 이어갈 수 있도록 현직자와 수상자의 세미나, 그리고 마무리 회고를 진행해요.',
    },
    {
      imgSrc: LightningIcon,
      title: '연합 세미나 / 연합 해커톤',
      description:
        '2-3개 혹은 그 이상의 학교가 모여 또 한번 성장해요. 이를 위해 구름 스퀘어 장소 제공을 해드릴 예정이에요 :)',
    },
  ];

  return (
    <>
      <Card />
    </>
  );
}
