import React, { useEffect } from 'react';

import useScrollValue from '../../../../hooks/useScrollValue';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import CardListUpper from './CardListUpper';
import CardListLower from './CardListLower';

import classNames from 'classnames/bind';

import styles from './PlanDesktop.module.scss';

const cx = classNames.bind(styles);

export const getMonthText = (key) => {
  switch (key) {
    case 1:
      return '6월';
    case 2:
      return '7월';
    case 3:
      return '8월';
    case 4:
      return '8-10월';
    case 5:
      return '11월';
    case 6:
      return '12월';
    default:
      return `${key}월`;
  }
};

export default function Timeline({ month, handleMonthClick }) {
  const value = useScrollValue();

  useEffect(() => {
    if (value < 1234) {
      handleMonthClick(1);
    } else if (value > 1233 && value < 1534) {
      handleMonthClick(2);
    } else if (value > 1533 && value < 1834) {
      handleMonthClick(3);
    } else if (value > 1833 && value < 2134) {
      handleMonthClick(4);
    } else if (value > 2133 && value < 2434) {
      handleMonthClick(5);
    } else if (value > 2433 && value < 2734) {
      handleMonthClick(6);
    }
  }, [value]);

  return (
    <div className={cx('timeline', 'd-flex flex-column')}>
      <CardListUpper month={month} handleMonthClick={handleMonthClick} />
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
              onClick={() => handleMonthClick(Number(key))}
            >
              {getMonthText(Number(key))}
            </h5>
          ))}
        </div>
      </figure>
      <CardListLower month={month} handleMonthClick={handleMonthClick} />
    </div>
  );
}
