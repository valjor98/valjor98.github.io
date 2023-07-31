import React, { useState } from 'react';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from 'react-icons/fa';

import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
// 1:29:23
// 1:43:45
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Technologies',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '1st Place Winner - Banorte Hackathon 2023',
        stage: 'May 2023',
      },
      {
        title: '1st Place Winner - Hack Monterrey 2022',
        stage: 'September 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer Intern - Valiot',
        stage: 'Jan 2023 - July 2023',
      },
      {
        title: 'Software Engineer Intern - XLab: Protexa Research and Development Labs',
        stage: 'Dec 2022 - June 2023',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bs, Computer Science- Tecnoloogico de Monterrey',
        stage: 'Aug 2020 - June 2024 (expected)',
      },
      {
        title: 'Bs, Economics - Universidad Nacional Autonoma de Mexico - SUAyED',
        stage: 'Jan 2021 - June 2025 (expected)',
      },
    ],
  },
];

import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      {/* <Avatar /> */}
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 
          variants={fadeIn('right', 0.2)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2'
        >
          Driven by <span className='text-accent'>Curiosity</span>, Fueled by <span className='text-accent'>Problem-Solving</span>
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.2)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
        >
          I am a Software Engineer with a strong academic background in Computer Science and Economics. My journey in the tech world has been marked by exciting internships and winning hackathons, allowing me to gain hands-on experience and develop a diverse skill set.
        </motion.p>

        {/* counters */}
        <motion.div 
          variants={fadeIn('right', 0.6)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>

            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl front-extrabold text-accent mb-2'>
                <CountUp start={0} end={3} duration={2} />
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]'>Years of experience</div>
            </div>

            {/* clients */}
{/*             <div className='relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl front-extrabold text-accent mb-2'>
                <CountUp start={0} end={250} duration={5} />
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]'>satisfied clients</div>
            </div> */}

            {/* projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl front-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5} />
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]'>Finished projects</div>
            </div>

            {/* awards */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl front-extrabold text-accent mb-2'>
                <CountUp start={0} end={8} duration={4} />
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]'>awards</div>
            </div>

          </div>
        </motion.div>
      </div>
      <motion.div 
        variants={fadeIn('left', 0.4)} 
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
      >
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex1) => {
            return (
              <div
                key={itemIndex1}
                className={`${
                  index === itemIndex1 &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-
                [2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex1)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
        xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className='text-2xl text-white'>{icon}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  )
};

export default About;
