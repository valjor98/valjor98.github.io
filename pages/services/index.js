import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx';


export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Software Engineer',
    description: 'I specialize in developing innovative and efficient software solutions to address complex challenges. With a strong proficiency in Python, JavaScript, and other technologies, I bring ideas to life by crafting robust and scalable applications.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Researcher',
    description: ' I delve into the realms of technology and engineering, exploring cutting-edge concepts and conducting in-depth studies. My current research focuses on Automatic Design of Intelligent Algorithms for Solving Practical Multi-Objective Engineering Problems',
  },
  {
    icon: <RxDesktop />,
    title: 'Economist',
    description: ' I bridge the gap between economics and technology, applying analytical thinking and data-driven approaches to solve economic challenges',
  },
];

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//1.51:16

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
        xl:mb-0'>
          <h2 className='h2 xl:mt-8'>
            My services <span className='text-accent'>.</span> 
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg-mx-0'>
          As a Software Engineer, I offer innovative and reliable solutions tailored to your needs. My expertise lies in web development, AI, and data analysis. Whether it's creating dynamic web applications or implementing intelligent algorithms, I'm here to bring ideas to life.
          </p>
        </div>
        <div className='w-full xl:max-w-[65%]'>
          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
