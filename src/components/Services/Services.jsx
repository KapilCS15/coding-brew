import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Vienna Roast",
    subtitle: "The second darkest of our roasts, this blend has great body, low acidity, and is a favourite choice for coffee drinkers who enjoy a strong cup",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Summer Blend",
    subtitle: "This single estate Cold Brew option is a medium roast sourced from one of our oldest farm partners",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Dhak Blend",
    subtitle: "Named after one of our favourite spring blossoms, the Dhak blend is roasted dark to bring out deep flavours of dark chocolate and fruit jam.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.4, // Increase duration for smoother animation
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut", // Use an easing function
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, // delay between animations
    },
  },
};
const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2, // Added delay for the first element
          }}
          className="text-3xl font-bold text-lightGray"
        >
          <span className="text-primary"> Freshly</span> Roasted,<br />
          <span className="text-lg text-lightGray">for all your brewing needs!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6, // Added delay for the first element
          }}
          className="text-sm opacity-50"
        >
          For 11+ years, we’ve been sourcing India’s most-loved specialty coffee beans, and on our journey, we’ve raised the bar for what a cup of carefully grown coffee can be.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
