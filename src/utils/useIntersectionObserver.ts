import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options : {}, action : Function) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  useEffect(() => {
    if(isIntersecting){
        action()
    }
  },[isIntersecting])

  return { targetRef };
};

export default useIntersectionObserver;