import React from 'react';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import Card from './Card';

import styles from './PlanMobile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CardList({ month }) {
  return (
    <div className={cx('cardList', 'w-100')}>
      {Object.keys(TIMELINE_DATA).map((key, idx) => {
        const item = TIMELINE_DATA[key];
        return (
          <Card key={key} idx={idx} month={month} Icon={item.Icon} title={item.title} description={item.description} />
        );
      })}
    </div>
  );
}
