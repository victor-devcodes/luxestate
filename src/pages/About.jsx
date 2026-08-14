import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Agents from "./Agents";
import CTA from "../sections/CTA/CTA";

const AboutPage = () => {
  return (
    <main>

      <Section className="bg-black/5">

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


          <div
            className="
              mt-20
              grid
              gap-12
              lg:grid-cols-2
            "
          >

            <div>
              <h2 className="text-2xl font-bold">
                Our Philosophy
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We believe finding a home should be more
                than a transaction. Every property has a
                story, and every client deserves a service
                experience built around their individual
                goals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Our Approach
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                From private acquisitions to property
                marketing, we combine local expertise,
                market intelligence, and meticulous
                attention to detail.
              </p>
            </div>

          </div>

        </Container>
            
      </Section>
             <Agents />
             <CTA/>
    </main>
  );
};

export default AboutPage;