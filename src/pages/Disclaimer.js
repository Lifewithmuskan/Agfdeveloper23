import React from 'react';
import { motion } from 'framer-motion';
import { Diagonal } from "../components/Diagonal";

const Disclaimer = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              At AGF Group, we offer a wide spectrum of real estate solutions
              designed to meet the evolving needs of modern buyers and investors...
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
          >
            <p className="mb-6 text-justify">
              This disclaimer will be applicable to the website. By using or accessing the website(s) you agree with the disclaimer without any qualification or limitation. The company, i.e. AGF Group India, reserves the right to add, alter or delete material from the website at any time and may, at any time, revise these terms without notifying you...
            </p>
            <p className="mb-6 text-justify">
              The website(s) and all its content are provided with all faults on an "as is" and "as available" basis. No information given under this website creates a warranty or expand the scope of any warranty that cannot be disclaimed under applicable law. Your use of the website is solely at your own risk...
            </p>
            <p className="mb-6 text-justify">
              This is not an offer, an invitation to offer and/or commitment of any nature. The image(s) includes artistic impressions and stock images...
            </p>
            <p className="mb-6 text-justify">
              In no event will the company be liable for claim made by the users including seeking any cancellation for any of the inaccuracies in the information provided in this Website...
            </p>
            <p className="text-justify">
              The user/customer(s) acknowledge, agree and undertake to not hold the Company or any of its affiliates liable/responsible for any information stated, representation(s)/commitment(s)/offer(s) made by any third parties...
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
