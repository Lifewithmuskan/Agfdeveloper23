import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Download, Calendar, Star, CheckCircle, ArrowRight, X, Building, Award, Users, TrendingUp, Sparkles, Crown } from 'lucide-react';

const MVFProject = () => {
    const [showBrochurePopup, setShowBrochurePopup] = useState(false);
    const [showBookSitePopup, setShowBookSitePopup] = useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [showPricingPopup, setShowPricingPopup] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const heroSlides = useMemo(() => [
        {
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'Luxury Redefined',
            subtitle: 'Experience the pinnacle of modern living'
        },
        {
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'Premium Architecture',
            subtitle: 'Where design meets sophistication'
        },
        {
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=80&auto=format',
            title: 'World-Class Amenities',
            subtitle: 'Every comfort at your doorstep'
        }
    ], []);

    const pricingCards = [
  {
    img: "/images/1.png",
    price: "₹35,000", 
    label: "Per Sq. Yd.",
    title1: "",
    title2: "Base Sale Rate",
  },
  {
    img: "/images/2.png",
    price: "50:50", 
    label: "Payment Plan",
    title1: "",
    title2: "Flexible Options",
  },
  { 


    img: "/images/3.png",
    price: "12%",
    label: "Guaranteed ROI",
    title1: "",
    title2: "Annual Returns",
  },
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
     
        {/* <div
  className="bg-primary-600 w-[75px] h-[75px] text-white text-center rounded-full flex flex-col justify-center items-center mb-4"
  style={{ boxShadow: "8px 16px 16px hsl(0deg 0% 0% / 0.25)" }}
>

        <span className="text-xs"></span>
        <span className="text-xl font-bold">{item.price}</span>
        <span className="text-xs">{item.label}</span>
      </div> */}
      <div
  className="absolute -top-6 -left-1 bg-primary-600 w-[110px] h-[110px] text-white text-center rounded-full flex flex-col justify-center items-center z-20 transform scale-110 shadow-lg"
  style={{ boxShadow: "12px 24px 32px hsl(0deg 0% 0% / 0.3)" }}
>
  <span className="text-xs">{item.subtext}</span>
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

    const [brochureForm, setBrochureForm] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const [bookSiteForm, setBookSiteForm] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const [scheduleForm, setScheduleForm] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const [contactForm, setContactForm] = useState({
        name: '',
        mobile: '',
        email: ''
    });



    const highlights = useMemo(() => [
        'Prime Location in Noida',
        'Modern Architecture & Design',
        'World-Class Amenities',
        '24/7 Security & Surveillance',
        'Green Building Certified',
        'Easy Connectivity to Metro',
        'Shopping Mall Nearby',
        'Top Schools & Hospitals'
    ], []);

    const amenities = useMemo(() => [
        { name: 'Swimming Pool', icon: '🏊‍♂️' },
        { name: 'Gymnasium', icon: '💪' },
        { name: 'Children Play Area', icon: '🎮' },
        { name: 'Clubhouse', icon: '🏛️' },
        { name: 'Landscaped Gardens', icon: '🌳' },
        { name: 'Jogging Track', icon: '🏃‍♂️' },
        { name: 'Multi-Purpose Hall', icon: '🎭' },
        { name: 'Power Backup', icon: '⚡' },
        { name: 'Parking Space', icon: '🚗' },
        { name: 'Water Treatment Plant', icon: '💧' },
        { name: 'Fire Safety Systems', icon: '🚨' },
        { name: 'Intercom Facility', icon: '📞' }
    ], []);

    const handleBrochureSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! Your brochure download link will be sent to your email.');
        setBrochureForm({ name: '', mobile: '', email: '' });
        setShowBrochurePopup(false);
    }, [brochureForm]);

    const handleBookSiteSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! Our team will contact you soon for site visit booking.');
        setBookSiteForm({ name: '', mobile: '', email: '' });
        setShowBookSitePopup(false);
    }, [bookSiteForm]);

    const handleScheduleSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! We will schedule a call with you soon.');
        setScheduleForm({ name: '', mobile: '', email: '' });
        setShowSchedulePopup(false);
    }, [scheduleForm]);

    const handleContactSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you! We will get back to you soon.');
        setContactForm({ name: '', mobile: '', email: '' });
    }, [contactForm]);

    const handleBrochureInputChange = useCallback((e) => {
        setBrochureForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleBookSiteInputChange = useCallback((e) => {
        setBookSiteForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleScheduleInputChange = useCallback((e) => {
        setScheduleForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleContactInputChange = useCallback((e) => {
        setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url('${heroSlides[currentSlide].image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gold-400/20 rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                                opacity: 0
                            }}
                            animate={{
                                y: -100,
                                opacity: [0, 0.6, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 8 + 12,
                                repeat: Infinity,
                                delay: Math.random() * 4,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-white space-y-8"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="inline-flex items-center bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-3 mt-16"
                                >
                                    <Crown className="w-5 h-5 text-gold-400 mr-2" />
                                    <span className="text-gold-200 font-medium">Premium Luxury Collection</span>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 1 }}
                                        className="text-6xl lg:text-7xl font-bold leading-tight"
                                    >
                                        <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                                            MVF
                                        </span>
                                        <br />
                                        <span className="text-white">Project</span>
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 1.2 }}
                                        className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                                    />
                                </div>

                                <motion.p
                                    key={currentSlide}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="text-2xl text-gray-200 font-light leading-relaxed"
                                >
                                    {heroSlides[currentSlide].subtitle}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.6 }}
                                    className="text-lg text-gray-300 leading-relaxed max-w-xl"
                                >
                                    Experience luxury living in the heart of Noida with world-class amenities,
                                    modern architecture, and unparalleled sophistication that defines contemporary elegance.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.8 }}
                                    className="grid grid-cols-3 gap-8"
                                >
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gold-400 mb-1">500+</div>
                                        <div className="text-sm text-gray-300">Premium Units</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gold-400 mb-1">15</div>
                                        <div className="text-sm text-gray-300">Floors</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gold-400 mb-1">5</div>
                                        <div className="text-sm text-gray-300">Acres</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 2 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <button
                                        onClick={() => setShowBookSitePopup(true)}
                                        className="group relative bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            <Building className="w-5 h-5 mr-2" />
                                            Book Site Visit
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </button>

                                    <button
                                        onClick={() => setShowBrochurePopup(true)}
                                        className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl"
                                    >
                                        <span className="flex items-center justify-center">
                                            <Download className="w-5 h-5 mr-2" />
                                            Download Brochure
                                        </span>
                                    </button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    {[
                                        { icon: Award, title: "Premium Location", desc: "Heart of Noida" },
                                        { icon: Sparkles, title: "Luxury Amenities", desc: "World-class facilities" },
                                        { icon: TrendingUp, title: "High ROI", desc: "12% guaranteed returns" },
                                        { icon: Users, title: "Expert Team", desc: "Professional guidance" }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                                    <feature.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                                                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex space-x-3">
                        {slideIndicators}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                    className="absolute bottom-8 right-8 z-20"
                >
                    <div className="flex flex-col items-center text-white/60">
                        <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-px h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"
                        />
                    </div>
                </motion.div>
            </section>

   
            < section id="about"className="py-16 bg-white" >
                <div   className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">About MVF Project</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            MVF Project represents the pinnacle of modern living in Noida.
                            This exclusive residential development offers a perfect blend of luxury, comfort, and convenience.
                            With state-of-the-art amenities, prime location, and exceptional construction quality,
                            MVF Project is designed to provide an unparalleled lifestyle experience for discerning homebuyers.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                            <div className="text-gray-600">Premium Units</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">15</div>
                            <div className="text-gray-600">Floors</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
                            <div className="text-gray-600">Acres</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">2024</div>
                            <div className="text-gray-600">Possession</div>
                        </motion.div>
                    </div>
                </div>
            </section >

            < section className="py-16 bg-gray-50" >
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
                                    alt="MVF Highlight 1"
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80&auto=format"
                                    alt="MVF Highlight 2"
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-gold-500 mr-1" />
                                    <span className="text-lg font-bold text-gray-900">4.8/5</span>
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
            </section >

           

            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
                >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Exclusive Pricing</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Get the best value for your investment with our competitive pricing structure
                </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingCardElements}
                </div>

                {/* ✅ Buttons appear here, after all 3 cards */}
                <div className="text-center mt-12">
                <button
                    onClick={() => setShowPricingPopup(true)}
                    className="bg-gradient-to-r from-primary-600 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-gold-700 transition-all transform hover:scale-105 shadow-lg mr-4"
                >
                    Get Detailed Pricing
                </button>
                <button
                    onClick={() => setShowBookSitePopup(true)}
                    className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
                >
                    Book Site Visit
                </button>
                </div>
            </div>
            </section>



            < section className="py-16 bg-white" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 id="world-class-amenities" className="text-4xl font-bold text-gray-900 mb-6">World-Class Amenities</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Experience luxury living with our comprehensive range of amenities designed for your comfort and convenience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-800">{amenity.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Project Map</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover the strategic location and surrounding amenities with our interactive project map
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                <div className="bg-gradient-to-r from-primary-600 to-gold-600 p-4">
                                    <h3 className="text-white font-semibold text-lg flex items-center">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        MVF Project - Noida Location
                                    </h3>
                                </div>

                                <div className="h-[600px] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&q=80&auto=format"
                                        alt="Noida Map Location"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <div className="absolute inset-0 bg-black/20">
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="relative">
                                                <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                                                    MVF Project
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute top-1/3 left-1/3">
                                            <div className="relative">
                                                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse delay-300 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-1 py-0.5 rounded text-xs whitespace-nowrap">
                                                    Metro
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-1/3 right-1/3">
                                            <div className="relative">
                                                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse delay-700 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-1 py-0.5 rounded text-xs whitespace-nowrap">
                                                    School
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute top-1/4 right-1/4">
                                            <div className="relative">
                                                <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg animate-pulse delay-1000 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-1 py-0.5 rounded text-xs whitespace-nowrap">
                                                    Hospital
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-1/4 left-1/4">
                                            <div className="relative">
                                                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg animate-pulse delay-1300 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-1 py-0.5 rounded text-xs whitespace-nowrap">
                                                    Mall
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Map Legend</h4>
                                        <div className="space-y-1 text-xs">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                                <span className="text-gray-700">Project Site</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                                <span className="text-gray-700">Metro Station</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                                <span className="text-gray-700">Schools</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                                <span className="text-gray-700">Hospital</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                                <span className="text-gray-700">Shopping Mall</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-primary-50 to-gold-50 p-6 rounded-2xl border border-primary-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Location Advantages</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: '🚇', title: 'Metro Connectivity', desc: '2 km from nearest metro station' },
                                        { icon: '🏥', title: 'Healthcare', desc: 'Top hospitals within 3 km radius' },
                                        { icon: '🏫', title: 'Education', desc: 'Premium schools nearby' },
                                        { icon: '🛍️', title: 'Shopping', desc: 'Major malls within 5 km' },
                                        { icon: '✈️', title: 'Airport', desc: '45 minutes to IGI Airport' },
                                        { icon: '🏢', title: 'Business Hub', desc: 'Close to corporate offices' }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="flex items-start space-x-3 bg-white/60 p-3 rounded-lg"
                                        >
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gold-50 to-primary-50 p-6 rounded-2xl border border-gold-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Distance Matrix</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { place: 'Connaught Place', distance: '25 km' },
                                        { place: 'Gurgaon', distance: '35 km' },
                                        { place: 'Greater Noida', distance: '15 km' },
                                        { place: 'Delhi Airport', distance: '40 km' }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white/60 p-3 rounded-lg text-center">
                                            <div className="text-lg font-bold text-primary-600">{item.distance}</div>
                                            <div className="text-sm text-gray-600">{item.place}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            < section className="py-16 bg-gray-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Location</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Strategically located in the heart of Noida with excellent connectivity to major landmarks
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
                                    <div className="text-2xl font-bold text-primary-600 mb-2">2 km</div>
                                    <div className="text-gray-600">Metro Station</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">5 km</div>
                                    <div className="text-gray-600">Shopping Mall</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600 mb-2">3 km</div>
                                    <div className="text-gray-600">Hospital</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            < section className="py-16 bg-red-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 id="decision-corner" className="text-4xl font-bold mb-6 text-gray-900">Decision Corner</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Do you want a best quote? Let's connect!
                        </p>
                        <p className="text-lg text-gray-600">
                            Let Us Serve You Beyond
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-80 flex flex-col justify-between">
                                <div>
                                    <Download className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Download Brochure</h3>
                                    <p className="text-gray-600 mb-6">Get detailed project information and floor plans</p>
                                </div>
                                <button
                                    onClick={() => setShowBrochurePopup(true)}
                                    className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full"
                                >
                                    Download Now
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-80 flex flex-col justify-between">
                                <div>
                                    <Phone className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Talk For Right Investment</h3>
                                    <p className="text-gray-600 mb-6">Speak with our investment experts</p>
                                </div>
                                <a
                                    href="tel:+919999999999"
                                    className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block w-full"
                                >
                                    Call Now
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-80 flex flex-col justify-between">
                                <div>
                                    <Calendar className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Schedule Now</h3>
                                    <p className="text-gray-600 mb-6">Book a personalized consultation</p>
                                </div>
                                <button
                                    onClick={() => setShowSchedulePopup(true)}
                                    className="bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full"
                                >
                                    Schedule Call
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
            {
                showBrochurePopup && (
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
                                            onChange={handleBrochureInputChange}
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
                                            onChange={handleBrochureInputChange}
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
                                            onChange={handleBrochureInputChange}
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
                )
            }

            {
                showBookSitePopup && (
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
                                            onChange={handleBookSiteInputChange}
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
                                            onChange={handleBookSiteInputChange}
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
                                            onChange={handleBookSiteInputChange}
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
                )
            }

            {
                showSchedulePopup && (
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
                                            onChange={handleScheduleInputChange}
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
                                            onChange={handleScheduleInputChange}
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
                                            onChange={handleScheduleInputChange}
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
                )
            }

            {
                showPricingPopup && (
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
                                        ₹35,000
                                        <span className="text-lg font-normal text-gray-600">/sq. yd.</span>
                                    </div>
                                    <p className="text-gray-600">Base Sale Rate</p>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Cost Breakdown (200 sq. yd. example)</h4>
                                    <div className="space-y-3">
                                        {[
                                            { label: 'Plot Cost (200 sq. yd.)', value: '₹70,00,000' },
                                            { label: 'Development Charges', value: '₹5,00,000' },
                                            { label: 'Club Membership', value: '₹2,00,000' },
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
                                            <span className="text-primary-600">₹77,00,000</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Payment Plans</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="border border-primary-200 rounded-lg p-4 bg-primary-50">
                                            <h5 className="font-semibold text-primary-700 mb-2">50:50 Plan</h5>
                                            <div className="text-sm space-y-1">
                                                <div>• 50% on booking</div>
                                                <div>• 50% on possession</div>
                                                <div className="text-green-600 font-medium">Most Popular</div>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <h5 className="font-semibold text-gray-700 mb-2">Construction Linked</h5>
                                            <div className="text-sm space-y-1">
                                                <div>• 20% on booking</div>
                                                <div>• 80% as per construction</div>
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
                                            '12% Guaranteed Returns'
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
                )
            }
        </div >
    );
};

export default MVFProject;