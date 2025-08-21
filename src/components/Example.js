import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export const Example = () => {
  const [position, setPosition] = useState(50);

  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      setPosition((prev) => {
        let next = prev + direction * 2;
        if (next >= 100) {
          direction = -1;
          next = 100;
        } else if (next <= 0) {
          direction = 1;
          next = 0;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      <ReactCompareSlider
        position={position}
        itemOne={
          <ReactCompareSliderImage
            src="/images/before.jpg"
            alt="Image one"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/images/after.jpg"
            alt="Image two"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 py-8">
        <motion.h1
          className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          NextGen
        </motion.h1>
        <motion.p
          className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400 drop-shadow-md max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Crafting Landmarks. Building Trust.
        </motion.p>
      </div>
    </div>
  );
};