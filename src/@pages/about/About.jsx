import React from 'react';
import Activity from '../../@components/about/activity/Activity';
import Benefit from '../../@components/about/benefit/Benefit';
import FindingUniv from '../../@components/about/findingUniv/FindingUniv';
import Goal from '../../@components/about/goal/goal';
import Intro from '../../@components/about/intro/Intro';

import MainBanner from '../../@components/about/mainBanner/MainBanner';
import PlanDesktop from '../../@components/about/plan/planDesktop/PlanDesktop';
import PlanMobile from '../../@components/about/plan/planMobile/PlanMobile';
import useMoveScroll from '../../hooks/useMoveScroll.js';

import * as S from './style';

export default function About() {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <S.AboutWrapper>
      <MainBanner scrollTrigger={onMoveToElement} />
      <Intro scrollTarget={element} />
      <Goal />
      <PlanDesktop />
      <PlanMobile />
      <Benefit />
      <Activity />
      <FindingUniv />
    </S.AboutWrapper>
  );
}
