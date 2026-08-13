import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const testimonials = [
  {
    id: 1,
    quote:
      "Luxestate made the entire buying process feel effortless. Their attention to detail, discretion, and understanding of what we were looking for was exceptional.",
    name: "Alexander Morgan",
    role: "Private Client",
    location: "Beverly Hills, CA",
  },

  {
    id: 2,
    quote:
      "From our first consultation to receiving the keys, every detail was handled with professionalism. We found a home that exceeded our expectations.",
    name: "Sophia Bennett",
    role: "Property Investor",
    location: "Malibu, CA",
  },

  {
    id: 3,
    quote:
      "The level of service was completely different from what we had experienced with other agencies. Luxestate understood our requirements immediately.",
    name: "Daniel Laurent",
    role: "International Client",
    location: "New York, NY",
  },

  {
    id: 4,
    quote:
      "Their knowledge of the market and ability to identify opportunities before they reached the wider market gave us tremendous confidence.",
    name: "Victoria Hayes",
    role: "Real Estate Investor",
    location: "Miami, FL",
  },
];

const Testimonials = () => {
  return (
    <Section className="overflow-hidden bg-black text-white">

      <Container>

        {/* =========================
            HEADER
        ========================= */}

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
          className="mx-auto max-w-3xl text-center"
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
            Client Experiences
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-5xl
            "
          >
            Trusted by those
            <span className="block text-gray-500">
              who expect more.
            </span>
          </h2>

        </motion.div>


        {/* =========================
            TESTIMONIAL SLIDER
        ========================= */}

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
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative mt-16"
        >

          <Swiper
            modules={[
              Autoplay,
              Pagination,
              Navigation,
            ]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-swiper"
          >

            {testimonials.map((testimonial) => (

              <SwiperSlide key={testimonial.id}>

                <article
                  className="
                    flex
                    min-h-100
                    flex-col
                    justify-between
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/4
                    p-8
                    transition
                    duration-500
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >

                  {/* Quote */}

                  <div>

                    <div
                      className="
                        mb-8
                        text-5xl
                        leading-none
                        text-gray-500
                      "
                    >
                      “
                    </div>

                    <blockquote
                      className="
                        text-xl
                        font-medium
                        leading-8
                        text-gray-200
                      "
                    >
                      {testimonial.quote}
                    </blockquote>

                  </div>


                  {/* Client */}

                  <div
                    className="
                      mt-10
                      border-t
                      border-white/10
                      pt-6
                    "
                  >

                    <p className="font-semibold">
                      {testimonial.name}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-x-3 text-sm text-gray-500">

                      <span>
                        {testimonial.role}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {testimonial.location}
                      </span>

                    </div>

                  </div>

                </article>

              </SwiperSlide>

            ))}

          </Swiper>


          {/* =========================
              NAVIGATION
          ========================= */}

          <div className="mt-10 flex items-center justify-center gap-3">

            <button
              type="button"
              className="
                testimonial-prev
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-xl
                transition
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
              "
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <button
              type="button"
              className="
                testimonial-next
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-xl
                transition
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
              "
              aria-label="Next testimonial"
            >
              →
            </button>

          </div>

        </motion.div>

      </Container>

    </Section>
  );
};

export default Testimonials;