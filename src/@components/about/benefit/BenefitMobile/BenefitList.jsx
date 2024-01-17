import React from 'react';

import BenefitItem from './BenefitItem';
import { BENEFIT_ITEM_DATA } from '../../../../utilities/AboutData';

import classNames from 'classnames/bind';
import styles from './BenefitMobile.module.scss';

const cx = classNames.bind(styles);

export default function BenefitList() {
  return (
    <div className={cx('benefitList', 'd-flex flex-column align-items-center justify-content-center')}>
      {BENEFIT_ITEM_DATA.map((item) => (
        <BenefitItem
          key={item.title}
          imgSrc={item.imgSrc}
          iconSrc={item.iconSrc}
          bgColor={item.bgColor}
          title={item.title}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
}
