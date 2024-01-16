import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useScrollPercentage } from 'react-scroll-percentage';
import { BENEFIT_ITEM_DATA } from '../../../../utilities/AboutData';
import BenefitItem from './BenefitItem';

import classNames from 'classnames/bind';

import styles from './BenefitDesktop.module.scss';

const cx = classNames.bind(styles);

export default function HorizontalScroll() {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);
  const [containerRef, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0.9,
  });

  useEffect(() => {
    scrollPerc.set(percentage);
  }, [percentage]);

  const transform = useTransform(scrollPerc, [0, 1], [0, -scrollRange + viewportW]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div className={cx('horizontalScroll')} ref={containerRef}>
      <div className={cx('scroll', 'position-sticky')}>
        <motion.section
          className={cx('motionContainer', 'position-relative w-100 d-flex flex-column justify-content-center')}
          ref={scrollRef}
          style={{ x: spring }}
        >
          <div className={cx('itemList', 'position-relative d-flex')}>
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
        </motion.section>
      </div>
      <div ref={ghostRef} />
    </div>
  );
}
