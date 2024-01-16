import React from 'react';

import HorizontalScroll from './HorizontalScroll';
import classNames from 'classnames/bind';
import styles from './BenefitDesktop.module.scss';

const cx = classNames.bind(styles);

export default function BenefitDesktop() {
  return (
    <div
      className={cx(
        'benefitDesktop',
        'd-none d-md-flex position-relative flex-column justify-content-center align-items-center',
      )}
    >
      <h2 className={cx('headerTitle', 'd-none d-xl-block position-absolute')}>구름톤 유니브에서 마음껏 누려요!</h2>
      <h3 className={cx('headerTitleSmall', 'd-block d-xl-none position-absolute')}>
        구름톤 유니브에서 마음껏 누려요!
      </h3>
      <HorizontalScroll />
    </div>
  );
}
