
import Link from "next/link"

import {RiGithubLine, RiLinkedinLine} from  'react-icons/ri'

const Socials = () => {
  return (
  <div>
    <Link href={'https://github.com/valjor98'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/jorge-valdiviap'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine/>
    </Link>
  </div>
  )
};

export default Socials;
