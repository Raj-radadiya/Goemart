import React, { useEffect, useRef, useState } from 'react';
import './counting.scss';
import { countingData } from '../../../dataset/herobannerSlider';

const NumberTicker = ({ endValue, duration = 3000, prefix = '', suffix = '', startCounting }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;

    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(endValue * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(step);
      }
    };

    countRef.current = requestAnimationFrame(step);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [endValue, duration, startCounting]);

  return (
    <div className="number-ticker">
      <span className="count">{prefix}{count.toLocaleString()}{suffix}</span>
    </div>
  );
};

export default function Counting() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="counting-section" ref={sectionRef}>
      <div className="container">
        <div className="counting-grid">
          {countingData.map((item, index) => (
            <div className="counting-item" key={index}>
              <div className="icon-wrapper" style={{ '--icon-color': item.color }}>
                <div className="icon">{item.icon}</div>
              </div>
              <div className="content">
                <NumberTicker
                  endValue={item.count}
                  suffix={item.suffix}
                  startCounting={isVisible}
                />
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
