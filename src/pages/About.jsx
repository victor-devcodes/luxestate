import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaAward,
  FaHome,
  FaUsers,
} from "react-icons/fa";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import aboutImage from "../assets/images/property-1.jpg";

const AboutPage = () => {
  return (
    <main>


    
      {/* =========================
          OUR STORY
      ========================= */}

      <Section>

        <Container>

      {/* =========================
          ABOUT HERO
      ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-4xl"
          >

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

            <h1
              className="
                mt-4
                text-5xl
                font-bold
                tracking-tight
                sm:text-6xl
              "
            >
              Property is personal.
              <br />
              We make it exceptional.
            </h1>

            <p
              className="
                mt-8
                mb-15
                text-lg
                leading-8
                text-gray-600
              "
            >
              Luxestate is a premium real estate
              brokerage focused on exceptional properties,
              personalized service, and long-term client
              relationships.
            </p>

          </motion.div>


          <div className="
            grid
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          ">

            {/* Image */}

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
              }}
              className="
                overflow-hidden
                rounded-3xl
              "
            >

              <img
                src={aboutImage}
                alt="Luxestate residence"
                className="
                  h-105
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  sm:h-130
                "
              />

            </motion.div>


            {/* Story */}

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
                delay: 0.1,
              }}
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-500
              ">
                Our Story
              </p>

              <h2 className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
              ">
                More than real estate.
                <span className="block text-gray-400">
                  We create possibilities.
                </span>
              </h2>

              <p className="
                mt-6
                text-lg
                leading-relaxed
                text-gray-600
              ">
                Luxestate was created around a simple belief:
                exceptional properties deserve exceptional
                representation.
              </p>

              <p className="
                mt-5
                leading-relaxed
                text-gray-600
              ">
                From carefully selected residences to personalized
                property advisory, our approach combines market
                expertise with an uncompromising attention to
                quality and detail.
              </p>

              <p className="
                mt-5
                leading-relaxed
                text-gray-600
              ">
                Every client relationship is built around trust,
                transparency, and a deep understanding of what makes
                a property truly special.
              </p>


              {/* Stats */}

              <div className="
                mt-10
                grid
                grid-cols-3
                gap-6
                border-t
                border-gray-200
                pt-8
              ">

                <div>
                  <p className="text-3xl font-bold">
                    250+
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Properties
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold">
                    98%
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Client satisfaction
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold">
                    15+
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Years experience
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </Container>

      </Section>


      {/* =========================
          OUR PHILOSOPHY
      ========================= */}

      <section className="bg-gray-50 py-24 lg:py-32">

        <Container>

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl"
          >

            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-gray-500
            ">
              Our Philosophy
            </p>

            <h2 className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            ">
              A better way to experience
              <span className="text-gray-400">
                {" "}real estate.
              </span>
            </h2>

          </motion.div>


          <div className="
            mt-14
            grid
            gap-6
            md:grid-cols-3
          ">

            {[
              {
                icon: FaAward,
                title: "Exceptional Standards",
                text: "We focus on properties that meet a high standard of architecture, design, location, and long-term value.",
              },
              {
                icon: FaUsers,
                title: "Personal Relationships",
                text: "Our clients receive thoughtful guidance and a personalized experience from the first conversation to closing.",
              },
              {
                icon: FaHome,
                title: "Curated Selection",
                text: "Rather than overwhelming you with options, we carefully curate residences aligned with your lifestyle and goals.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-8
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >

                  <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-black
                    text-white
                  ">
                    <Icon />
                  </div>

                  <h3 className="
                    mt-7
                    text-xl
                    font-bold
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-4
                    leading-relaxed
                    text-gray-600
                  ">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </Container>

      </section>


      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <Section>

        <Container>

          <div className="
            grid
            gap-14
            lg:grid-cols-2
            lg:items-center
          ">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
                duration: 0.7,
              }}
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-500
              ">
                Why Luxestate
              </p>

              <h2 className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
              ">
                Confidence at every
                <span className="text-gray-400">
                  {" "}step.
                </span>
              </h2>

              <p className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-gray-600
              ">
                Buying or selling a luxury property should feel
                considered, transparent, and effortless.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Expert local market knowledge",
                  "Private access to exceptional properties",
                  "Personalized property recommendations",
                  "Professional guidance from viewing to closing",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                    ">
                      <FaCheck className="text-xs" />
                    </div>

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* Experience Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                duration: 0.7,
              }}
              className="
                rounded-3xl
                bg-black
                p-8
                text-white
                sm:p-12
              "
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-400
              ">
                The Luxestate Experience
              </p>

              <h3 className="
                mt-6
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
              ">
                Property expertise.
                <span className="block text-gray-400">
                  Personal attention.
                </span>
              </h3>

              <p className="
                mt-6
                mb-6
                leading-relaxed
                text-gray-300
              ">
                From the moment you discover a property to the day
                you receive the keys, our team is committed to
                making every detail feel effortless.
              </p>
              <Button variant="secondary">
              <Link
                to="/agents"
                className="
                  inline-flex
                  items-center
                  gap-3
                  font-semibold
                "
              >
                Meet our agents
                <FaArrowRight className="text-sm" />
              </Link>
              </Button>

            </motion.div>

          </div>

        </Container>

      </Section>


      {/* =========================
          CTA
      ========================= */}

      <section className="pb-24 lg:pb-32">

        <Container>

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              rounded-3xl
              bg-black/10
              px-6
              py-16
              text-center
              sm:px-10
              lg:px-20
              lg:py-20
            "
          >

            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-gray-500
            ">
              Your Next Chapter
            </p>

            <h2 className="
              mx-auto
              mt-4
              max-w-3xl
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            ">
              Ready to find a place
              <span className="text-gray-400">
                {" "}worth calling home?
              </span>
            </h2>

            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-gray-600
            ">
              Explore our collection of exceptional residences or
              speak directly with one of our property advisors.
            </p>

            <div className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-4
            ">

              <Button>
              <Link
                to="/properties"
                className="
                  inline-flex
                  items-center
                  gap-3
                  font-semibold
                "
              >
                Explore Properties
                <FaArrowRight className="text-sm" />
              </Link>
              </Button>

              <Button variant="secondary">
              <Link
                to="/contact"
              >
                Contact Us
              </Link>

              </Button>
            </div>

          </motion.div>

        </Container>

      </section>

    </main>
  );
};

export default AboutPage;