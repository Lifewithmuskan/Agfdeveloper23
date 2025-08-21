
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Download, Calendar, Star, CheckCircle, X, Building, Award, Users, TrendingUp, Sparkles, Crown } from 'lucide-react';
import TiltedCard from "../components/TiltedCard";
import ImageGrid from '../components/ImageGrid';
import LocationFeatures from "../components/LocationFeatures";

import FeatureCarousel from '../components/CoreFeatureCarousel';

const SRM= () => {
    const [showBrochurePopup, setShowBrochurePopup] = useState(false);
    const [showBookSitePopup, setShowBookSitePopup] = useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [showPricingPopup, setShowPricingPopup] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const heroSlides = useMemo(() => [
          {
    // leftImage: './images/hh1.jpeg',
    rightImage:'./images/utt1.jpeg',
    subtitle: "",
  },
  {
    // leftImage: './images/hp_images.jpeg',
    rightImage:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=80&auto=format',
    subtitle: "",
  }
       
     
      
    ], []);
      const content = [
    {
      img: "./images/air.webp",
      text: "Connectivity is the backbone of digital transformation. It ensures smooth communication and access across the globe.",
      imgLeft: true,
    },
    {
      img: "./images/expressway.webp",
      text: "High-speed networks enable businesses to scale faster and provide better experiences.",
      imgLeft: false,
    },
    {
      img: "./images/air.webp",
      text: "Seamless integration between devices builds a smarter, more connected world.",
      imgLeft: true,
    },
  ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
   
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
      }, 2500); // 2.5s delay
      return () => clearInterval(interval);
    }, []);
    const pricingCards = [
        {
            img: "/images/plot.jpg",
            price: "₹46,000",
            label: "Per Sq. Yd.",
            title1: "",
            title2: "Base Sale Rate"
        },
        {
            img: "/images/payment.jpg",
            price: "30:70",
            label: "Payment Plan",
            title1: "",
            title2: "Flexible Options"
        },
        {
            img: "/images/roi.jpg",
            price: "10%",
            label: "Guaranteed ROI",
            title1: "",
            title2: "Annual Returns"
        }
    ];

    const pricingCardElements = pricingCards.map((item, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative min-h-[350px] rounded-xl overflow-hidden transform transition-transform duration-300 ${
                index === 1 ? "scale-105 rotate-[3deg] -skew-y-2 z-10" : ""
            }`}
        >
            <div
                className="absolute inset-0 bg-cover bg-center object-cover opacity-20 bg-black"
                style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-black opacity-60 z-0" />
            <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <div
                    className="absolute -top-6 -left-1 bg-primary-600 w-[110px] h-[110px] text-white text-center rounded-full flex flex-col justify-center items-center z-20 transform scale-110 shadow-lg"
                    style={{ boxShadow: "12px 24px 32px hsl(0deg 0% 0% / 0.3)" }}
                >
                    <span className="text-2xl font-bold">{item.price}</span>
                    <span className="text-xs">{item.label}</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                    <span className="block">{item.title1}</span>
                    <span className="block font-medium">{item.title2}</span>
                </div>
            </div>
        </motion.div>
    ));
 
const FEATURES = [
  {
    id: 1,
    name: "Fast Performance",
    img: "./images/g2.png",
    description: "Experience lightning-fast loading and smooth operations.Experience lightning-fast loading and smooth operations. Experience lightning-fast loading and smooth operations."
  },
  {
    id: 2,
    name: "Secure System",
    img: "./images/g2.png",
    description: "Top-notch security protocols ensure your data stays safe. Experience lightning-fast loading and smooth operations.Experience lightning-fast loading and smooth operations."
  },
  {
    id: 3,
    name: "User Friendly",
    img: "./images/g3.png",
    description: "An intuitive interface designed for seamless navigation.Experience lightning-fast loading and smooth operations. Experience lightning-fast loading and smooth operations."
  },
  {
    id: 4,
    name: "Scalable",
    img: "./images/g3.jpg",
    description: "Easily scales with your growing needs and demands. Experience lightning-fast loading and smooth operations.Experience lightning-fast loading and smooth operations."
  },
  {
    id: 5,
    name: "Reliable",
    img: "./images/g2.png",
    description: "Built for consistent performance and high uptime.Experience lightning-fast loading and smooth operations.Experience lightning-fast loading and smooth operations."
  },
];

    useEffect(() => {
        setIsLoaded(true);
        heroSlides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
        const interval = setInterval(() => {
            requestAnimationFrame(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlides]);


    const [brochureForm, setBrochureForm] = useState({ name: '', mobile: '', email: '' });
    const [bookSiteForm, setBookSiteForm] = useState({ name: '', mobile: '', email: '' });
    const [scheduleForm, setScheduleForm] = useState({ name: '', mobile: '', email: '' });

    const highlights = useMemo(() => [
        'Located in Solara, Haryana',
        'Legal Freehold Plots',
        'Immediate Registry & Possession',
        'CCTV Surveillance & Security',
        'Wide 25 ft. Internal Roads',
        'Well-Planned Infrastructure'
    ], []);

    const amenities = useMemo(() => [
       
        { name: 'CCTV Surveillance', icon: '📹' },
        { name: 'Wide Roads', icon: '🛣️' },
        { name: 'Street Lighting', icon: '💡' },
        { name: 'Power Supply', icon: '⚡' },
        { name: 'Security Guards', icon: '🛡️' },
        { name: 'Community Park', icon: '🏞️' },
        { name: 'Water Supply', icon: '💧' },
        { name: 'Sewage System', icon: '🚿' },
        { name: 'Green Spaces', icon: '🌳' },
       
       
    ], []);

    const handleBrochureSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! Your brochure download link will be sent to your email.');
        setBrochureForm({ name: '', mobile: '', email: '' });
        setShowBrochurePopup(false);
    }, []);

    const handleBookSiteSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! Our team will contact you soon for site visit booking.');
        setBookSiteForm({ name: '', mobile: '', email: '' });
        setShowBookSitePopup(false);
    }, []);

    const handleScheduleSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! We will schedule a call with you soon.');
        setScheduleForm({ name: '', mobile: '', email: '' });
        setShowSchedulePopup(false);
    }, []);

    const handleInputChange = useCallback((setForm) => (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
           <section className="relative h-screen w-full overflow-hidden">

      <div mode="wait">
        <motion.div
          key={currentSlide + "-left"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-centert"
        />
           <div > 
            <h1 className=" absolute inset-y-0 left-0 w-1/2 bg-cover bg-centert text-8xl font-bold text-left text-primary-700 mb-6 mt-20 text-center" >
                           SMR GREEN WOOD</h1>
                           </div>   
      </div>
    
  
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide + "-right"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center clip-right"
          style={{
            backgroundImage: `url('${heroSlides[currentSlide].rightImage}')`,
          }}
        />
      </AnimatePresence>
    </section>

  <section id="about" className="py-16 bg-lime-100 rounded-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#DDF6D2] rounded-sm ">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
          <h2 className="text-4xl text-primary-700 lg:text-5xl font-extrabold mb-6 leading-tight pt-10 ">
        About <span className="text-gold-400"> SMR Green Woods</span>
      </h2> 
      
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ">
      <div>
        <p className="text-lg text-primary-700 leading-relaxed mb-4 ">
          SMR Green Woods - Phase I is a premium plotted development in
          Solara, Haryana, spanning 18046.5 sq. yd. with 13041.3 sq. yd.
          of plot area and 4535.87 sq. yd. of road area. Designed for
          residential development and high investment potential, it offers
          secure freehold plots with immediate registry and possession.
        </p>
        <p className="text-lg text-primary-700 leading-relaxed">
          SMR Green Woods - Phase III is a premium plotted development in
          Solara, Haryana, with similar scale and benefits, ensuring a
          secure and profitable investment opportunity.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="./images/smr1.jpg"
          alt="About SMR"
          className="rounded-lg shadow-lg max-w-md"
        />
      </div>
    </div>

    
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-40">

  <div>
    <h3 className="text-primary-900 text-4xl font-semibold mb-6">Phase 1</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        { label: "TOTAL AREA", value: "18046.5 SQ.YD." },
        { label: "PARK AREA", value: "468.8 SQ.YD." },
        { label: "ROAD AREA", value: "4535.87 SQ.YD." },
        { label: "SALE AREA", value: "13041 SQ.YD." }
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
            <div className="absolute inset-0 bg-primary-200 opacity-70 animate-wave"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{item.value}</span>
            </div>
          </div>
          <p className="text-primary-700 mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  </div>

 
  <div>
    <h3 className="text-primary-900 font-semibold text-4xl mb-6">Phase 3</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        { label: "TOTAL AREA", value: "22944 SQ.YD." },
        { label: "ROAD AREA", value: "6326 SQ.YD." },
        { label: "PLOT AREA", value: "15771 SQ.YD." }
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
            <div className="absolute inset-0 bg-primary-200 opacity-70 animate-wave"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{item.value}</span>
            </div>
          </div>
          <p className="text-primary-700 mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  </div>


      {/* <div>
        <h3 className="text-white text-4xl font-semibold mb-6">Phase 1</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[[{"TOTAL AREA"} : {"18046.5 SQ.YD."}], [{"PARK AREA "}:{"468.8 SQ.YD."}], [{"ROAD AREA "}:{"4535.87 SQ.YD."}], [{"SALE AREA"}:{"13041 SQ.YD."}].map((val, i) => (
            <div key={i} className="text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                <div className="absolute inset-0 bg-primary-200 opacity-70 animate-wave"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{val}</span>
                </div>
              </div>
              <p className="text-gray-400 mt-2">{val}</p>
            </div>
          ))}
        </div>
      </div> */}

    </div>


  </div>
</section>

   
<section className="relative ">
          
<div className="relative  bg-gradient-to-b from-white to-green-100 ">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 20%, #0e2204ff, transparent)",
                }}/>
                    
                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <motion.h1 className="text-4xl font-bold text-center text-white mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                               <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight pt-10">
       SMR <span className="text-gold-400">HIGHLIGHTS</span>
      </h2> 
                           </motion.h1>
                           <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                             Strategic location is the backbone of NextGen Village. With excellent
                             road networks, the Yamuna Expressway, and proximity to Noida International
                             Airport, our project ensures that residents and investors remain connected
                             to business, travel, and lifestyle hubs with unmatched ease.
                           </p>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center ">
                   <div> <TiltedCard imageSrc="./images/air.webp"
                               captionText="ROADS"/>
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10 ">
                               NOIDA INTERNATIONAL AIRPORTS</h3>
                            <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                                Asia's Largest Airport Ready by 2024 In which 7200  acres wioth six Runway Project Cost 30,000 Crore.
                           </p>
                             </div>
                            
                   <div> 
                    <TiltedCard  
                                                    imageSrc="./images/expressway.webp"
                               captionText="ROADS"
                             />
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10 ">Yamuna Expressway</h3>
                               <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                            165 Km long Delhi to Agra Delhi Mumbai Highway Cost 1 Lakh Crore 3 Longest Highway.
                           </p>
                             </div>
                                          <div> 
                    <TiltedCard
                                                    imageSrc="./images/filmcity.webp"
                               captionText="ROADS"
                             />
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10">Film City Sector 21</h3>
                               <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                           We have a consortium of investors through whom we regularly buy and sell properties in our areas of interest. We maintain confidentiality regarding buyers and sellers.
                           </p>
                             </div>
                                                        <div> <TiltedCard imageSrc="./images/f1.webp"
                               captionText="ROADS"/>
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10 ">
                               Formula 1 Race Track</h3>
                            <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                           We assist our clients in identifying land parcels based on their needs and analyzing market trends and government policies relevant to their investment Purpose.
                           </p>
                             </div>
                                                <div> <TiltedCard imageSrc="./images/logistic.webp"
                               captionText="ROADS"/>
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10 ">
                               Logistic Parkt appal</h3>
                            <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                           We assist our clients in identifying land parcels based on their needs and analyzing market trends and government policies relevant to their investment Purpose.
                           </p>
                             </div>
                                                <div> <TiltedCard imageSrc="./images/industry.jpg"
                               captionText="ROADS"/>
                             <h3 className="text-2xl text-primary-900 text-center max-w-3xl mx-auto mt-10">
                               Industrial Hub sec 32,33</h3>
                            <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto mb-12">
                           We assist our clients in identifying land parcels based on their needs and analyzing market trends and government policies relevant to their investment Purpose.
                           </p>
                             </div>
                                          <div> 
            
                           </div>
                         </div>
                      
                   </div>
            </div>
          </section>

 <section id="connectivity" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Connectivity
        </motion.h2>

        <div className="space-y-20">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
             
              {item.imgLeft ? (
                <>
                  <motion.img
                    src={item.img}
                    alt="Connectivity"
                    className="w-full rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                  <motion.img
                    src={item.img}
                    alt="Connectivity"
                    className="w-full rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section>
                <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       Gallery
        </motion.h2><ImageGrid /></section>

  


    <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-8">
    
   
    <div className="lg:w-1/2">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
        World-Class <span className="text-gold-400">Amenities</span>
      </h2>  
      <p className="text-lg text-gray-200 mb-8">
        Discover the powerful features designed to enhance your experience.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-gradient-to-br from-primary-600 to-primary-500 p-5 rounded-2xl text-center hover:shadow-xl transition-all group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {amenity.icon}
            </div>
            <h3 className="text-sm font-semibold text-white">
              {amenity.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>

 
    <div className="relative w-full lg:w-1/2 aspect-square flex items-center justify-center">
      <motion.div
        key={FEATURES[currentIndex].id}
        className="absolute flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={FEATURES[currentIndex].img}
          alt={FEATURES[currentIndex].name}
          className="w-4/5 h-4/5  border-4 border-white/80 shadow-2xl object-cover"
        />
        <p className="mt-4 text-lg font-semibold text-white">
          {FEATURES[currentIndex].name}
        </p>
         <p className="mt-2 text-gray-300 text-lg">
          {FEATURES[currentIndex].description}
        </p>
      </motion.div>

      {FEATURES.map((feature, index) => {
        if (index === currentIndex) return null;

        const angle =
          ((index - currentIndex + FEATURES.length) % FEATURES.length) *
          ((2 * Math.PI) / FEATURES.length);

        const radius = 40 + "%"; // orbit radius in % for responsiveness
        const x = 0.35 * Math.cos(angle) * 100; // ~35% from center
        const y = 0.35 * Math.sin(angle) * 100;

        return (
          <motion.div
            key={feature.id}
            className="absolute flex flex-col items-center"
            animate={{
              rotate: -(currentIndex * (360 / FEATURES.length)),
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              transform: `translate(${x}%, ${y}%)`,
            }}
          >
        
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


  

        
 <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&q=80&auto=format"
                                    alt="SMR Green Woods Highlight 1"
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80&auto=format"
                                    alt="SMR Green Woods Highlight 2"
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-gold-500 mr-1" />
                                    <span className="text-lg font-bold text-gray-900">4.7/5</span>
                                </div>
                                <div className="text-sm text-gray-600">Customer Rating</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Highlights</h2>
                            <div className="space-y-4">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                                        <span className="text-lg text-gray-700">{highlight}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={() => setShowBrochurePopup(true)}
                                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 flex items-center"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Brochure
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

          

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">SMR GREENWOOD LAYOUT PLAN</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Strategically located in Solara, Haryana, with excellent connectivity
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="h-96 bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              
                                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                                <p className="text-gray-600">Detailed location map will be displayed here</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">5 km</div>
                                    <div className="text-gray-600">Noida Int. Airport</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">10 km</div>
                                    <div className="text-gray-600">Yamuna Expressway</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">15 km</div>
                                    <div className="text-gray-600">Film City</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <section>
        <LocationFeatures />
      </section>
           

            {showBrochurePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                    >
                        <div className="relative bg-gradient-to-br from-primary-600 to-gold-600 p-6 rounded-t-2xl">
                            <button
                                onClick={() => setShowBrochurePopup(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-white text-center">
                                <Download className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold mb-2">Download Brochure</h3>
                                <p className="text-primary-100">Get detailed project information</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleBrochureSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={brochureForm.name}
                                        onChange={handleInputChange(setBrochureForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={brochureForm.mobile}
                                        onChange={handleInputChange(setBrochureForm)}
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={brochureForm.email}
                                        onChange={handleInputChange(setBrochureForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="flex space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowBrochurePopup(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}

            {showBookSitePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                    >
                        <div className="relative bg-gradient-to-br from-primary-600 to-gold-600 p-6 rounded-t-2xl">
                            <button
                                onClick={() => setShowBookSitePopup(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-white text-center">
                                <MapPin className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold mb-2">Book Site Visit</h3>
                                <p className="text-primary-100">Schedule your site visit today</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleBookSiteSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={bookSiteForm.name}
                                        onChange={handleInputChange(setBookSiteForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={bookSiteForm.mobile}
                                        onChange={handleInputChange(setBookSiteForm)}
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={bookSiteForm.email}
                                        onChange={handleInputChange(setBookSiteForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="flex space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowBookSitePopup(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center"
                                    >
                                        <MapPin className="w-4 h-4 mr-2" />
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}

            {showSchedulePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                    >
                        <div className="relative bg-gradient-to-br from-primary-600 to-gold-600 p-6 rounded-t-2xl">
                            <button
                                onClick={() => setShowSchedulePopup(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-white text-center">
                                <Calendar className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold mb-2">Schedule Call</h3>
                                <p className="text-primary-100">Book a personalized consultation</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleScheduleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={scheduleForm.name}
                                        onChange={handleInputChange(setScheduleForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={scheduleForm.mobile}
                                        onChange={handleInputChange(setScheduleForm)}
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={scheduleForm.email}
                                        onChange={handleInputChange(setScheduleForm)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="flex space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowSchedulePopup(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Schedule
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}

            {showPricingPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="relative bg-gradient-to-br from-primary-600 to-gold-600 p-6 rounded-t-2xl">
                            <button
                                onClick={() => setShowPricingPopup(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-white text-center">
                                <TrendingUp className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="text-2xl font-bold mb-2">Detailed Pricing Information</h3>
                                <p className="text-primary-100">Complete cost breakdown and payment options</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-8 bg-gradient-to-br from-primary-50 to-gold-50 rounded-xl p-6">
                                <div className="text-5xl font-bold text-primary-600 mb-2">
                                    ₹46,000
                                    <span className="text-lg font-normal text-gray-600">/sq. yd.</span>
                                </div>
                                <p className="text-gray-600">Base Sale Rate</p>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Cost Breakdown (100 sq. yd. example)</h4>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Plot Cost (100 sq. yd.)', value: '₹46,00,000' },
                                        { label: 'Development Charges', value: '₹2,00,000' },
                                        { label: 'Club Membership', value: '₹80,000' },
                                        { label: 'Registration & Documentation', value: 'FREE' },
                                        { label: 'GST', value: 'Not Applicable' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-700">{item.label}</span>
                                            <span className={`font-semibold ${item.value === 'FREE' ? 'text-green-600' : 'text-gray-900'}`}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center py-3 border-t-2 border-primary-200 text-lg font-bold">
                                        <span>Total Investment</span>
                                        <span className="text-primary-600">₹48,80,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Payment Plans</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-primary-200 rounded-lg p-4 bg-primary-50">
                                        <h5 className="font-semibold text-primary-700 mb-2">30:70 Plan</h5>
                                        <div className="text-sm space-y-1">
                                            <div>• 30% on booking</div>
                                            <div>• 70% on possession</div>
                                            <div className="text-green-600 font-medium">Most Popular</div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <h5 className="font-semibold text-gray-700 mb-2">Construction Linked</h5>
                                        <div className="text-sm space-y-1">
                                            <div>• 20% on booking</div>
                                            <div>• 80% as per development</div>
                                            <div className="text-blue-600 font-medium">Flexible Option</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8 bg-gradient-to-r from-gold-50 to-yellow-50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Limited Time Benefits</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Zero Registration Charges',
                                        'Free Legal Documentation',
                                        'Complimentary Site Visit',
                                        'Early Bird Discount: 5%',
                                        'Bank Loan Assistance',
                                        '10% Guaranteed Returns'
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            <span className="text-sm text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        setShowPricingPopup(false);
                                        setShowBookSitePopup(true);
                                    }}
                                    className="flex-1 bg-gradient-to-r from-primary-600 to-gold-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-gold-700 transition-all flex items-center justify-center"
                                >
                                    <Building className="w-4 h-4 mr-2" />
                                    Book Site Visit
                                </button>
                                <button
                                    onClick={() => {
                                        setShowPricingPopup(false);
                                        setShowSchedulePopup(true);
                                    }}
                                    className="flex-1 border border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-all flex items-center justify-center"
                                >
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Schedule Call
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
            
        </div>
    );
};

export default SRM;
