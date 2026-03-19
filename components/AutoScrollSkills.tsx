'use client';

import { useEffect, useRef } from 'react';

const skills = [
  'API DEVELOPMENT',
  'DATABASE DESIGN',
  'UI & VISUAL DESIGN',
  'COMPONENT-BASED ARCHITECTURE',
  'RESPONSIVE DESIGN',
  'STAKEHOLDER COMMUNICATION',
  'TEST-DRIVEN DEVELOPMENT',
  'AGILE/SCRUM METHODOLOGIES',
  'VERSION CONTROL (GIT)',
  'DATA PROCESSING & ANALYSIS',
];

export function AutoScrollSkills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const direction = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;

      position.current += direction.current;

      if (position.current >= maxScroll) {
        position.current = maxScroll;
        direction.current = -1;
      } else if (position.current <= 0) {
        position.current = 0;
        direction.current = 1;
      }

      container.scrollTop = position.current;
    };

    const intervalId = setInterval(scroll, 15);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative h-full">
        {/* corner crosses */}
        <svg
          className="absolute -top-10 -left-10 z-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.5 }}
        >
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="40"
            y2="20"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        </svg>

        <svg
          className="absolute -top-10 -right-15 z-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.5 }}
        >
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="40"
            y2="20"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        </svg>

        <svg
          className="absolute -bottom-15 -left-10 z-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.5 }}
        >
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="40"
            y2="20"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        </svg>

        <svg
          className="absolute -bottom-15 -right-15 z-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.5 }}
        >
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="40"
            y2="20"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        </svg>
        {/* scrollable content */}
        <div ref={scrollRef} className="h-full overflow-hidden">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-700 last:border-0 flex justify-center"
              >
                <p className="text-3xl text-black font-light">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
      </div>
    </>
  );
}
