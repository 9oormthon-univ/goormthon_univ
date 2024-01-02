import React from 'react';
import * as S from './style';
import { TIMELINE_DATA } from '../../../../utilities/AboutData';
import Card from './Card';

export default function CardList() {
  return (
    <S.CardListWrapper>
      {Object.keys(TIMELINE_DATA).map((key) => {
        const item = TIMELINE_DATA[key];
        return <Card key={key} Icon={item.Icon} title={item.title} description={item.description} />;
      })}
    </S.CardListWrapper>
  );
}
