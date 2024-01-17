import React from 'react';

import styles from './PlanMobile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Card({ Icon, title, description, month, idx }) {
  return (
    <div className="d-flex flex-column">
      <div
        className={cx(
          'cardContent',
          'd-flex flex-column justify-content-center',
          `${Number(month) === idx + 1 && 'selected'}`,
        )}
      >
        <div className={cx('icon')}>
          <Icon />
        </div>
        <h5 className={cx('cardTitle')}>{title}</h5>
        <p className={cx('cardDescription', 'subtitle-1')}>{description}</p>
      </div>
    </div>
  );
}
