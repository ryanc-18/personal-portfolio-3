'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                    } else {
                        entry.target.classList.remove('fade-in-visible');
                    }
                })
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);
    
    return ref;
}