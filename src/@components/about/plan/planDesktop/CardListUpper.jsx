import React from 'react';
import { TIMELINE_DATA } from '../../../../utilities/AboutData';

import Card from './Card';

import styles from './PlanDesktop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CardListUpper({ month }) {
  return (
    <div className={cx('cardListUpper', 'd-flex')}>
      {Object.keys(TIMELINE_DATA)
        .filter((item) => item <= 3)
        .map((key, idx) => {
          const item = TIMELINE_DATA[key];
          return (
            <Card
              key={key}
              idx={key}
              month={month}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </div>
  );
}
