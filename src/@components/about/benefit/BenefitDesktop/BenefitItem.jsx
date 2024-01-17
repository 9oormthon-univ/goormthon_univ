import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BenefitDesktop.module.scss';

const cx = classNames.bind(styles);

export default function BenefitItem({ imgSrc, iconSrc, bgColor, title, description, url }) {
  return (
    <Link className={cx('benefitLink')} to={url} target="\_blank">
      <div className="d-flex flex-column">
        <div className={cx('benefitImgContainer', 'd-flex justify-content-center align-items-center', `${bgColor}`)}>
          <img className={cx('benefitImg')} src={imgSrc} alt={title} />
        </div>
        <div className={cx('benefitContents', 'd-flex justify-content-between align-items-end')}>
          <div className={cx('benefitText', 'd-flex flex-column')}>
            <h3 className={cx('benefitTitle', 'w-100')}>{title}</h3>
            <p className={cx('benefitDescription', 'paragraph-lg w-100')}>{description}</p>
          </div>
          <img className={cx('icon')} src={iconSrc} alt={title} />
        </div>
      </div>
    </Link>
  );
}
