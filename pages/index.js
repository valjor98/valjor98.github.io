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
      <div>
        <div>
          <h1 className='h1'>
            Transforming Ideas <br /> Into{' '}
            <span className='text-accent'>Digital Reality</span>
          </h1>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
            Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
            Lorem ipsum dolor sit amet consecteur adipisicing elit. Itaque 
          </p> 
          <div className='flex justify-center xl:hidden'>
            <ProjectBtm />
          </div>
        </div>
      </div>
      <div>Image</div> 
    </div>
  );
};


export default Home;
