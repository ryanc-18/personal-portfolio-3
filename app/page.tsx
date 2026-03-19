'use client';

import PageLayout from '@/components/PageLayout';
import { AutoScrollSkills } from '@/components/AutoScrollSkills';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Home() {
  const para1Ref = useScrollAnimation<HTMLParagraphElement>();
  const para2Ref = useScrollAnimation<HTMLParagraphElement>();
  const para3Ref = useScrollAnimation<HTMLParagraphElement>();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* about me section */}
      <section
        id="about-me"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="flex">
          <div className="flex flex-col items-start pl-50 mt-45 sticky top-24 self-start">
            <h1 className="text-[10rem] font-black text-black leading-none">
              WHO IS
            </h1>
            <h1 className="text-[10rem] font-black text-black relative leading-none">
              RYAN?
            </h1>
          </div>

          <div className="text-black pl-50 pr-20 mt-30 text-xl p-10">
            <p className="text-gray-400">( bio )</p>
            <p ref={para1Ref} className="fade-in-scroll text-black mt-8">
              RYAN CHIN, 20 YEARS OLD, LIVING IN MELBOURNE, AUSTRALIA. BORN AND
              RAISED IN MALAYSIA, I CAME TO AUSTRALIA TO PURSUE MY STUDIES IN
              COMPUTER SCIENCE. ALTHOUGH MY ACADEMIC PATH HAD BEEN A CHALLENGE,
              MY PASSION FOR BUILDING MEANINGFUL SOFTWARE THAT CREATES IMPACT
              HAS ALWAYS PROPELLED ME FORWARD.
            </p>
            <p ref={para2Ref} className="mt-15 fade-in-scroll text-black">
              MY JOURNEY INTO WEB DEVELOPMENT BEGAN WHEN I STARTED MY FIRST
              INTERNSHIP AT A LOCAL TECH COMPANY. THERE, I HAD THE OPPORTUNITY
              TO WORK ON REAL-WORLD PROJECTS AND LEARN FROM EXPERIENCED
              DEVELOPERS. THIS EXPERIENCE FURTHER IGNITED MY PASSION TO BRIDGE
              THE GAP BETWEEN FRUSTRATING INEFFICIENCIES AND ELEGANT DIGITAL
              SOLUTIONS THAT TRULY HELP PEOPLE.
            </p>
            <p ref={para3Ref} className="mt-15 fade-in-scroll text-black">
              TODAY, I AM FOCUSED ON MOVING FORWARD AT MY OWN PACE, LEARNING
              THROUGH EXPERIENCE BY BUILDING PROJECT THAT FEEL MEANINGFUL. I
              TRULY VALUE CONSISTENCY OVER SPEED, AS I BELIEVE THAT PROGRESS
              COMES FROM STAYING CURIOUS, PATIENT, AND HONEST WITH THE PROCESS
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="flex min-h-screen">
        <div className="relative flex justify-center items-center w-full">
          {/* box with text */}
          <div className="relative rounded-lg border border-gray-300 p-10 mt-5 mb-5 h-110 items-end flex flex-col justify-end">
            <span
              className="absolute text-4xl font-bold text-black twinkle"
              style={{ top: '45%', left: '10%', animationDelay: '0s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-4xl font-bold text-black twinkle"
              style={{ top: '5%', left: '25%', animationDelay: '2.5s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-7xl font-bold text-black twinkle"
              style={{ top: '27%', left: '30%', animationDelay: '0.625s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-4xl font-bold text-black twinkle"
              style={{ top: '15%', left: '55%', animationDelay: '3.75s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-6xl font-bold text-black twinkle"
              style={{ top: '49%', left: '60%', animationDelay: '1.25s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-7xl font-bold text-black twinkle"
              style={{ top: '20%', left: '70%', animationDelay: '3.125s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-4xl font-bold text-black twinkle"
              style={{ top: '2%', left: '80%', animationDelay: '4.375s' }}
            >
              ✦
            </span>
            <span
              className="absolute text-7xl font-bold text-black twinkle"
              style={{ top: '47%', left: '85%', animationDelay: '1.875s' }}
            >
              ✦
            </span>
            <h1 className="text-5xl font-bold text-black">EVERYTHING I</h1>
            <h1
              className="text-5xl font-bold text-black"
              style={{ animationDelay: '0.2s' }}
            >
              DABBLE IN
            </h1>
          </div>

          {/* auto scroll skills box */}
          <div className="relative rounded-lg border border-gray-300 bg-gray-100 p-20 m-5 h-110 overflow-hidden">
            <AutoScrollSkills />
          </div>
        </div>
      </section>

      {/* projects section */}
      <section id="projects" className="flex min-h-screen">
        <div className="flex flex-col items-center w-full mt-20">
          <div className="relative">
            <svg
              className="absolute top-4 -left-20 z-10"
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
              className="absolute top-4 -right-24 z-10"
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
            <div className="flex flex-col items-center">
              <h1 className="text-black font-semibold text-7xl">HERE'S WHAT</h1>
              <h1 className="text-black font-semibold text-7xl">I'VE BUILT</h1>
            </div>
          </div>

          {/* Horizontal scrolling container */}
          <div className="relative w-[1100px] mx-auto mt-20">
            {/* side gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10 "></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

            {/* project cards */}
            <div className="overflow-auto">
              <div className="flex gap-8 pb-8 px-20 w-max">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.descriptionCard}
                    field={project.field}
                    role={project.role}
                    slug={project.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <div />
        {/* main content */}
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="relative flex flex-col items-center">
            <svg
              className="absolute top-4 -left-20 z-10"
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
              className="absolute top-4 -right-24 z-10"
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
            <h1 className="text-black font-semibold text-7xl">LET'S BUILD</h1>
            <h1 className="text-black font-semibold text-7xl">
              SOMETHING TOGETHER
            </h1>
          </div>
          {/* email */}
          <div className="flex flex-col items-center space-y-3">
            <p className="text-gray-400 text-xs tracking-widest">
              ( GET IN TOUCH )
            </p>
            <a
              href="mailto:ryan.ckv5@gmail.com"
              className="text-2xl font-bold text-black hover:text-gray-500 transition colors duration-300"
            >
              RYAN.CKV5@GMAIL.COM
            </a>
          </div>

          {/* social links */}
          <div className="flex gap-8">
            <a
              href="https://github.com/ryanc-18"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-black text-black text-sm font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-chin-4791a7314/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-black text-black text-sm font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* footer */}
        <p className="text-gray-400 text-xs tracking-widest pb-10">
          DESIGNED & BUILT BY RYAN CHIN © 2025
        </p>
      </section>
    </PageLayout>
  );
}
