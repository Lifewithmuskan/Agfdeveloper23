import React from 'react';
import { motion } from 'framer-motion';
import { Diagonal } from "../components/Diagonal";

const BusinessSupport = () => {
  return (
    <div className="pt-16">
      {/* Top Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
              BUSINESS <span className="text-gold-400">ENQUIRY</span>
            </h1>

            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              We appreciate your interest in <strong>AGF Developer</strong>.  
              Please submit your business query here, and our team will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Query</h2>
            <p className="text-gray-600">
              Fill out the form below and we’ll connect with you shortly.
            </p>
          </div>

          <div className="w-full h-[800px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfVCS2x1hxLtwnHWNrOQlNl9K4cOS2d3lTPZqobvaGlCdnTJQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Business Enquiry Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSupport;
