import { useRef } from 'react';

export default function useMoveScroll() {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current.scrollIntoView({ behavior: 'smooth' });
  };
  return { element, onMoveToElement };
}
