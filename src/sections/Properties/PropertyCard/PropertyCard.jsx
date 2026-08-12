import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Card from "../../../components/ui/Card";

import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined, FaArrowRight, } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Link
        to={`/properties/${property.id}`}
        className="
          group
          block
          h-full
          rounded-2xl
          outline-none
          focus-visible:ring-2
          focus-visible:ring-black
          focus-visible:ring-offset-4
        "
        aria-label={`View ${property.title}`}
      >
        <Card className="h-full">

          {/* Property Image */}

          <div className="relative overflow-hidden">

            <img
              src={property.image}
              alt={property.title}
              className="
                h-72
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-black/0
                transition-colors
                duration-500
                group-hover:bg-black/20
              "
            />

            {/* Badge */}

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-black
                text-white
                px-4
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

            {/* Arrow */}

            <div
              className="
                absolute
                bottom-4
                right-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                opacity-100
                shadow-xl
                transition-all
                duration-500
                md:translate-y-16
                md:opacity-0
                md:group-hover:translate-y-0
                md:group-hover:opacity-100
              "
            >
              <FaArrowRight />
            </div>

          </div>


          {/* Property Content */}

          <div className="p-6">

            {/* Location */}

            <p className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <FaMapMarkerAlt /> {property.location}
            </p>


            {/* Title */}

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                tracking-tight
              "
            >
              {property.title}
            </h3>


            {/* Price */}

            <p
              className="
                mt-4
                text-2xl
                font-bold
                tracking-tight
              "
            >
              {property.price}
            </p>


            {/* Property Details */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-gray-200
                pt-5
                text-sm
                text-gray-600
              "
            >

              <div className="flex items-center gap-2">
                <FaBed className="text-gray-400" />
                <span>{property.bedrooms} Beds</span>
              </div>

              <div className="flex items-center gap-2">
                <FaBath className="text-gray-400" />
                <span>{property.bathrooms} Baths</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRulerCombined className="text-gray-400" />
                <span>{property.area}</span>
              </div>

            </div>

          </div>

        </Card>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;