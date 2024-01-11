import React from 'react';
import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import * as S from './style';
import Card from './Card';

export default function CardListUpper({ month }) {
  return (
    <S.CardListUpperWrapper>
      {Object.keys(TIMELINE_DATA)
        .filter((item) => item <= 3)
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
    </S.CardListUpperWrapper>
  );
}
