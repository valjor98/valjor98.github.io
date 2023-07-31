import '../styles/globals.css';

import Avatar from '../components/Avatar'
import Bulb from '../components/Bulb'
import CardLeft from '../components/CardLeft'
import CardRight from '../components/CardRight'
import Circles from '../components/Circles'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import ServiceSlider from '../components/ServiceSlider'
import Socials from '../components/Socials'
import TestimonialSlider from '../components/TestimonialSlider'
import TopLeftImg from '../components/TopLeftImg';
import Transition from '../components/Transition';
import WorkSlider from '../components/WorkSlider';


import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />;
        </motion.div> 
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
