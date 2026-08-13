import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const agents = [
  {
    id: 1,
    name: "Alexander Morgan",
    role: "Senior Property Advisor",
  },
  {
    id: 2,
    name: "Sophia Bennett",
    role: "Luxury Property Specialist",
  },
  {
    id: 3,
    name: "Daniel Carter",
    role: "Investment Advisor",
  },
];

const Agents = () => {
  return (
    <main>

      <Section>

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
              duration: 0.7,
            }}
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
              Our Team
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
              Meet Our Advisors
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-gray-500
              "
            >
              Experienced property professionals
              dedicated to helping you make confident
              real-estate decisions.
            </p>

          </motion.div>


          <div
            className="
              mt-16
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {agents.map((agent, index) => (

              <motion.div
                key={agent.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
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
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-xl
                    font-bold
                  "
                >
                  {agent.name.charAt(0)}
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  {agent.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {agent.role}
                </p>

                <button
                  className="
                    mt-6
                    text-sm
                    font-semibold
                    underline
                    underline-offset-4
                  "
                >
                  Contact Advisor
                </button>

              </motion.div>

            ))}

          </div>

        </Container>

      </Section>

    </main>
  );
};

export default Agents;