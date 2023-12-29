import React from 'react';

import BenefitItem from './BenefitItem';

import * as S from './style';

import { BENEFIT_ITEM_DATA } from '../../../utilities/AboutData';

export default function BenefitList({ x }) {
  return (
    <S.BenefitListWrapper style={x}>
      {BENEFIT_ITEM_DATA.map((item) => (
        <BenefitItem
          imgSrc={item.imgSrc}
          iconSrc={item.iconSrc}
          bgColor={item.bgColor}
          title={item.title}
          description={item.description}
          url={item.url}
        />
      ))}
    </S.BenefitListWrapper>
  );
}
