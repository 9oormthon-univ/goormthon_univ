import React from 'react';
import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import * as S from './style';
import Card from './Card';

export default function CardListLower({ month }) {
  return (
    <S.CardListLowerWrapper>
      {Object.keys(TIMELINE_DATA)
        .filter((item) => !(item % 2))
        .map((key, idx) => {
          const item = TIMELINE_DATA[key];
          return (
            <Card
              key={key}
              idx={key}
              month={month}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </S.CardListLowerWrapper>
  );
}
