import React from 'react';
import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import * as S from './style';
import Card from './Card';

export default function CardListUpper({ month }) {
  console.log(Object.keys(TIMELINE_DATA));
  return (
    <S.CardList>
      {Object.keys(TIMELINE_DATA)
        .filter((item) => item % 2)
        .map((key, idx) => {
          const item = TIMELINE_DATA[key];
          return (
            <Card
              key={key}
              idx={idx}
              month={month}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </S.CardList>
  );
}
