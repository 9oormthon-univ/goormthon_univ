import React from 'react';
import BenefitList from './BenefitList';

import classNames from 'classnames/bind';
import styles from './BenefitMobile.module.scss';

const cx = classNames.bind(styles);

export default function BenefitMobile() {
  return (
    <div
      className={cx(
        'benefitMobile',
        'd-flex d-md-none position-relative flex-column justify-content-center align-items-center',
      )}
    >
      <h3 className={cx('headerTitle')}>구름톤 유니브에서 마음껏 누려요!</h3>
      <BenefitList />
    </div>
  );
}
