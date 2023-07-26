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
        <h2>
          Let's <span className="text-accent">connect.</span>
        </h2>
      </div>
    </div>
  )
};

export default Contact;
