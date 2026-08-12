import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { FaArrowLeft, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaCheck, FaHeart,   FaShareAlt,   FaExpand,   FaTimes, } from "react-icons/fa";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import { properties } from "../../data/properties";
import PropertyCard from "../../sections/Properties/PropertyCard/PropertyCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const PropertyDetails = () => {
  const { id } = useParams();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
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

  const property = properties.find(
    (item) => item.id === Number(id)
  );
  const relatedProperties = properties
  .filter((item) => item.id !== property?.id)
  .slice(0, 3);

  if (!property) {
    return (
      <Section>
        <Container>
          <div className="py-20 text-center">

            <h1 className="text-4xl font-bold">
              Property Not Found
            </h1>

            <p className="mt-4 text-gray-500">
              The property you're looking for doesn't exist.
            </p>

            <Link
              to="/"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-black
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-gray-800
              "
            >
              <FaArrowLeft />
              Back Home
            </Link>

          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pt-10 lg:pt-16">

      <Container>

        {/* Back Button */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-8"
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-gray-600
              transition
              hover:text-black
            "
          >
            <FaArrowLeft />
            Back to Properties
          </Link>
        </motion.div>


        {/* Property Image */}

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
          className="
            relative
            overflow-hidden
            rounded-3xl
          "
        >

            <div className="relative">

            {/* Main Gallery */}

            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
                }}
                spaceBetween={10}
                onSlideChange={(swiper) => {
                    setActiveImage(swiper.activeIndex);
                }}
                className="property-main-gallery overflow-hidden rounded-3xl"
            >

                {property.gallery.map((image, index) => (
                <SwiperSlide key={image}>

                   <div className="relative ">
                        <button
                            type="button"
                            onClick={() => setIsFullscreen(true)}
                            className="
                            group
                            block
                            w-full
                            cursor-zoom-in
                            "
                            aria-label="Open image fullscreen"
                            >
                            <img
                                src={image}
                                alt={`${property.title} view ${index + 1}`}
                                className="
                                h-105
                                w-full
                                object-cover
                                sm:h-130
                                lg:h-162
                                "
                            />
                        </button>
                        <div className=" pointer-events-none absolute inset-0 bg-linear-to-t from-black/30  via-transparent  to-transparent " />  

                    </div>

                </SwiperSlide>
                ))}

            </Swiper>


            {/* Property Badge */}

            <div
                className="
                absolute
                left-6
                top-6
                z-10
                rounded-full
                bg-black
                text-white
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-wider
                shadow-lg
                "
            >
                {property.badge}
            </div>

            <div
                className="
                    absolute
                    bottom-6
                    right-6
                    z-10
                    rounded-full
                    bg-black/70
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                "
                >
                {activeImage + 1} / {property.gallery.length}
            </div>
            {/* Thumbnail Gallery */}

            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Thumbs]}
                watchSlidesProgress
                freeMode
                spaceBetween={12}
                slidesPerView={3}
                breakpoints={{
                640: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                }}
                className="mt-4 mb-6"
            >

                {property.gallery.map((image, index) => (
                <SwiperSlide key={`thumb-${image}`}>

                    <div
                        className={`
                        cursor-pointer
                        overflow-hidden
                        rounded-xl
                        border-2
                        transition-all
                        duration-300
                        ${
                        index === activeImage
                            ? "border-black opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }
                    `}
                    >

                        <img
                            src={image}
                            alt={`${property.title} thumbnail ${index + 1}`}
                            className="
                            h-20
                            w-full
                            object-cover
                            transition
                            duration-300
                            hover:scale-105
                            sm:h-24
                            "
                        />
                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-6
                                left-10
                                z-10
                                flex
                                items-center
                                gap-2
                                rounded-full
                                px-4
                                py-2
                                text-white
                                
                            "
                            >
                            <FaExpand className="text-lg" />
                        </div>
                    
                    </div>

                </SwiperSlide>
                ))}

            </Swiper>

            </div>

          {/* Image Overlay */}

          <div className="
            absolute
            inset-0
            bg-white
            from-black/50
            via-transparent
            to-transparent
          " />


        </motion.div>


        {/* Main Content */}

        <div className="
          mt-10
          grid
          gap-12
          lg:grid-cols-[1fr_380px]
        ">

          {/* Left Column */}

          <div>

            {/* Property Header */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >

              <div className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-gray-500
              ">
                <FaMapMarkerAlt />

                <span>
                  {property.location}
                </span>
              </div>


              <h1 className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              ">
                {property.title}
              </h1>


              <p className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
              ">
                {property.price}
              </p>

            </motion.div>


            {/* Property Stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-10
                grid
                grid-cols-3
                gap-4
                border-y
                border-gray-200
                py-6
              "
            >

              <div>
                <FaBed className="mb-3 text-gray-400" />

                <p className="text-xl font-semibold">
                  {property.bedrooms}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Bedrooms
                </p>
              </div>


              <div>
                <FaBath className="mb-3 text-gray-400" />

                <p className="text-xl font-semibold">
                  {property.bathrooms}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Bathrooms
                </p>
              </div>


              <div>
                <FaRulerCombined className="mb-3 text-gray-400" />

                <p className="text-xl font-semibold">
                  {property.area}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Living Area
                </p>
              </div>

            </motion.div>


            {/* Description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
              }}
              className="mt-12"
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-gray-500
              ">
                About This Property
              </p>

              <h2 className="
                mt-3
                text-3xl
                font-bold
              ">
                Designed for exceptional living.
              </h2>

              <p className="
                mt-5
                max-w-3xl
                text-lg
                leading-relaxed
                text-gray-600
              ">
                {property.description}
              </p>

            </motion.div>


            {/* Features */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
              }}
              className="mt-12"
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-gray-500
              ">
                Property Features
              </p>

                <div className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
                ">
                {property.features.map((feature) => (
                    <div
                    key={feature}
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-gray-200
                        p-4
                    "
                    >
                    <div className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-100
                    ">
                        <FaCheck className="text-xs" />
                    </div>

                    <span className="text-sm text-gray-700">
                        {feature}
                    </span>
                    </div>
                ))}
                </div>

            </motion.div>

          </div>


          {/* Inquiry Card */}

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
            ease: "easeOut",
        }}
        className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-xl
            lg:p-8
        "
        >
        {!isSubmitted ? (
            <>
            {/* Form Header */}

            <div>
                <p
                className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gray-400
                "
                >
                Private Viewing
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Interested in this property?
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Leave your details and our property advisor will
                contact you to arrange a private viewing.
                </p>
            </div>


            {/* Property Reference */}

            <div
                className="
                mt-6
                rounded-2xl
                bg-gray-50
                p-4
                "
            >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                Property
                </p>

                <p className="mt-1 font-semibold">
                {property.title}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                {property.location}
                </p>
            </div>


            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
            >

                {/* Name */}

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


                {/* Phone */}

                <div>
                <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                >
                    Phone Number
                    <span className="ml-2 text-xs font-normal text-gray-400">
                    Optional
                    </span>
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
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={`I'm interested in ${property.title}...`}
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

                <button
                type="submit"
                className="
                    flex
                    w-full
                    items-center
                    justify-center
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
                Request Private Viewing
                </button>

            </form>


            {/* Privacy */}

            <p className="mt-5 text-center text-xs leading-relaxed text-gray-400">
                Your information is kept private and will only be
                used to respond to your property inquiry.
            </p>
            </>
        ) : (

            /* Success State */

            <div
            className="
                flex
                min-h-125
                flex-col
                items-center
                justify-center
                text-center
            "
            >

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                }}
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
            </motion.div>


            <h2 className="mt-6 text-2xl font-bold">
                Request Received
            </h2>


            <p className="
                mt-3
                max-w-sm
                text-sm
                leading-relaxed
                text-gray-500
            ">
                Thank you, {formData.name}. Our property advisor
                will contact you shortly regarding {property.title}.
            </p>


            <button
                type="button"
                onClick={() => {
                setIsSubmitted(false);

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
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
                Send another inquiry
            </button>

            </div>
        )}
        </motion.div>

        </div>
        {isFullscreen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center
                bg-black/95
                p-4
                backdrop-blur-md
                "
            >

                {/* Close */}

                <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="
                    absolute
                    right-6
                    top-6
                    z-20
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-xl
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white
                    hover:text-black
                "
                aria-label="Close fullscreen gallery"
                >
                <FaTimes />
                </button>


                {/* Fullscreen Image */}

                <img
                src={property.gallery[activeImage]}
                alt={property.title}
                className="
                    max-h-[90vh]
                    max-w-[95vw]
                    rounded-xl
                    object-contain
                "
                />


                {/* Counter */}

                <div
                className="
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-white/10
                    px-4
                    py-2
                    text-sm
                    text-white
                    backdrop-blur-md
                "
                >
                {activeImage + 1} / {property.gallery.length}
                </div>

            </motion.div>
        )}

        {/* Related Properties */}

        <section className="mt-24 border-t border-gray-200 pt-20">

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
            className="mb-10"
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
            Continue Exploring
            </p>

            <h2
            className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                sm:text-4xl
            "
            >
            You May Also Like
            </h2>

        </motion.div>


        <div
            className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            "
        >

            {relatedProperties.map((relatedProperty, index) => (

            <motion.div
                key={relatedProperty.id}
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
                amount: 0.1,
                }}
                transition={{
                duration: 0.6,
                delay: index * 0.1,
                }}
            >

                <PropertyCard
                property={relatedProperty}
                />

            </motion.div>

            ))}

        </div>

        </section>
      </Container>

    </Section>
  );
};

export default PropertyDetails;