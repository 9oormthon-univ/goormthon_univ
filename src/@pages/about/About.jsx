import React from 'react';
import Activity from '../../@components/about/activity/Activity';
import BenefitDesktop from '../../@components/about/benefit/BenefitDesktop/BenefitDesktop';
import BenefitMobile from '../../@components/about/benefit/BenefitMobile/BenefitMobile';
import FindingUniv from '../../@components/about/findingUniv/FindingUniv';
import Goal from '../../@components/about/goal/Goal';
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
      <BenefitDesktop />
      <BenefitMobile />
      <Activity />
      <FindingUniv />
    </S.AboutWrapper>
  );
}
