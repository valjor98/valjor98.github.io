import Image from 'next/image';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtm from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants'
// 40:45
const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Transforming Ideas <br /> Into{' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          <motion.p 
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
              Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
              Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
              Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
          </motion.p> 
          <div className='flex justify-center xl:hidden'>
            <ProjectBtm />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectBtm/>
          </motion.div>
        </div>
      </div>
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full h-full absolute mix-blend-color-cocge transalte-z-0'></div>
         <div>Particles</div> 
        </div> 
    </div>
  );
};


export default Home;
