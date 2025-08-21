import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg"
];

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Vedic Village
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Vedic Village is a premium plotted development in Solara, Haryana, spanning 
            8148.6 sq. yd. with 5620 sq. yd. of plot area and 2528.6 sq. yd. of road area. 
            Designed for residential development and high investment potential, it offers 
            secure freehold plots with immediate registry and possession.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl">
              <div className="text-2xl font-bold text-primary-600 mb-2">5620</div>
              <div className="text-gray-600 text-sm">Plot Sq. Yd.</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl">
              <div className="text-2xl font-bold text-primary-600 mb-2">8148.6</div>
              <div className="text-gray-600 text-sm">Total Sq. Yd.</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl">
              <div className="text-2xl font-bold text-primary-600 mb-2">2528.6</div>
              <div className="text-gray-600 text-sm">Road Area</div>
            </div>
          </div>
        </motion.div>

        {/* Right Image Carousel */}
        <motion.div
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`about-${index}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
          
          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? "bg-gold" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
