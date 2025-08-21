import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Diagonal } from '../components/Diagonal';

const Himachal = () => {
  const himachalProjects = [
    { 
      name: 'Agf Avenue-2 – 3 BHK Flats', 
      href: '/projects/himachal/agf-avenue-2', 
      image: '/images/agf-avenue-2.jpg' // <-- replace with actual image path
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20 mt-[35px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6 mt-6">
              Himachal <span className="text-gold-400">Project</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore the beauty of Himachal with our premium property listings.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Diagonal color="fill-primary-700" flip={true} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {himachalProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
              >
                <img
                  src={project.image || 'https://picsum.photos/id/1018/800/600'}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{project.name}</h3>
                  <Link
                    to={project.href}
                    className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Himachal;
