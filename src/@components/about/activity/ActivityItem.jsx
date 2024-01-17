import React from 'react';

import classNames from 'classnames/bind';
import styles from './Activity.module.scss';

const cx = classNames.bind(styles);

export default function ActivityItem({ idx, imgSrc, title, title_en, description }) {
  return (
    <div
      className={cx('activityItem', `${idx == 2 && 'hackathonItem'}`, 'd-flex flex-column flex-column-reverse h-100')}
    >
      <article className={cx('contentBox', 'd-flex flex-column')}>
        <div className={cx('contentTitle', 'd-flex align-items-end')}>
          <h3>{title}</h3>
          <h6 className={cx('titleTextEn')}>{title_en}</h6>
        </div>
        <p className={cx('descriptionText', 'd-block d-xl-none')}>{description}</p>
        <p className={cx('descriptionText', 'paragraph-lg d-none d-xl-block')}>{description}</p>
      </article>
      <img className={cx('contentImg')} src={imgSrc} />
    </div>
  );
}
