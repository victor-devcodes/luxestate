import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import { properties } from "../../data/properties";
import Card from "../../components/ui/Card/Card";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaBed, FaBath, FaRulerCombined, } from "react-icons/fa";

const FeaturedProperties = () => {
  return (
    <Section>
      <Container>

        <h2 className="mb-12 text-center text-4xl font-bold">
          Featured Properties
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (

                <Card key={property.id}>
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
                        hover:scale-110
                        "
                    />
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
                            text-sm
                            font-semibold
                            shadow-lg
                        "
                        >
                        {property.badge}
                    </div>
                </div>

                <div className="p-6">

                    <h3 className="text-2xl font-bold">

                    {property.title}

                    </h3>

                    <p className="flex items-center gap-2 mt-2 text-gray-500">
                    <HiOutlineMapPin />
                    {property.location}

                    </p>

                    <p className="mt-4 text-3xl font-bold">

                    {property.price}

                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                    <FaBed /> {property.bedrooms}  <FaBath/> {property.bathrooms}  <FaRulerCombined/>{property.area}
                    </div>
                </div>

                </Card>

            ))}

        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProperties;