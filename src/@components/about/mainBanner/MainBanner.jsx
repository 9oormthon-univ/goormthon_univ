import React from 'react';
import MainBannerSlogan from '../../../assets/svgs/main_banner_slogan.svg';
import MainBannerImg from '../../../assets/svgs/MainBannerImg';
import MainBannerSmallImg from '../../../assets/svgs/MainBannerSmallImg';

import './MainBanner.scss';

export default function MainBanner({ scrollTrigger }) {
  return (
    <div className="main-banner d-flex flex-column justify-content-between align-items-center position-fixed w-100">
      <div className="header-text d-flex flex-column">
        <h3 className="d-none d-md-block text-center">사계절, 구름과 함께</h3>
        <h5 className="d-block d-md-none text-center">사계절, 구름과 함께</h5>
        <img className="header-text__title" src={MainBannerSlogan} />
      </div>
      <div>
        <MainBannerImg onClick={scrollTrigger} className="main-banner__img d-none d-sm-block position-absolute" />
        <MainBannerSmallImg
          onClick={scrollTrigger}
          className="main-banner__img__small d-block d-sm-none position-absolute"
        />
      </div>
    </div>
  );
}
