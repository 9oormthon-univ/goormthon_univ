import React, { useEffect, useState } from 'react';

import * as S from './style';

import CardList from './CardList';

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
      console.log(scrollY);
      const startPoint = 2300;
      const gap = 200;

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

  const TIMELINE_FILL_RATIO_MD = {
    1: 17,
    2: 33.2,
    3: 49.4,
    4: 65.6,
    5: 81.6,
    6: 100,
  };

  const TIMELINE_FILL_RATIO_XS = {
    1: 14,
    2: 31.2,
    3: 48.4,
    4: 65.4,
    5: 82.5,
    6: 100,
  };

  const getMonthText = (key) => {
    if (key === 6) return '6-8월';
    return `${key}월`;
  };

  return (
    <S.TimelineWrapper>
      <S.TimelineBar>
        <S.TimelineFillBar $fillRatioMd={TIMELINE_FILL_RATIO_MD[month]} $fillRatioXs={TIMELINE_FILL_RATIO_XS[month]} />
        <S.MonthTextWrapper>
          {Array.from({ length: 6 }, (_, index) => index + 1).map((key) => (
            <S.MonthTextClickable
              key={key}
              id={key}
              className={`${Number(key) === month && 'active'} ${Number(key) <= month && 'prev'}`}
              onClick={() => setMonth(Number(key))}
            >
              {getMonthText(Number(key))}
            </S.MonthTextClickable>
          ))}
        </S.MonthTextWrapper>
      </S.TimelineBar>
      <CardList month={month} />
    </S.TimelineWrapper>
  );
}
