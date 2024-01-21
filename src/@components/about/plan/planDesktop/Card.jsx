import React from 'react';

import classNames from 'classnames/bind';

import styles from './PlanDesktop.module.scss';

const cx = classNames.bind(styles);

export default function Card({ Icon, title, description, month, idx, handleMonthClick }) {
  return (
    <div className={cx('card', 'd-flex flex-column w-100')} onClick={() => handleMonthClick(Number(idx))}>
      <div
        className={cx(
          'cardContent',
          'd-flex flex-column justify-content-center',
          `${month === Number(idx) && 'selected'}`,
        )}
      >
        <div className={cx('icon')}>
          <Icon />
        </div>
        <h4 className={cx('cardTitle')}>{title}</h4>
        <p className={cx('cardDescription', 'subtitle-1')}>{description}</p>
      </div>
    </div>
  );
}
