import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';

import * as S from './style';

import useScrollValue from '../../../../hooks/useScrollValue';

import { TIMELINE_DATA } from '../../../../utilities/AboutData';

export default function Timeline() {
  const [month, setMonth] = useState(1);
  const [monthTextYOffset, setMonthTextYOffset] = useState(0);

  const monthRefs = useRef({
    1: {
      element: undefined,
    },
    2: {
      element: undefined,
    },
    3: {
      element: undefined,
    },
    4: {
      element: undefined,
    },
    5: {
      element: undefined,
    },
    6: {
      element: undefined,
    },
  });

  const getMonthTextYOffset = (key) => {
    let relativeTop = -400;
    const target = monthRefs.current[key].element;

    if (target) {
      const clientRect = target.getBoundingClientRect();
      console.log(clientRect);
      relativeTop = clientRect.top;
      // relativeTop = clientRect.top - (key === 1 ? 0 : key === 6 ? 266 : 137);
    }

    return relativeTop;
  };

  useEffect(() => {
    setMonthTextYOffset(getMonthTextYOffset(month));
    window.addEventListener('resize', () => {
      setMonthTextYOffset(getMonthTextYOffset(month));
    });
  }, [month]);

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

  return (
    <S.TimelineWrapper>
      <Card data={TIMELINE_DATA[month]} $yOffset={MONTH_TEXT_Y_OFFSET[month]} $month={month} />

      <S.TimelineBar>
        <S.TimelineFillBar $fillRatio={TIMELINE_FILL_RATIO[month]} />
        <S.MonthTextWrapper>
          {Object.keys(TIMELINE_DATA).map((key) => (
            <S.MonthTextClickable
              key={key}
              ref={(el) => (monthRefs.current[key] = { element: el })}
              id={key}
              className={`${key == month && 'active'} ${Number(key) < month && 'prev'}`}
              onClick={() => setMonth(Number(key))}
            >
              {key == 6 ? '6-8' : key}월
            </S.MonthTextClickable>
          ))}
        </S.MonthTextWrapper>
      </S.TimelineBar>
    </S.TimelineWrapper>
  );
}
