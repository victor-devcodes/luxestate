import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";


import PropertySearch from "./PropertySearch/PropertySearch";
import PropertyCard from "./PropertyCard/PropertyCard";

import { properties } from "../../data/properties";

const Properties = () => {
  const [filteredProperties, setFilteredProperties] =
    useState(properties);

  return (
    <Section id="properties">

      <Container>

        {/* Section Header */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14 max-w-3xl"
        >
          <p className="
            mb-4
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-gray-500
          ">
            Exceptional Properties
          </p>

          <h2 className="
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            sm:text-5xl
            lg:text-6xl
          ">
            Find Your Perfect Home
          </h2>

          <p className="
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-gray-600
          ">
            Discover a curated collection of exceptional residences
            designed for refined living, remarkable comfort, and
            timeless value.
          </p>
        </motion.div>


        {/* Property Search */}

        <PropertySearch
          onSearch={setFilteredProperties}
        />


        {/* Results Header */}

        <div className="
          mb-8
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Featured Properties
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Handpicked residences for exceptional living
            </p>
          </div>

          <p className="
            text-sm
            font-medium
            text-gray-500
          ">
            {filteredProperties.length} properties found
          </p>
        </div>


        {/* No Results */}

        {filteredProperties.length === 0 ? (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="py-16 text-center"
          >

            <h3 className="text-2xl font-bold">
              No properties found
            </h3>

            <p className="mt-2 text-gray-500">
              Try adjusting your search criteria.
            </p>

          </motion.div>

        ) : (

          /* Property Grid */

          <AnimatePresence mode="popLayout">

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {filteredProperties.map((property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                />

              ))}

            </div>

          </AnimatePresence>

        )}

      </Container>

    </Section>
  );
};

export default Properties;