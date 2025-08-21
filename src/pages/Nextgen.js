import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Example } from "../components/Example";
import CircularGallery from "../components/Gallary";
import LocationFeatures from "../components/LocationFeatures";
import TiltedCard from "../components/TiltedCard";
import { ShoppingBag, FlaskConical, Gamepad2, School, Store, Cross, Fuel, Dumbbell } from "lucide-react";

const Nextgen = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", transition: { duration: 0.3 } },
  };

  const features = [
    {
      title: "Innovation & Tech Office",
      description: "Spaces designed to nurture startups, tech companies, and research hubs.",
      image: "",
    },
    {
      title: "Biotech & Logistic Parks",
      description: "Cutting-edge biotech research facilities and logistics support for businesses.",
    },
    {
      title: "Recreation & Lifestyle",
      description: "Entertainment zones, shopping centers, and lifestyle amenities for all ages.",
    },
    {
      title: "Secure & Connected",
      description: "Smart infrastructure with world-class security and seamless connectivity.",
    },
  ];

  const locationFeatures = [
    { icon: ShoppingBag, title: "Shopping Center" },
    { icon: FlaskConical, title: "Biotech Park" },
    { icon: Gamepad2, title: "Recreation & Entertainment Hub" },
    { icon: School, title: "School" },
    { icon: Store, title: "Shopping Mall" },
    { icon: Cross, title: "Hospital" },
    { icon: Fuel, title: "Petrol Pump" },
    { icon: Dumbbell, title: "Sports Complex" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    
      <section className="relative h-screen overflow-hidden">
        <Example />
      </section>

      
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About NextGen Village</h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              NextGen Village is a visionary plotted development in the heart of Solara, Haryana, designed to redefine modern living while offering exceptional investment opportunities. Spread across a vast and well-planned landscape, the project provides premium residential plots supported by wide roads, green open spaces, and dedicated community areas. With a balance of nature and modern infrastructure, it creates the perfect environment for families, professionals, and entrepreneurs seeking growth and stability.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Strategically located with seamless access to expressways, airports, and the upcoming metro network, NextGen Village connects you to the region’s key business and lifestyle hubs within minutes. More than just land, it is an ecosystem built for the future — combining sustainability, lifestyle amenities, and long-term value. Whether you are looking to build your dream home or make a secure investment, NextGen Village stands as a trusted destination for progressive living and prosperity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "TOTAL AREA", value: "29,487 SQ.YD" },
              { label: "ROAD AREA", value: "8,268 SQ.YD" },
              { label: "PARKING & CLUB AREA", value: "700 SQ.YD" },
              { label: "PLOT AREA", value: "20,519 SQ.YD" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-2xl font-bold text-green-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="features" className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Our World-Class Features
          </motion.h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            At NextGen Village, we go beyond just providing plots — we create an ecosystem
            filled with innovation, growth, and lifestyle opportunities. From advanced
            technology hubs to vibrant recreational spaces, our features ensure a
            future-ready environment for both living and investment.
          </p>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center space-x-6 shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                {feature.image && (
                  <img src={feature.image} alt={feature.title} className="w-32 h-24 object-cover rounded-md" />
                )}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{feature.title}</h2>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="connectivity" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Connectivity
          </motion.h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Strategic location is the backbone of NextGen Village. With excellent
            road networks, the Yamuna Expressway, and proximity to Noida International
            Airport, our project ensures that residents and investors remain connected
            to business, travel, and lifestyle hubs with unmatched ease.
          </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

            <TiltedCard
              imageSrc=""
              captionText="ROADS"
            />
            <TiltedCard
              imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
              captionText="Yamuna Expressway"
            />
            <TiltedCard
              imageSrc="https://imgeng.jagran.com/images/2025/07/12/article/image/Noida-International-Airport-1752296214719.webp"
              captionText="Noida Airport"
            />
          </div>
        </div>
      </section>

   
      <section id="gallery" className="py-16 bg-gradient-to-b from-white to-green-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Project Gallery</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explore the vision of NextGen Village through our gallery. Each image
          captures the essence of modern design, green landscapes, and sustainable
          planning that make this project truly one-of-a-kind.
        </p>
        <div style={{ height: "500px", position: "relative" }}>
          <CircularGallery bend={4} textColor="#222222" borderRadius={0.08} scrollEase={0.03} />
        </div>
      </section>

  
      <section id="location" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Location Features</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The location of NextGen Village has been carefully chosen to ensure
          unmatched growth potential. Surrounded by educational institutions,
          healthcare facilities, and commercial hubs, it is a destination that
          perfectly balances work, life, and convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {locationFeatures.map((f, i) => (
            <div key={i} className="bg-indigo-50 p-6 rounded-xl text-center shadow-md">
              <f.icon className="mx-auto mb-4 text-indigo-600 w-10 h-10" />
              <h3 className="font-semibold text-gray-800">{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      
      <section>
        <LocationFeatures />
      </section>
    </div>
  );
};

export default Nextgen;
