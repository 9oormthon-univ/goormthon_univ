import React from 'react';

import classNames from 'classnames/bind';

import styles from './PlanDesktop.module.scss';

const cx = classNames.bind(styles);

export default function Card({ Icon, title, description, month, idx }) {
  return (
    <div className={cx('card', 'd-flex flex-column w-100')}>
      <div className={cx('cardContent', `${month === Number(idx) && 'selected'}`)}>
        <div className={cx('icon')}>
          <Icon />
        </div>
        <h4 className={cx('cardTitle')}>{title}</h4>
        <p className={cx('cardDescription', 'subtitle-1')}>{description}</p>
      </div>
    </div>
  );
}
