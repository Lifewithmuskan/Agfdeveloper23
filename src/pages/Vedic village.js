import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Download, Calendar, Star, CheckCircle, X, Building, Award, Users, TrendingUp, Sparkles, Crown } from 'lucide-react';
import AboutSection from '../components/AboutSection';


const VedicVillage = () => {
    const [showBrochurePopup, setShowBrochurePopup] = useState(false);
    const [showBookSitePopup, setShowBookSitePopup] = useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [showPricingPopup, setShowPricingPopup] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const heroSlides = useMemo(() => [
        {
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'Premium Living',
            subtitle: 'Well-planned plots for modern residential development'
        },
        {
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'High ROI',
            subtitle: 'Prime investment opportunity in Solara, Haryana'
        },
        {
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'Strategic Location',
            subtitle: 'Located in the rapidly developing region of Solara'
        }
    ], []);

    const pricingCards = [
        {
            img: "/images/plot.jpg",
            price: "₹45,000",
            label: "Per Sq. Yd.",
            title1: "",
            title2: "Base Sale Rate"
        },
        {
            img: "/images/payment.jpg",
            price: "40:60",
            label: "Payment Plan",
            title1: "",
            title2: "Flexible Options"
        },
        {
            img: "/images/roi.jpg",
            price: "12%",
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

    const slideIndicators = useMemo(() =>
        heroSlides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                    ? 'bg-gold-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
            />
        )), [heroSlides, currentSlide]);

    const [brochureForm, setBrochureForm] = useState({ name: '', mobile: '', email: '' });
    const [bookSiteForm, setBookSiteForm] = useState({ name: '', mobile: '', email: '' });
    const [scheduleForm, setScheduleForm] = useState({ name: '', mobile: '', email: '' });

    const highlights = useMemo(() => [
        'Located in Solara, Haryana',
        'Legal Freehold Plots',
        'Immediate Registry & Possession',
        'CCTV Surveillance & Security',
        'Wide 25 ft. Internal Roads',
        'Government Electricity Supply'
    ], []);

    const amenities = useMemo(() => [
        { name: 'Gated Community', icon: '🔒' },
        { name: 'CCTV Surveillance', icon: '📹' },
        { name: 'Wide Roads', icon: '🛣️' },
        { name: 'Street Lighting', icon: '💡' },
        { name: 'Power Supply', icon: '⚡' },
        { name: 'Security Guards', icon: '🛡️' },
        { name: 'Green Spaces', icon: '🌳' },
        { name: 'Water Supply', icon: '💧' },
        { name: 'Community Park', icon: '🏞️' },
        { name: 'Sewage System', icon: '🚿' },
        { name: 'Recreational Area', icon: '🎉' },
        { name: 'High-Speed Internet', icon: '📡' }
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

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-green"
     style={{ backgroundImage: `url('./images/ve.jpg')` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
  </div>
  
  {/* Floating Elements */}
  <motion.div
    className="absolute top-20 right-20 w-32 h-32 bg-gold/20 rounded-full blur-xl"
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  
  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1.2,
          delay: 0.3,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="block"
        >
          Vedic Village
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="block text-gold"
        >
          Live the Life You Deserve
        </motion.span>
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        Premium residential plots & community living in the heart of Noida Sector 63
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        {/* Tailwind Buttons */}
        <a 
          href="#book-visit" 
          className="px-8 py-4 text-lg font-semibold bg-black text-white rounded-2xl shadow-lg hover:bg-yellow-500 transition"
        >
          Book a Visit
        </a>
        <a 
          href="#explore-plots" 
          className="px-8 py-4 text-lg font-semibold bg-white/10 border border-white rounded-2xl hover:bg-white/20 transition"
        >
          Explore Plots
        </a>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    <motion.div
      className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <motion.div
        className="w-1 h-3 bg-white rounded-full mt-2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  </motion.div>
</section>




<AboutSection />





         

      </div>
    );
};

export default VedicVillage;