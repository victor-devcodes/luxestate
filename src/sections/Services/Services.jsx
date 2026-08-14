import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const services = [
  {
    number: "01",
    title: "Property Sales",
    description:
      "Strategic representation and personalized guidance for buying and selling exceptional residences.",
  },
  {
    number: "02",
    title: "Private Acquisitions",
    description:
      "Access carefully selected properties and discreet opportunities that match your lifestyle and ambitions.",
  },
  {
    number: "03",
    title: "Property Marketing",
    description:
      "Sophisticated presentation, targeted exposure, and premium positioning designed to attract qualified buyers.",
  },
  {
    number: "04",
    title: "Investment Advisory",
    description:
      "Insightful guidance for clients seeking carefully considered real-estate investments and long-term value.",
  },
];

const Services = () => {
  return (
    <Section id="services" className="bg-black/5">

      <Container>

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

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
          >
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
            >
              What We Offer
            </p>
          </motion.div>


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
              delay: 0.1,
            }}
          >
            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
              "
            >
              More than property.
              <span className="block text-gray-500">
                A complete experience.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-gray-700
              "
            >
              From discovering the right residence to completing
              a successful acquisition, our approach is built around
              discretion, expertise, and exceptional service.
            </p>
          </motion.div>

        </div>


        {/* =========================
            SERVICES
        ========================= */}

        <div className="mt-16 border-t border-gray-200">

          {services.map((service, index) => (

            <motion.div
              key={service.number}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                grid
                gap-6
                border-b
                border-gray-200
                py-8
                transition-colors
                duration-300
                hover:bg-gray-50
                md:grid-cols-[80px_0.8fr_1.2fr_auto]
                md:items-center
                md:px-6
              "
            >

              {/* Number */}

              <div>
                <span
                  className="
                    text-sm
                    font-medium
                    text-gray-600
                    transition-colors
                    duration-300
                    group-hover:text-black
                  "
                >
                  {service.number}
                </span>
              </div>


              {/* Title */}

              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  lg:text-3xl
                "
              >
                {service.title}
              </h3>


              {/* Description */}

              <p
                className="
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                {service.description}
              </p>


              {/* Arrow */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  text-lg
                  transition-all
                  duration-300
                  group-hover:border-black
                  group-hover:bg-black
                  group-hover:text-white
                  md:justify-self-end
                "
              >
                →
              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </Section>
  );
};

export default Services;