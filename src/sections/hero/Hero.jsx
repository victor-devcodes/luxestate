import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero-house.jpg";
import { HiOutlineMapPin } from "react-icons/hi2";
import { motion } from "framer-motion";
import { heroContent, heroStats, featuredProperty, } from "../../data/heroData";

const Hero = () => {
  return (
    <Section className="py-10">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              {heroContent.badge}
            </p>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight lg:text-7xl">
              {heroContent.title}
            </h1>
            
            <p className="mb-8 max-w-xl text-lg text-gray-600">
              {heroContent.description}
            </p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
            >
              <Button>
                <Link
                    to="/book-inspection"
                    className=" text-sm font-semibold transition ">                                   
                  {heroContent.primaryButton}
                </Link>
              </Button>

              <Button variant="secondary">
                  <Link
                    to="/properties"
                    className=" text-sm font-semibold transition " >
                    {heroContent.secondaryButton}             
                  </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap gap-10"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
            >

            {heroStats.map((stat) => (

              <div key={stat.id}>

                <h3 className="text-3xl font-bold">
                  {stat.number}
                </h3>

                <p className="text-gray-500">
                  {stat.label}
                </p>

              </div>

            ))}

            </motion.div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <img
              src={heroImage}
              alt="Luxury modern villa"
              className="
                h-120
                w-full
                rounded-3xl
                object-cover
                shadow-2xl
                transition-transform
                duration-700
                hover:scale-105
              "
            />
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-linear-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              ></div>
              <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    rounded-2xl
                    bg-white/90
                    p-5
                    backdrop-blur-lg
                    shadow-xl
                  "
                >

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                      <HiOutlineMapPin />

                      {featuredProperty.location}

                  </div>

                  <h3 className="mt-2 text-2xl font-bold">
                    {featuredProperty.title}
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {featuredProperty.price}
                  </p>

              </div>
              <motion.div
                className="absolute top-6 right-6 rounded-full bg-white px-5 py-3 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⭐ {featuredProperty.badge}
              </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};

export default Hero;