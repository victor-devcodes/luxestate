import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMapMarkedAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";

import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" bg-black text-white"
    >

      <Container>

        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div
          className="
            grid
            gap-12
            py-20
            md:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]
          "
        >

          {/* =========================
              BRAND
          ========================= */}

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
            }}
          >

            <a
              href="#"
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              LUXESTATE
            </a>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-gray-400
              "
            >
              Exceptional properties.
              Exceptional service.
              A higher standard of living.
            </p>

            {/* Social Links */}

            <div className="mt-8 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  transition
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  transition
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-sm
                  text-gray-600
                  transition
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

          </motion.div>


          {/* =========================
              NAVIGATION
          ========================= */}

          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Explore
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="#properties"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
                Properties
              </a>

              <a
                href="#about"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
                About Us
              </a>

              <a
                href="#services"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
                Services
              </a>

              <a
                href="#testimonials"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
                Testimonials
              </a>

            </nav>

          </div>


          {/* =========================
              SERVICES
          ========================= */}

          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Services
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="#services"
                className="text-sm text-gray-500 transition hover:text-black"
              >
                Property Sales
              </a>

              <a
                href="#services"
                className="text-sm text-gray-500 transition hover:text-black"
              >
                Private Acquisitions
              </a>

              <a
                href="#services"
                className="text-sm text-gray-500 transition hover:text-black"
              >
                Property Marketing
              </a>

              <a
                href="#services"
                className="text-sm text-gray-500 transition hover:text-black"
              >
                Investment Advisory
              </a>

            </nav>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Get In Touch
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="mailto:hello@luxestate.com"
                className="
                  flex
                  gap-2
                  items-center
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
               <FaEnvelope /> hello@luxestate.com
              </a>

              <a
                href="tel:+1234567890"
                className="
                  flex
                  gap-2
                  items-center
                  text-sm
                  text-gray-500
                  transition
                  hover:text-black
                "
              >
               <FaPhone /> +1 (234) 567-890
              </a>

              <p
                className="flex
                  text-sm
                  leading-7
                  text-gray-400
                  gap-2
                  items-baseline 
                ">
               <HiOutlineMapPin /> Beverly Hills
                <br />
                California, USA
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM BAR
        ========================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-gray-200
            py-6
            text-sm
            text-gray-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Luxestate.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-black"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-black"
            >
              Terms
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;