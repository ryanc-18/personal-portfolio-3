'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation<T extends HTMLElement>(
  visibleClass = 'fade-in-visible'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
          } else {
            entry.target.classList.remove(visibleClass);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visibleClass]);

  return ref;
}
