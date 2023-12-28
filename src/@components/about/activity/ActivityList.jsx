import React from 'react';

import * as S from './style';

import ActivityItem from './ActivityItem';
import { ACTIVITY_DATA } from '../../../utilities/AboutData';
export default function ActivityList() {
  return (
    <S.ActivityListWrapper>
      {ACTIVITY_DATA.map((item, idx) => (
        <ActivityItem
          key={item.title}
          idx={idx}
          imgSrc={item.imgSrc}
          title={item.title}
          title_en={item.title_en}
          description={item.description}
        />
      ))}
    </S.ActivityListWrapper>
  );
}
