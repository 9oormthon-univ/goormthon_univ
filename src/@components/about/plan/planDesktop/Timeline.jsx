import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';

import * as S from './style';

import useScrollValue from '../../../../hooks/useScrollValue';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';

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
    1: 10,
    2: 25,
    3: 42,
    4: 59,
    5: 75,
    6: 92,
  };

  const getMonthText = (key) => {
    if (key === 6) return '6-8월';
    return `${key}월`;
  };

  return (
    <>
      <Card data={TIMELINE_DATA[month]} $month={month} />
      <S.TimelineBar>
        <S.TimelineFillBar $fillRatio={TIMELINE_FILL_RATIO[month]} />
        <S.MonthTextWrapper>
          {Object.keys(TIMELINE_DATA).map((key) => (
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
    </>
  );
}
