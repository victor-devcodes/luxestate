import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import ctaImage from "../../assets/images/cta-property.jpg";

const CTA = () => {
  return (
    <Section className="py-[0]">
    <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className=" relative min-h-140 overflow-hidden bg-black " >
          
          
          {/* =========================
              BACKGROUND IMAGE
          ========================= */}

          <img
            src={ctaImage}
            alt="Luxury modern residence"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-1500
              hover:scale-105
            "
          />


          {/* =========================
              DARK OVERLAY
          ========================= */}

          <div className=" absolute inset-0 bg-black/60"/>

          {/* =========================
              CONTENT
          ========================= */}          
          
         <div className=" relative z-10 flex min-h-140 items-center px-6 py-16 sm:px-10 lg:px-16 " >
                <Container>

                    <div className="max-w-3xl">

                    {/* Eyebrow */}

                    <motion.p
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        viewport={{
                        once: true,
                        }}
                        transition={{
                        duration: 0.6,
                        delay: 0.15,
                        }}
                        className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-gray-300
                        "
                    >
                        Your Next Chapter
                    </motion.p>


                    {/* Heading */}

                    <motion.h2
                        initial={{
                        opacity: 0,
                        y: 25,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        viewport={{
                        once: true,
                        }}
                        transition={{
                        duration: 0.7,
                        delay: 0.25,
                        }}
                        className="
                        mt-5
                        text-4xl
                        font-bold
                        leading-[1.05]
                        tracking-tight
                        text-white
                        sm:text-5xl
                        lg:text-7xl
                        "
                    >
                        Find a place
                        <span className="block text-gray-400">
                        worth calling home.
                        </span>
                    </motion.h2>


                    {/* Description */}

                    <motion.p
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        viewport={{
                        once: true,
                        }}
                        transition={{
                        duration: 0.6,
                        delay: 0.35,
                        }}
                        className="
                        mt-6
                        max-w-2xl
                        text-base
                        leading-8
                        text-gray-300
                        sm:text-lg
                        "
                    >
                        Whether you're searching for a private residence,
                        an investment opportunity, or your next extraordinary
                        address, our advisors are here to guide you.
                    </motion.p>


                    {/* Buttons */}

                    <motion.div
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        viewport={{
                        once: true,
                        }}
                        transition={{
                        duration: 0.6,
                        delay: 0.45,
                        }}
                        className="
                        mt-9
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        "
                    >

                        <a
                        href="#properties"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            px-7
                            py-4
                            text-sm
                            font-semibold
                            text-black
                            transition
                            duration-300
                            hover:bg-gray-200
                            active:scale-[0.98]
                        "
                        >
                        Explore Properties
                        </a>


                        <a
                        href="#contact"
                        className="
                            button
                            inline-flex
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white
                            px-7
                            py-4
                            text-sm
                            font-semibold
                            text-white
                            transition
                            duration-300
                            hover:border-black
                            hover:bg-white/10
                            active:scale-[0.98]
                        "
                        >
                        Speak With an Advisor
                        </a>

                    </motion.div>

                    </div>

                </Container>
         </div>
     </motion.div>
    </Section>
  );
};

export default CTA;