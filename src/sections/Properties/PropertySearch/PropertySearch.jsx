import { useState } from "react";
import { motion } from "framer-motion";

import Button from "../../../components/ui/Button";

import { properties } from "../../../data/properties";

const PropertySearch = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const results = properties.filter((property) => {
      const matchesLocation =
        location === "" ||
        property.location
          .toLowerCase()
          .includes(location.toLowerCase());

      const matchesBedrooms =
        bedrooms === "" ||
        property.bedrooms >= Number(bedrooms);

      const matchesPropertyType =
        propertyType === "" ||
        property.propertyType === propertyType;

      return (
        matchesLocation &&
        matchesBedrooms &&
        matchesPropertyType
      );
    });

    onSearch(results);
  };

  const handleReset = () => {
    setLocation("");
    setBedrooms("");
    setPropertyType("");

    onSearch(properties);
  };

  return (
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
      className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-3">

        {/* Location */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Location
          </label>

          <input
            type="text"
            value={location}
            onChange={(event) =>
              setLocation(event.target.value)
            }
            placeholder="e.g. Beverly Hills"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              transition
              focus:border-black
            "
          />
        </div>


        {/* Property Type */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Property Type
          </label>

          <select
            value={propertyType}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              outline-none
              focus:border-black
            "
          >
            <option value="">Any Type</option>
            <option value="Villa">Villa</option>
            <option value="Mansion">Mansion</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>


        {/* Bedrooms */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Bedrooms
          </label>

          <select
            value={bedrooms}
            onChange={(event) =>
              setBedrooms(event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              outline-none
              focus:border-black
            "
          >
            <option value="">Any</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

      </div>


      {/* Buttons */}

      <div className="mt-6 flex justify-end gap-3">

        <Button
          variant="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button onClick={handleSearch}>
          Search Properties
        </Button>

      </div>
    </motion.div>
  );
};

export default PropertySearch;