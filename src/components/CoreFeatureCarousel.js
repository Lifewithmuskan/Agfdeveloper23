import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FeatureCarousel({
  features = [],
  interval = 2500,      // autoplay speed
  centerSize = 200,     // size of center image
  orbitSize = 80,       // size of orbiting images
  radius = 160,         // distance of orbiting images from center
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (features.length === 0) return;
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, interval);
    return () => clearInterval(autoSlide);
  }, [features, interval]);

  if (features.length === 0) {
    return <div className="text-center text-gray-500">No features available</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-primary-500 text-white">
      <h2 className="text-3xl font-bold mb-10">Our Core Features</h2>

      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* Center active feature */}
        <motion.div
          key={features[currentIndex].id}
          className="absolute flex flex-col items-center"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={features[currentIndex].img}
            alt={features[currentIndex].name}
            className={`rounded-full border-4 border-white shadow-xl`}
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
            }}
          />
          <p className="mt-3 text-lg font-semibold text-black">
            {features[currentIndex].name}
          </p>
        </motion.div>

        {/* Orbiting features */}
        {features.map((feature, index) => {
          if (index === currentIndex) return null;

          const angle =
            ((index - currentIndex + features.length) % features.length) *
            ((2 * Math.PI) / features.length);

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={feature.id}
              className="absolute flex flex-col items-center"
              animate={{
                rotate: -(currentIndex * (360 / features.length)),
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={feature.img}
                alt={feature.name}
                className="rounded-full border-2 border-gray-400 shadow-md"
                style={{
                  width: `${orbitSize}px`,
                  height: `${orbitSize}px`,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
