import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { motion, useViewportScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import styled from 'styled-components';
import { useScrollPercentage } from 'react-scroll-percentage';
import { BENEFIT_ITEM_DATA } from '../../../../utilities/AboutData';
import BenefitItem from './BenefitItem';

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

  const { scrollYProgress } = useViewportScroll();

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
    <SmoothScrollWrapper ref={containerRef}>
      <ScrollContainer>
        <ThumbnailsContainer ref={scrollRef} style={{ x: spring }}>
          <div className="thumbnails">
            {BENEFIT_ITEM_DATA.map((item) => (
              <BenefitItem
                className="thumbnail"
                imgSrc={item.imgSrc}
                iconSrc={item.iconSrc}
                bgColor={item.bgColor}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </ThumbnailsContainer>
      </ScrollContainer>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </SmoothScrollWrapper>
  );
}

const ScrollContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;
  height: calc(100dvh - 3.69rem);
  margin-top: 3.69rem;

  .ghost {
    width: 100vw;
  }
`;

const SmoothScrollWrapper = styled.div`
  height: 100dvh;
`;

const ThumbnailsContainer = styled(motion.section)`
  position: relative;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .thumbnails {
    position: relative;
    display: flex;
    margin-top: 3.69rem;
    & > *:not(:last-child) {
      margin-right: 45px;
    }
  }
`;
