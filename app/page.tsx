'use client';

import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  const para1Ref = useScrollAnimation<HTMLParagraphElement>();
  const para2Ref = useScrollAnimation<HTMLParagraphElement>();
  const para3Ref = useScrollAnimation<HTMLParagraphElement>();

  return (
    <PageLayout>
      {/* home section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <h1 className="text-6xl font-bold text-black mb-4 typewriter mx-auto">
              RYAN CHIN
            </h1>
          </div>
          <p
            className="text-xl text-gray-600 animate-fade-in delay-2000"
            style={{ animationDelay: '0.2s' }}
          >
            FULL-STACK DEVELOPER
          </p>
          <p
            className="text-md text-gray-500 animate-fade-in delay-4000"
            style={{ animationDelay: '0.4s' }}
          >
            A LIFELONG LEARNER, ALWAYS SEEKING TO CREATE IMPACT THROUGH CODE.
          </p>

          <div
            className="flex mt-20 gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              href="/about"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* about me section */}
      <section id="about-me" className="flex min-h-screen">
        <div className="flex flex-col items-start pl-50 mt-57">
          <h1 className="text-[10rem] font-bold text-black leading-none">
            WHO
          </h1>
          <h1 className="text-[10rem] font-bold text-black leading-none">IS</h1>
          <h1 className="text-[10rem] font-bold text-black relative leading-none">
            RYAN?
            {/* <span
              className="absolute text-[24rem] font-semibold text-black"
              style={{
                top: '-180px',
                left: '280px',
              }}
            >
              ?
            </span> */}
          </h1>
        </div>

        <div className="text-black pl-50 pr-20 mt-30 text-xl p-10">
          <p className="text-gray-400">( bio )</p>
          <p ref={para1Ref} className="fade-in-scroll text-black mt-8">
            RYAN CHIN, 20 YEARS OLD, LIVING IN MELBOURNE, AUSTRALIA. BORN AND
            RAISED IN MALAYSIA, I CAME TO AUSTRALIA TO PURSUE MY STUDIES IN
            COMPUTER SCIENCE. ALTHOUGH MY ACADEMIC PATH HAD BEEN A CHALLENGE, MY
            PASSION FOR BUILDING MEANINGFUL SOFTWARE THAT CREATES IMPACT HAS
            ALWAYS PROPELLED ME FORWARD.
          </p>
          <p ref={para2Ref} className="mt-15 fade-in-scroll text-black">
            MY JOURNEY INTO WEB DEVELOPMENT BEGAN WHEN I STARTED MY FIRST
            INTERNSHIP AT A LOCAL TECH COMPANY. THERE, I HAD THE OPPORTUNITY TO
            WORK ON REAL-WORLD PROJECTS AND LEARN FROM EXPERIENCED DEVELOPERS.
            THIS EXPERIENCE FURTHER IGNITED MY PASSION TO BRIDGE THE GAP BETWEEN
            FRUSTRATING INEFFICIENCIES AND ELEGANT DIGITAL SOLUTIONS THAT TRULY
            HELP PEOPLE.
          </p>
          <p ref={para3Ref} className="mt-15 fade-in-scroll text-black">
            TODAY, I AM FOCUSED ON MOVING FORWARD AT MY OWN PACE, LEARNING
            THROUGH EXPERIENCE BY BUILDING PROJECT THAT FEEL MEANINGFUL. I TRULY
            VALUE CONSISTENCY OVER SPEED, AS I BELIEVE THAT PROGRESS DERIVES
            FROM STAYING CURIOUS, PATIENT, AND HONEST WITH THE PROCESS
          </p>
        </div>
      </section>

      <section id="skills" className="flex min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="rounded-lg border border-gray-300 p-10 mt-5 mb-5">
            <h1 className="text-5xl font-bold text-black">Everything I</h1>
            <h1 className="text-5xl font-bold text-black justify-center flex">
              dabble in
            </h1>
          </div>
          <div className="rounded-lg border border-gray-300 p-10 m-5"></div>
        </div>
      </section>

      {/* projects section */}
      <section id="projects" className="flex min-h-screen">
        {/* LIST OF PROJECTS I'VE DONE:
        - Grant outcome analysis tool - next.js, typescript, postgreSQL
        - Taxi game - java
        - Text autocomplete - C
        - Scam Detector - Python, scikit-learn, pandas
        - 
         */}
      </section>
    </PageLayout>
  );
}
