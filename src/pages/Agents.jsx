import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

import { Link } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Senior Property Consultant",
    image: "/agents/agent-1.jpg",
    description:
      "Sophia specializes in luxury residences and private estates, helping clients discover properties that match their lifestyle and long-term goals.",
    phone: "+1 (310) 555-0188",
    email: "sophia@luxuryestates.com",
  },

  {
    id: 2,
    name: "Daniel Morgan",
    role: "Luxury Property Specialist",
    image: "/agents/agent-2.jpg",
    description:
      "Daniel brings extensive knowledge of premium coastal properties and works closely with clients seeking exceptional homes in prestigious locations.",
    phone: "+1 (310) 555-0246",
    email: "daniel@luxuryestates.com",
  },

  {
    id: 3,
    name: "Olivia Carter",
    role: "Luxury Real Estate Advisor",
    image: "/agents/agent-3.jpg",
    description:
      "Olivia focuses on high-end urban residences, providing a personalized approach to every stage of the property buying and selling experience.",
    phone: "+1 (212) 555-0199",
    email: "olivia@luxuryestates.com",
  },
];

const Agents = () => {
  return (
    <main>

      {/* ==================================================
          PAGE HERO
      ================================================== */}

      <Section className="pt-16 lg:pt-24">

        <Container>

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
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >

            <p className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-gray-500
            ">
              Our Experts
            </p>

            <h1 className="
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-6xl
            ">
              Meet the people
              <br />
              behind LuxEstate.
            </h1>

            <p className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-gray-600
            ">
              Our experienced property advisors combine market
              knowledge, discretion, and a deep understanding of
              luxury real estate to help you make confident decisions.
            </p>

          </motion.div>

        </Container>

      </Section>


      {/* ==================================================
          AGENT GRID
      ================================================== */}

      <Section className="pt-8 lg:pt-12">

        <Container>

          <div className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          ">

            {agents.map((agent, index) => (

              <motion.article
                key={agent.id}

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
                  duration: 0.7,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -8,
                }}

                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                "
              >

                {/* Agent Image */}

                <div className="
                  relative
                  h-105
                  overflow-hidden
                  bg-gray-100
                ">

                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}

                  <div className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    opacity-70
                  " />

                  {/* Contact Actions */}

                  <div className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    gap-3
                  ">

                    <a
                      href={`tel:${agent.phone}`}
                      aria-label={`Call ${agent.name}`}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-black
                        shadow-lg
                        transition
                        duration-300
                        hover:scale-110
                      "
                    >
                      <FaPhone className="text-sm" />
                    </a>

                    <a
                      href={`mailto:${agent.email}`}
                      aria-label={`Email ${agent.name}`}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-black
                        shadow-lg
                        transition
                        duration-300
                        hover:scale-110
                      "
                    >
                      <FaEnvelope className="text-sm" />
                    </a>

                  </div>

                </div>


                {/* Agent Information */}

                <div className="p-7">

                  <p className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                  ">
                    {agent.role}
                  </p>

                  <h2 className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-tight
                  ">
                    {agent.name}
                  </h2>

                  <p className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-gray-600
                  ">
                    {agent.description}
                  </p>


                  {/* View Profile */}

                  <button
                    type="button"
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      transition
                      duration-300
                      group-hover:gap-5
                    "
                  >
                    View Profile
                    <FaArrowRight className="text-xs" />
                  </button>

                </div>

              </motion.article>

            ))}

          </div>

        </Container>

      </Section>


      {/* ==================================================
          PREMIUM CTA
      ================================================== */}

      <Section className="pt-12 lg:pt-20">

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
              duration: 0.8,
            }}
            className="
              relative
              overflow-hidden
              rounded-4xl
              bg-black
              px-6
              py-16
              text-center
              text-white
              sm:px-12
              lg:px-20
              lg:py-20
            "
          >

            {/* Decorative Element */}

            <div className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              border
              border-white/10
            " />

            <div className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-72
              w-72
              rounded-full
              border
              border-white/10
            " />


            <div className="relative z-10 mx-auto max-w-3xl">

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-400
              ">
                Let's Work Together
              </p>

              <h2 className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
              ">
                Ready to find your
                <br />
                next exceptional home?
              </h2>

              <p className="
                mx-auto
                mt-5
                max-w-xl
                text-gray-400
                leading-relaxed
              ">
                Speak with one of our property advisors and let us
                help you discover a residence that feels truly yours.
              </p>

              <div className="
                mt-8
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              ">

                <Button className="border border-white" >
                 <Link to="/book-inspection"> Book an Inspection</Link>
                </Button>

                <Button variant="secondary">
                  Contact Our Team
                </Button>

              </div>

            </div>

          </motion.div>

        </Container>

      </Section>

    </main>
  );
};

export default Agents;