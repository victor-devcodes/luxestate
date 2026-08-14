import Button from "../components/ui/Button";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import { properties } from "../data/properties";

const BookInspection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <main>

      {/* =========================
          PAGE HERO
      ========================= */}

      <Section className="pt-12 lg:pt-20">

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
              ease: "easeOut",
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
              Private Property Viewing
            </p>

            <h1 className="
              mt-4
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-6xl
              lg:text-7xl
            ">
              Book a private
              <span className="block text-gray-400">
                property inspection.
              </span>
            </h1>

            <p className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-gray-600
            ">
              Experience your next home in person. Choose a property,
              select your preferred date and time, and our property
              advisor will arrange a private viewing.
            </p>

          </motion.div>

        </Container>

      </Section>


      {/* =========================
          BOOKING AREA
      ========================= */}

      <Section className="pt-0">

        <Container>

          <div className="
            grid
            gap-10
            lg:grid-cols-[1fr_400px]
            lg:items-start
          ">

            {/* =====================
                FORM
            ===================== */}

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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                sm:p-8
                lg:p-10
              "
            >

              {!isSubmitted ? (

                <>

                  {/* Form Header */}

                  <div>

                    <p className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-gray-400
                    ">
                      Inspection Request
                    </p>

                    <h2 className="
                      mt-3
                      text-3xl
                      font-bold
                      tracking-tight
                    ">
                      Tell us how we can help.
                    </h2>

                    <p className="
                      mt-3
                      max-w-xl
                      leading-relaxed
                      text-gray-500
                    ">
                      Complete the form below and one of our property
                      advisors will get back to you to confirm your
                      inspection.
                    </p>

                  </div>


                  {/* Form */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >

                    {/* Name + Email */}

                    <div className="
                      grid
                      gap-5
                      sm:grid-cols-2
                    ">

                      <div>

                        <label
                          htmlFor="name"
                          className="
                            mb-2
                            block
                            text-sm
                            font-medium
                          "
                        >
                          Full Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-3
                            outline-none
                            transition
                            placeholder:text-gray-400
                            focus:border-black
                            focus:ring-1
                            focus:ring-black
                          "
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="email"
                          className="
                            mb-2
                            block
                            text-sm
                            font-medium
                          "
                        >
                          Email Address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            py-3
                            outline-none
                            transition
                            placeholder:text-gray-400
                            focus:border-black
                            focus:ring-1
                            focus:ring-black
                          "
                        />

                      </div>

                    </div>


                    {/* Phone */}

                    <div>

                      <label
                        htmlFor="phone"
                        className="
                          mb-2
                          block
                          text-sm
                          font-medium
                        "
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-gray-300
                          px-4
                          py-3
                          outline-none
                          transition
                          placeholder:text-gray-400
                          focus:border-black
                          focus:ring-1
                          focus:ring-black
                        "
                      />

                    </div>


                    {/* Property */}

                    <div>

                      <label
                        htmlFor="property"
                        className="
                          mb-2
                          block
                          text-sm
                          font-medium
                        "
                      >
                        Property
                      </label>

                      <select
                        id="property"
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-gray-300
                          bg-white
                          px-4
                          py-3
                          outline-none
                          transition
                          focus:border-black
                          focus:ring-1
                          focus:ring-black
                        "
                      >

                        <option value="">
                          Select a property
                        </option>

                        {properties.map((property) => (

                          <option
                            key={property.id}
                            value={property.title}
                          >
                            {property.title} — {property.location}
                          </option>

                        ))}

                      </select>

                    </div>


                    {/* Date + Time */}

                    <div className="
                      grid
                      gap-5
                      sm:grid-cols-2
                    ">

                      <div>

                        <label
                          htmlFor="date"
                          className="
                            mb-2
                            block
                            text-sm
                            font-medium
                          "
                        >
                          Preferred Date
                        </label>

                        <div className="relative">

                          <FaCalendarAlt className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                          " />

                          <input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="
                              w-full
                              rounded-xl
                              border
                              border-gray-300
                              bg-white
                              px-11
                              py-3
                              outline-none
                              transition
                              focus:border-black
                              focus:ring-1
                              focus:ring-black
                            "
                          />

                        </div>

                      </div>


                      <div>

                        <label
                          htmlFor="time"
                          className="
                            mb-2
                            block
                            text-sm
                            font-medium
                          "
                        >
                          Preferred Time
                        </label>

                        <div className="relative">

                          <FaClock className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                          " />

                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="
                              w-full
                              rounded-xl
                              border
                              border-gray-300
                              bg-white
                              px-11
                              py-3
                              outline-none
                              transition
                              focus:border-black
                              focus:ring-1
                              focus:ring-black
                            "
                          >

                            <option value="">
                              Select a time
                            </option>

                            <option value="09:00">
                              9:00 AM
                            </option>

                            <option value="10:00">
                              10:00 AM
                            </option>

                            <option value="11:00">
                              11:00 AM
                            </option>

                            <option value="13:00">
                              1:00 PM
                            </option>

                            <option value="14:00">
                              2:00 PM
                            </option>

                            <option value="15:00">
                              3:00 PM
                            </option>

                            <option value="16:00">
                              4:00 PM
                            </option>

                          </select>

                        </div>

                      </div>

                    </div>


                    {/* Message */}

                    <div>

                      <label
                        htmlFor="message"
                        className="
                          mb-2
                          block
                          text-sm
                          font-medium
                        "
                      >
                        Additional Message
                        <span className="
                          ml-2
                          text-xs
                          font-normal
                          text-gray-400
                        ">
                          Optional
                        </span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us anything you'd like us to know..."
                        className="
                          w-full
                          resize-none
                          rounded-xl
                          border
                          border-gray-300
                          px-4
                          py-3
                          outline-none
                          transition
                          placeholder:text-gray-400
                          focus:border-black
                          focus:ring-1
                          focus:ring-black
                        "
                      />

                    </div>


                    {/* Submit */}

                    <button
                      type="submit"
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-black
                        px-6
                        py-4
                        font-semibold
                        text-white
                        transition
                        duration-300
                        hover:bg-gray-800
                        active:scale-[0.98]
                      "
                    >
                      Request Private Inspection
                      <FaArrowRight className="text-sm" />
                    </button>

                    <p className="
                      text-center
                      text-xs
                      leading-relaxed
                      text-gray-400
                    ">
                      Your information is kept private and will only
                      be used to arrange your property inspection.
                    </p>

                  </form>

                </>

              ) : (

                /* =====================
                   SUCCESS STATE
                ===================== */

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    flex
                    min-h-150
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-2xl
                      text-white
                    "
                  >
                    <FaCheck />
                  </motion.div>

                  <h2 className="
                    mt-7
                    text-3xl
                    font-bold
                  ">
                    Inspection Request Received
                  </h2>

                  <p className="
                    mt-4
                    max-w-md
                    leading-relaxed
                    text-gray-500
                  ">
                    Thank you, {formData.name}. Our property advisor
                    will contact you shortly to confirm your inspection.
                  </p>

                  <div className="
                    mt-8
                    rounded-2xl
                    bg-gray-50
                    px-6
                    py-5
                    text-left
                  ">

                    <p className="text-sm text-gray-500">
                      Requested property
                    </p>

                    <p className="mt-1 font-semibold">
                      {formData.property}
                    </p>

                    <p className="
                      mt-2
                      text-sm
                      text-gray-500
                    ">
                      {formData.date} · {formData.time}
                    </p>

                  </div>

                  <Link
                    to="/properties"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      underline
                      underline-offset-4
                    "
                  >
                    Continue exploring properties
                    <FaArrowRight className="text-xs" />
                  </Link>

                </motion.div>

              )}

            </motion.div>


            {/* =====================
                SIDEBAR
            ===================== */}

            <motion.aside
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
                delay: 0.1,
              }}
              className="space-y-6"
            >

              {/* Why book */}

              <div className="
                rounded-3xl
                bg-black
                p-7
                text-white
              ">

                <p className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                ">
                  The Experience
                </p>

                <h2 className="
                  mt-4
                  text-2xl
                  font-bold
                ">
                  Your private viewing,
                  handled personally.
                </h2>

                <div className="mt-7 space-y-5">

                  {[
                    "Private property viewing",
                    "Personal property advisor",
                    "Flexible inspection scheduling",
                    "Professional guidance",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                      ">
                        <FaCheck className="text-xs" />
                      </div>

                      <span className="text-sm text-gray-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Contact */}

              <div className="
                rounded-3xl
                border
                border-gray-200
                bg-gray-50
                p-7
              ">

                <p className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                ">
                  Need assistance?
                </p>

                <h3 className="
                  mt-3
                  text-xl
                  font-bold
                ">
                  Speak with our team
                </h3>

                <p className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-gray-500
                ">
                  Prefer to speak with someone directly? Our property
                  advisors are available to assist you.
                </p>

                <div className="mt-6 space-y-4">

                  <a
                    href="tel:+13105550188"
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      transition
                      hover:text-gray-500
                    "
                  >
                    <FaPhone className="text-gray-400" />
                    +1 (310) 555-0188
                  </a>

                  <a
                    href="mailto:hello@luxuryestates.com"
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      transition
                      hover:text-gray-500
                    "
                  >
                    <FaEnvelope className="text-gray-400" />
                    hello@luxuryestates.com
                  </a>

                </div>

              </div>


              {/* Location */}

              <div className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-7
              ">

                <div className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                ">
                  <FaMapMarkerAlt />
                </div>

                <h3 className="
                  mt-5
                  text-xl
                  font-bold
                ">
                  Visit our office
                </h3>

                <p className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                ">
                  Beverly Hills, California
                  <br />
                  By appointment only
                </p>

              </div>

            </motion.aside>

          </div>

        </Container>

      </Section>

    </main>
  );
};

export default BookInspection;