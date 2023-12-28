import React from 'react';
import Intro from '../../@components/about/Intro/Intro';

import MainBanner from '../../@components/about/MainBanner/MainBanner';
import Plan from '../../@components/about/Plan/Plan';
import useMoveScroll from '../../hooks/useMoveScroll.js';

import * as S from './style';

export default function About() {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <S.AboutWrapper>
      <MainBanner scrollTrigger={onMoveToElement} />
      <Intro scrollTarget={element} />
      <Plan />
    </S.AboutWrapper>
  );
}
