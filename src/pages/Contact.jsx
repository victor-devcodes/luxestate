import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const Contact = () => {
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
            className="max-w-3xl"
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
              Contact Luxestate
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
              Let's talk about
              your next move.
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-500
              "
            >
              Whether you're buying, selling, or simply
              exploring your options, our advisors are
              here to help.
            </p>

          </motion.div>


          <div
            className="
              mt-16
              grid
              gap-8
              md:grid-cols-3
            "
          >

            <div className="rounded-3xl border border-gray-200 p-8">
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="mt-3 font-semibold">
                hello@luxestate.com
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="mt-3 font-semibold">
                +1 (234) 567-890
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8">
              <p className="text-sm text-gray-500">
                Office
              </p>

              <p className="mt-3 font-semibold">
                Beverly Hills, California
              </p>
            </div>

          </div>


          <div className="mt-12">

            <Link
              to="/book-inspection"
              className="
                button
                inline-flex
                rounded-xl
                bg-black
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
              "
            >
              Book an Inspection
            </Link>

          </div>

        </Container>

      </Section>

    </main>
  );
};

export default Contact;