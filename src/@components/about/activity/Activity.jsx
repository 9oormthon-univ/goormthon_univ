import React from 'react';
import ActivityList from './ActivityList';

import classNames from 'classnames/bind';
import styles from './Activity.module.scss';

const cx = classNames.bind(styles);

export default function Activity() {
  return (
    <div
      className={cx(
        'activity',
        'w-100 h-100 position-relative d-flex flex-column justify-content-center align-items-center',
      )}
    >
      <h2 className={cx('titleText', 'd-none d-xl-block w-100')}>구름톤 유니브의 일원이 된다면,</h2>
      <h3 className={cx('titleTextSmall', 'd-block d-xl-none w-100')}>구름톤 유니브의 일원이 된다면,</h3>
      <ActivityList />
    </div>
  );
}
