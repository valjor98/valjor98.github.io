import Circles from "../../components/Circles";

import { BsArrowBarRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full">
        {/* text */}
        <h2 className="h2 text-center mb-12">
          Let's <span className="text-accent">connect.</span>
        </h2>
        {/* form */}
        <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input type="text" placeholder="name" className="input" />
            <input type="text" placeholder="email" className="input" />
          </div>
            <input type="text" placeholder="subject" className="input" />
        </form>
      </div>
    </div>
  )
};

export default Contact;
