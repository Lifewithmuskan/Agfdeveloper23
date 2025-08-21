import React from 'react';
import { motion } from 'framer-motion';
import { Diagonal } from "../components/Diagonal";

const Career = () => {
  return (
    <div className="pt-16">

      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
              JOIN <span className="text-gold-400">AGF Developer</span>
            </h1>
            <p className="text-l text-primary-100 max-w-3xl mx-auto">
              At AGF Group, we offer a wide spectrum of real estate solutions designed to meet the evolving needs of modern buyers and investors...
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZ7nFcj9eys06JSEEpBZuZzoIVqV_gncDEdZ0gHik0jyzTWw/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Career;
