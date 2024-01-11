import React, { useEffect, useState } from 'react';

import * as S from './style';

import useScrollValue from '../../../../hooks/useScrollValue';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import CardListUpper from './CardListUpper';
import CardListLower from './CardListLower';

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
    <S.TimelineWrapper>
      <CardListUpper month={month} />
      <S.TimelineBar>
        <S.TimelineFillBar $fillRatio={TIMELINE_FILL_RATIO[month]} />
        <S.MonthTextWrapper>
          {Object.keys(TIMELINE_DATA).map((key) => (
            <S.MonthTextClickable
              key={key}
              id={key}
              className={`${Number(key) === month && 'active'} ${Number(key) < month && 'prev'}`}
              onClick={() => setMonth(Number(key))}
            >
              {getMonthText(Number(key))}
            </S.MonthTextClickable>
          ))}
        </S.MonthTextWrapper>
      </S.TimelineBar>
      <CardListLower month={month} />
    </S.TimelineWrapper>
  );
}
