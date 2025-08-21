import React from 'react';
import { motion } from 'framer-motion';
import { Diagonal } from "../components/Diagonal";

const Comingsoon = () => {
  return (
    <div className="pt-16">

      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20 pt-50">
        <div className="max-w-7xl pt-30 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl pt-10 md:text-6xl font-bold mb-6">
              COMING <span className="text-gold-400">SOON...............</span>
            </h1>
            <p className="text-l text-primary-100 max-w-3xl mx-auto">
            
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
          {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZ7nFcj9eys06JSEEpBZuZzoIVqV_gncDEdZ0gHik0jyzTWw/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe> */}
        </div>
      </section>
    </div>
  );
};

export default Comingsoon;
