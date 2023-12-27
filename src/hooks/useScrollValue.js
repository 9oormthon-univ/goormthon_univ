import { useEffect, useState } from 'react';

export default function useScrollValue() {
  const [scrollValue, setScrollValue] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setScrollValue({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollValue;
}
