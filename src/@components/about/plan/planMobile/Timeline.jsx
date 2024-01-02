import React, { useEffect, useState } from 'react';
import Card from './Card';

import * as S from './style';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';
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

      const startPoint = 2000;
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

  const TIMELINE_FILL_RATIO = {
    1: 0,
    2: 22,
    3: 40,
    4: 59,
    5: 77,
    6: 100,
  };

  const MONTH_TEXT_Y_OFFSET = {
    1: 0,
    2: 10.25,
    3: 21.81,
    4: 33.37,
    5: 45.12,
    6: 56.87,
  };

  const getMonthText = (key) => {
    if (key === 6) return '6-8월';
    return `${key}월`;
  };

  return (
    <S.TimelineWrapper>
      <S.TimelineBar>
        <S.TimelineFillBar $fillRatio={TIMELINE_FILL_RATIO[month]} />
        <S.MonthTextWrapper>
          {Array.from({ length: 6 }, (_, index) => index + 1).map((key) => (
            <S.MonthTextClickable
              key={key}
              id={key}
              className={`${key == month && 'active'} ${Number(key) < month && 'prev'}`}
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
