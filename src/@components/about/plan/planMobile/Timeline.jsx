import React, { useEffect, useState } from 'react';

import styles from './PlanMobile.module.scss';
import classNames from 'classnames/bind';

import CardList from './CardList';

const cx = classNames.bind(styles);

export default function Timeline() {
  const [month, setMonth] = useState(1);
  const [changePoint, setChangePoint] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const isMobile = window.innerWidth < 768; // 768px 미만은 container-xs
      // 모바일, 테블릿에 따른 스크롤 위치 조정
      const startPoint = isMobile ? 2300 : 1960;
      const gap = isMobile ? 200 : 100;

      setChangePoint({
        1: scrollY >= startPoint + gap * 0,
        2: scrollY >= startPoint + gap * 1,
        3: scrollY >= startPoint + gap * 2,
        4: scrollY >= startPoint + gap * 3,
        5: scrollY >= startPoint + gap * 4,
        6: scrollY >= startPoint + gap * 5,
      });
    };

    let lastTrueKey = 1;

    for (const key in changePoint) {
      if (changePoint[key] === true) {
        lastTrueKey = key;
        setMonth(lastTrueKey);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  const getMonthText = (key) => {
    if (key === 6) return '6-8월';
    return `${key}월`;
  };

  return (
    <div className={cx('timeline', 'd-flex justify-content-between')}>
      <div className={cx('timelineBar', 'position-relative')}>
        <div className={cx('timelineFillBar', `fillRatio${month}`, 'position-absolute')} />
        <div className={cx('monthText', 'w-100 h-100 d-flex flex-column align-items-center justify-content-between')}>
          {Array.from({ length: 6 }, (_, index) => index + 1).map((key) => (
            <h5
              key={key}
              id={key}
              className={cx(
                'monthTextClickable',
                'd-flex justify-content-center align-items-center',
                `${Number(key) === month && 'active'}`,
                `${Number(key) <= month && 'prev'}`,
              )}
              onClick={() => setMonth(Number(key))}
            >
              {getMonthText(Number(key))}
            </h5>
          ))}
        </div>
      </div>
      <CardList month={month} />
    </div>
  );
}
