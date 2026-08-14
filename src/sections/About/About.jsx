import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import aboutImage from "../../assets/images/about-estate.jpg";

const About = () => {
  return (
    <Section className="overflow-hidden">

      <Container>

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >

          {/* =========================
              CONTENT
          ========================= */}


          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            {/* Eyebrow */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              About Luxestate
            </p>


            {/* Heading */}

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              A higher standard
              <span className="block text-gray-400">
                of living.
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-8
                text-gray-600
              "
            >
              At Luxestate, we believe exceptional homes should
              offer more than beautiful architecture. They should
              provide an extraordinary way of life.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                text-base
                leading-8
                text-gray-600
              "
            >
              Our team carefully curates distinctive residences
              in the world's most desirable locations, combining
              refined design, exceptional service, and trusted
              expertise.
            </p>


            {/* Divider */}

            <div className="my-10 h-px w-full bg-gray-200" />


            {/* Statistics */}

            <div
              className="
                grid
                grid-cols-3
                gap-6
              "
            >

              <div>
                <p className="text-3xl font-bold">
                  250+
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Properties
                </p>
              </div>


              <div>
                <p className="text-3xl font-bold">
                  18
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Global Markets
                </p>
              </div>


              <div>
                <p className="text-3xl font-bold">
                  98%
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">
                  Client Satisfaction
                </p>
              </div>

            </div>


            {/* CTA */}

            <div className="mt-10">

              <a
                href="#contact"
                className="
                  button
                  inline-flex
                  items-center
                  rounded-xl
                  bg-black
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-gray-800
                  active:scale-[0.98]
                "
              >
                Discover Our Story
              </a>

            </div>

          </motion.div>

          {/* =========================
              IMAGE
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >

            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-4xl
              "
            >

              <img
                src={aboutImage}
                alt="Luxury modern residence"
                className="
                  h-125
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-105
                  lg:h-162
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

            </div>


            {/* Experience Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
                delay: 0.3,
              }}
              className="
                absolute
                bottom-6
                left-6
                rounded-2xl
                bg-white
                p-5
                shadow-2xl
                sm:bottom-8
                sm:left-8
              "
            >

              <p className="text-3xl font-bold">
                15+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Years of Excellence
              </p>

            </motion.div>

          </motion.div>

        </div>

      </Container>

    </Section>
  );
};

export default About;