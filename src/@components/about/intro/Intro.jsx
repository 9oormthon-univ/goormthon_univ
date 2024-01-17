import React from 'react';

import classNames from 'classnames/bind';
import styles from './Intro.module.scss';

import BeotkkotImg from '../../../assets/images/about/img-beotkkot-default.png';
import GoormImg from '../../../assets/images/about/img-goorm-default.png';
import DanpoongImg from '../../../assets/images/about/img-danpoong-default.png';

import BeotkkotHoverImg from '../../../assets/images/about/img-beotkkot-hover.png';
import GoormHoverImg from '../../../assets/images/about/img-goorm-hover.png';
import DanpoongHoverImg from '../../../assets/images/about/img-danpoong-hover.png';

const cx = classNames.bind(styles);

export default function Intro({ scrollTarget }) {
  return (
    <div
      ref={scrollTarget}
      className={cx('intro', 'h-100 position-relative d-flex flex-column justify-contents-center align-items-center')}
    >
      <div className={cx('cloudUp', 'w-100 position-absolute')} />
      <h5 className={cx('title', 'd-none d-md-block text-align-center mt-4')}>9oormthonUNIV 는</h5>
      <h6 className={cx('title', 'd-block d-md-none text-align-center mt-4')}>9oormthonUNIV 는</h6>
      <div className="d-flex flex-column">
        <h3 className={cx('description', 'd-none d-md-block')}>
          봄과 가을을 기수로 하여
          <br />
          아이디어 실현의 장을 제공 해주는 IT 연합 동아리 입니다.
        </h3>
        <h4 className={cx('description', 'd-block d-md-none')}>
          봄과 가을을 기수로 하여
          <br />
          아이디어 실현의 장을 제공 해주는 IT 연합 동아리 입니다.
        </h4>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <figure className={cx('imgs')}>
          <div className={cx('imgsSet', 'beotkkot', 'position-relative')}>
            <img src={BeotkkotImg} className={cx('img', 'position-absolute w-100 h-100')} alt="벚꽃이 일러스트" />
            <img
              src={BeotkkotHoverImg}
              className={cx('img', 'hover-img', 'position-absolute w-100 h-100')}
              alt="색칠된 벚꽃이 일러스트"
            />
          </div>
          <div className={cx('imgsSet', 'goorm', 'position-relative')}>
            <img src={GoormImg} className={cx('img', 'position-absolute w-100 h-100')} alt="구르미 일러스트" />
            <img
              src={GoormHoverImg}
              className={cx('img', 'hover-img', 'position-absolute w-100 h-100')}
              alt="색칠된 구르미 일러스트"
            />
          </div>
          <div className={cx('imgsSet', 'danpoong', 'position-relative')}>
            <img src={DanpoongImg} className={cx('img', 'position-absolute w-100 h-100')} alt="단풍이 일러스트" />
            <img
              src={DanpoongHoverImg}
              className={cx('img', 'hover-img', 'position-absolute w-100 h-100')}
              alt="색칠된 단풍이 일러스트"
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
