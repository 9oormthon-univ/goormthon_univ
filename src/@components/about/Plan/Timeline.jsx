import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';

import * as S from './style';

import { GroupIcon, SchoolIcon, LightningIcon, CakeIcon } from '@goorm-dev/gds-icons';
import BeotkkotSmall from '../../../assets/svgs/BeotkkotSmall';
import Lightbulb from '../../../assets/svgs/Lightbulb';

import useScrollValue from '../../../hooks/useScrollValue';

export default function Timeline() {
  const [month, setMonth] = useState(1);
  const [monthTextXOffset, setMonthTextXOffset] = useState(0);
  const [monthTextYOffset, setMonthTextYOffset] = useState(0);

  const TIMELINE_DATA = {
    1: {
      xOffset: '2rem',
      Icon: GroupIcon,
      title: '9oormthon univ 2기 모집!',
      description: '벚꽃톤을 함께할 2기 운영진과 참가자를 모집하여\n2024년을 힘차게 시작해요',
    },
    2: {
      Icon: SchoolIcon,
      title: 'OT & 학교별 해커톤',
      description: '학교별로 팀을 구성하여 당일 해커톤을 진행해요. 교내 미르미들과 끈끈한 네트워크를 만드세요!',
    },
    3: {
      Icon: Lightbulb,
      title: '무박 2일, 팀 빌딩',
      description: '타 학교 미르미에게 자신의 아이디어를 공유하고 함께 성장할 시너지있는 팀을 꾸려보아요.',
    },
    4: {
      Icon: BeotkkotSmall,
      title: '2024 벚꽃톤',
      description: '구름톤유니브의 하이라이트, 벚꽃톤! 모든 미르미가 밤을 새워 아이디어를 실현하는 장이에요.',
    },
    5: {
      Icon: CakeIcon,
      title: '구름톤 에프터 파티, GUAP',
      description: '해커톤의 여운을 이어갈 수 있도록 현직자와 수상자의 세미나, 그리고 마무리 회고를 진행해요.',
    },
    6: {
      Icon: LightningIcon,
      title: '연합 세미나 / 연합 해커톤',
      description:
        '2-3개 혹은 그 이상의 학교가 모여 또 한번 성장해요. 이를 위해 구름 스퀘어 장소 제공을 해드릴 예정이에요 :)',
    },
  };

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

  const getMonthTextOffset = (key) => {
    const target = monthRefs.current[key].element;
    const clientRect = target.getBoundingClientRect();
    const relativeLeft = clientRect.left - (key === 1 ? 0 : key === 6 ? 266 : 137);
    const relativeTop = clientRect.top + window.pageYOffset - 240;
    return { relativeLeft, relativeTop };
  };

  useEffect(() => {
    setMonthTextXOffset(getMonthTextOffset(month).relativeLeft);
    setMonthTextYOffset(getMonthTextOffset(month).relativeTop);
  }, [month]);

  window.addEventListener('resize', () => {
    setMonthTextXOffset(getMonthTextOffset(month).relativeLeft);
    setMonthTextYOffset(getMonthTextOffset(month).relativeTop);
  });

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

  return (
    <>
      <Card data={TIMELINE_DATA[month]} $xOffset={monthTextXOffset} $yOffset={monthTextYOffset} $month={month} />
      <S.TimelineBar>
        <S.TimelineFillBar $fillRatio={TIMELINE_FILL_RATIO[month]} />
        <S.MonthTextWrapper>
          {Object.keys(TIMELINE_DATA).map((key) => (
            <S.MonthTextClickable
              key={key}
              ref={(el) => (monthRefs.current[key] = { element: el })}
              id={key}
              className={`${key == month && 'active'} ${Number(key) < month && 'prev'}`}
              onClick={() => setMonth(key)}
            >
              {key}월
            </S.MonthTextClickable>
          ))}
        </S.MonthTextWrapper>
      </S.TimelineBar>
    </>
  );
}
