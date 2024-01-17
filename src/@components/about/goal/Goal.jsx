import React from 'react';

import GoalImgWhole from '../../../assets/svgs/goal-graphic_whole.svg';
import classNames from 'classnames/bind';

import styles from './Goal.module.scss';

const cx = classNames.bind(styles);

export default function Goal() {
  return (
    <>
      <div className={cx('cloudDown', 'w-100 position-absolute')} />
      <div className={cx('goal', 'h-100 position-relative d-flex flex-column justify-content-end align-items-center')}>
        <div className="d-flex flex-column flex-xl-row">
          <div className={cx('headerText', 'd-flex flex-column w-100')}>
            <h5 className={cx('description', 'd-none d-md-block')}>우리의 목표는 단 한 가지</h5>
            <h6 className={cx('description', 'd-block d-md-none')}>우리의 목표는 단 한 가지</h6>
            <h3 className={cx('title', 'd-none d-md-block')}>
              {`직접 구현한 서비스가 작은 물방울이 되어\n큰 구름을 이루는 기회를 제공하는 것`}
            </h3>
            <h4 className={cx('title', 'd-block d-md-none')}>
              {`직접 구현한 서비스가 작은 물방울이 되어\n큰 구름을 이루는 기회를 제공하는 것`}
            </h4>
          </div>
          <img
            src={GoalImgWhole}
            className={cx('img')}
            alt="직접 구현한 서비스가 작은 물방울이 되어
큰 구름을 이루는 기회를 제공하는 것"
          />
        </div>
      </div>
    </>
  );
}
