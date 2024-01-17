import React from 'react';

import Timeline from './Timeline';
import styles from './PlanDesktop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 이 컴포넌트는 container-xl(1200px~) 부터를 다룬다

export default function PlanDesktop() {
  return (
    <div
      className={cx(
        'planDesktop',
        'd-none d-xl-flex flex-column position-relative w-100 align-items-center justify-content-center',
      )}
    >
      <h2 className={cx('title')}>앞으로의 계획은요,</h2>
      <Timeline />
    </div>
  );
}
