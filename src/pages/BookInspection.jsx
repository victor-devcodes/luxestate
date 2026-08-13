import { motion } from "framer-motion";
import { useState } from "react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

const BookInspection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Inspection request:", formData);
  };

  return (
    <main>

      <Section>

        <Container>

          <div
            className="
              grid
              gap-16
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-start
            "
          >

            {/* =========================
                INTRODUCTION
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:sticky lg:top-28"
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
                Private Viewing
              </p>

              <h1
                className="
                  mt-4
                  text-5xl
                  font-bold
                  tracking-tight 
                "
              >
                Book a Property
                Inspection
              </h1>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-lg
                  leading-8
                  text-gray-500
                "
              >
                Tell us which property you'd like to
                explore and our property advisor will
                arrange a private viewing at a convenient
                time.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <p className="font-semibold">
                    Private & Personal
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Every viewing is arranged around
                    your schedule.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    Expert Guidance
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Our advisors will answer your
                    questions throughout the process.
                  </p>
                </div>

              </div>

            </motion.div>


            {/* =========================
                FORM
            ========================= */}

            <motion.form
              onSubmit={handleSubmit}
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
                delay: 0.1,
              }}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-xl
                sm:p-8
                lg:p-10
              "
            >

              <div className="grid gap-6 sm:grid-cols-2">

                {/* Name */}

                <div className="sm:col-span-2">

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
                      py-3.5
                      outline-none
                      transition
                      focus:border-black
                      focus:ring-1
                      focus:ring-black
                    "
                  />

                </div>


                {/* Email */}

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
                      py-3.5
                      outline-none
                      transition
                      focus:border-black
                      focus:ring-1
                      focus:ring-black
                    "
                  />

                </div>


                {/* Phone */}

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
                    placeholder="+1 234 567 890"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3.5
                      outline-none
                      transition
                      focus:border-black
                      focus:ring-1
                      focus:ring-black
                    "
                  />

                </div>


                {/* Property */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="property"
                    className="mb-2 block text-sm font-medium"
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
                      py-3.5
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

                    <option value="Modern Villa">
                      Modern Villa
                    </option>

                    <option value="Oceanfront Mansion">
                      Oceanfront Mansion
                    </option>

                    <option value="Luxury Penthouse">
                      Luxury Penthouse
                    </option>

                  </select>

                </div>


                {/* Date */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-medium"
                  >
                    Preferred Inspection Date
                  </label>

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
                      px-4
                      py-3.5
                      outline-none
                      transition
                      focus:border-black
                      focus:ring-1
                      focus:ring-black
                    "
                  />

                </div>


                {/* Message */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Additional Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us anything we'd need to know..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3.5
                      outline-none
                      transition
                      focus:border-black
                      focus:ring-1
                      focus:ring-black
                    "
                  />

                </div>

              </div>


              <div className="mt-8">

                <Button
                  type="submit"
                  className="w-full"
                >
                  Request Private Inspection
                </Button>

              </div>

              <p
                className="
                  mt-4
                  text-center
                  text-xs
                  leading-5
                  text-gray-400
                "
              >
                By submitting this form, you agree to
                be contacted by a Luxestate property
                advisor regarding your request.
              </p>

            </motion.form>

          </div>

        </Container>

      </Section>

    </main>
  );
};

export default BookInspection;