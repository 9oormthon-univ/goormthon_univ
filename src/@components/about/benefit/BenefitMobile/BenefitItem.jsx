import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BenefitMobile.module.scss';

const cx = classNames.bind(styles);

export default function BenefitItem({ imgSrc, iconSrc, bgColor, title, description, url }) {
  return (
    <div className="d-flex flex-column w-100">
      <Link to={url} target="\_blank">
        <div
          className={cx('benefitImgContainer', 'w-100 d-flex justify-content-center align-items-center', `${bgColor}`)}
        >
          <img className={cx('benefitImg')} src={imgSrc} />
        </div>
        <div className={cx('benefitContents', 'w-100 d-flex justify-content-between align-items-end')}>
          <div className={cx('benefitText', 'd-flex flex-column w-100')}>
            <h3 className={cx('benefitTitle', 'w-100')}>{title}</h3>
            <p className={cx('benefitDescription', 'w-100 paragraph-lg')}>{description}</p>
          </div>
          <img className={cx('icon')} src={iconSrc} />
        </div>
      </Link>
    </div>
  );
}
