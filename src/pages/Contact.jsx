import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheck,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      text: "Beverly Hills, California",
    },
    {
      icon: FaPhone,
      title: "Call Our Team",
      text: "+1 (310) 555-0188",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      text: "hello@luxuryestates.com",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      text: "Mon – Fri · 9:00 AM – 6:00 PM",
    },
  ];

  return (
    <main>
      {/* ========================================
          PAGE HERO
      ======================================== */}

      <section className="relative overflow-hidden bg-gray-50">
        <Container>
          <div className="py-24 sm:py-28 lg:py-36">

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
              <p
                className="
                  mb-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-gray-500
                "
              >
                Contact Us
              </p>

              <h1
                className="
                  text-5xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Let's Start a
                <span className="block text-gray-400">
                  Conversation.
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-gray-600
                  sm:text-xl
                "
              >
                Whether you're searching for your next residence,
                considering an investment, or simply want to learn
                more about our services, our team is here to help.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>


      {/* ========================================
          CONTACT INFORMATION
      ======================================== */}

      <Section>
        <Container>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {contactInfo.map((item, index) => {
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
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-black
                      text-white
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </Container>
      </Section>


      {/* ========================================
          CONTACT FORM + OFFICE
      ======================================== */}

      <section className="bg-gray-50">
        <Container>

          <div className="grid gap-12 py-20 lg:grid-cols-[1fr_420px] lg:py-28">

            {/* FORM */}

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
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                sm:p-8
                lg:p-10
              "
            >
              {!isSubmitted ? (
                <>
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-gray-500
                      "
                    >
                      Send an Inquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight">
                      How can we help?
                    </h2>

                    <p className="mt-4 max-w-xl text-gray-500">
                      Tell us a little about what you're looking for
                      and one of our advisors will get back to you.
                    </p>
                  </div>


                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >

                    {/* Name + Email */}

                    <div className="grid gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium"
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
                          className="mb-2 block text-sm font-medium"
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


                    {/* Phone + Subject */}

                    <div className="grid gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium"
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
                          htmlFor="subject"
                          className="mb-2 block text-sm font-medium"
                        >
                          Inquiry Type
                        </label>

                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
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
                            Select an option
                          </option>

                          <option value="Buying a property">
                            Buying a Property
                          </option>

                          <option value="Selling a property">
                            Selling a Property
                          </option>

                          <option value="Property investment">
                            Property Investment
                          </option>

                          <option value="General inquiry">
                            General Inquiry
                          </option>
                        </select>
                      </div>

                    </div>


                    {/* Message */}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        required
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

                    <Button type="submit">
                      Send Message
                    </Button>

                  </form>
                </>
              ) : (

                /* SUCCESS STATE */

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
                    min-h-125
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                    "
                  >
                    <FaCheck />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold">
                    Message Received
                  </h2>

                  <p className="mt-4 max-w-md leading-relaxed text-gray-500">
                    Thank you, {formData.name}. One of our property
                    advisors will be in touch with you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);

                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="
                      mt-8
                      text-sm
                      font-semibold
                      underline
                      underline-offset-4
                    "
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.div>


            {/* OFFICE / LOCATION */}

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
              className="flex flex-col"
            >

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                "
              >
                Our Office
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Visit us in Beverly Hills.
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                Our team is available to discuss properties,
                investments, and tailored real-estate opportunities
                in person.
              </p>


              {/* Map Placeholder */}

              <div
                className="
                  relative
                  mt-8
                  min-h-90
                  flex-1
                  overflow-hidden
                  rounded-3xl
                  bg-gray-900
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    opacity-30
                    bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
                    bg-size-[40px_40px]
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      shadow-2xl
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div
                    className="
                      mt-4
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      text-center
                      shadow-xl
                    "
                  >
                    <p className="font-semibold">
                      Luxury Estates
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Beverly Hills, California
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </Container>
      </section>


      {/* ========================================
          FINAL CTA
      ======================================== */}

      <Section>
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
              bg-black
              px-6
              py-16
              text-center
              text-white
              sm:px-10
              lg:px-20
            "
          >
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              Your Next Move
            </p>

            <h2
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-3xl
                font-bold
                tracking-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Looking for something extraordinary?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                leading-relaxed
                text-gray-400
              "
            >
              Explore our collection of exceptional properties or
              speak directly with one of our advisors.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Button className="border">
                <Link to="/properties">
                View Properties
                </Link>
              </Button>

              <Button variant="secondary">
                <Link to="/book-inspection">
                Book an Inspection
                </Link>
              </Button>

            </div>

          </motion.div>

        </Container>
      </Section>
    </main>
  );
};

export default Contact;