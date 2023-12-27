import { GoormNavbar } from '@goorm-dev/gds-components';
import React from 'react';
import * as S from './style';

import { HScrollTable } from '@goorm-dev/gds-tables';
import MainBanner from '../../@components/about/MainBanner/MainBanner';
import SlidingText from '../../@components/about/SlidingText/SlidingText';

export default function About() {
  return (
    <>
      <MainBanner />
      <SlidingText />
    </>
  );
}
