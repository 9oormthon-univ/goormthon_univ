import React from 'react';

import * as S from './style';

import ActivityItem from './ActivityItem';
import { ACTIVITY_DATA } from '../../../utilities/AboutData';
export default function ActivityList() {
  return (
    <S.ActivityListWrapper>
      {ACTIVITY_DATA.map((item, idx) => {
        // Add a custom class or style if it's the third item (idx === 2)
        let customStyle = {};
        if (idx === 2) {
          customStyle = { gridColumn: '1 / -1', width: '100%' };
        }

        return (
          <S.ActivityItemWrapper key={item.title} style={customStyle}>
            <ActivityItem
              key={item.title}
              idx={idx}
              imgSrc={item.imgSrc}
              title={item.title}
              title_en={item.title_en}
              description={item.description}
            />
          </S.ActivityItemWrapper>
        );
      })}
    </S.ActivityListWrapper>
  );
}
