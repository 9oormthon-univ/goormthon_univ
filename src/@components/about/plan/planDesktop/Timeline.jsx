import React, { useEffect, useState } from 'react';

import useScrollValue from '../../../../hooks/useScrollValue';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import CardListUpper from './CardListUpper';
import CardListLower from './CardListLower';

import classNames from 'classnames/bind';

import styles from './PlanDesktop.module.scss';

const cx = classNames.bind(styles);

export default function Timeline() {
  const [month, setMonth] = useState(1);

  const value = useScrollValue();

  useEffect(() => {
    if (value < 1234) {
      setMonth(1);
    } else if (value > 1233 && value < 1534) {
      setMonth(2);
    } else if (value > 1533 && value < 1834) {
      setMonth(3);
    } else if (value > 1833 && value < 2134) {
      setMonth(4);
    } else if (value > 2133 && value < 2434) {
      setMonth(5);
    } else if (value > 2433 && value < 2734) {
      setMonth(6);
    }
  }, [value]);

  const TIMELINE_FILL_RATIO = {
    1: 9.5,
    2: 27.2,
    3: 44.9,
    4: 62.7,
    5: 80.5,
    6: 100,
  };

  const getMonthText = (key) => {
    if (key === 6) return '6-8월';
    return `${key}월`;
  };

  return (
    <div className={cx('timeline', 'd-flex flex-column')}>
      <CardListUpper month={month} />
      <figure className={cx('timelineBar', 'position-relative')}>
        <div className={cx(`fillBar${month}`, 'position-absolute')} />
        <div className={cx('monthText', 'd-flex align-items-center justify-content-between')}>
          {Object.keys(TIMELINE_DATA).map((key) => (
            <h5
              key={key}
              id={key}
              className={cx(
                `monthTextClickable`,
                `${Number(key) === month && 'active'}`,
                `${Number(key) < month && 'prev'}`,
              )}
              onClick={() => setMonth(Number(key))}
            >
              {getMonthText(Number(key))}
            </h5>
          ))}
        </div>
      </figure>
      <CardListLower month={month} />
    </div>
  );
}
