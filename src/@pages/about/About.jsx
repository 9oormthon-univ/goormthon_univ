import React from 'react';
import Benefit from '../../@components/about/benefit/Benefit';
import Goal from '../../@components/about/goal/goal';
import Intro from '../../@components/about/intro/Intro';

import MainBanner from '../../@components/about/mainBanner/MainBanner';
import Plan from '../../@components/about/plan/Plan';
import useMoveScroll from '../../hooks/useMoveScroll.js';

import * as S from './style';

export default function About() {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <S.AboutWrapper>
      <MainBanner scrollTrigger={onMoveToElement} />
      <Intro scrollTarget={element} />
      <Goal />
      <Plan />
      <Benefit />
    </S.AboutWrapper>
  );
}
