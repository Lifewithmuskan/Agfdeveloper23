import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import {Diagonal} from "../components/Diagonal"
import TiltedCard from "../components/TiltedCard";


function TiltCard({ title, img }) {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");
  const ref = useRef(null);
  const tiltStrength = 30; 

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -tiltStrength; // inward press
    const rotateY = ((x / rect.width) - 1.2) * tiltStrength;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.96)`);
  };

  const onLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group text-white relative h-[400px] w-[300px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:w-[340px] perspective-[1000px] [transform-style:preserve-3d]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: transform,
      }}
    >
   
      <div className="absolute inset-0 opacity-0 text-white transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,0,150,0.5),rgba(0,200,255,0.5))]" />

     
      <div
        className="absolute inset-0 flex items-center text-white justify-center font-extrabold text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
        style={{ transform: "translateZ(60px)" }}
      >
        {title}
      </div>
    </div>
  );
}
const Home = () => {

const projectImages = [
    { id: 1, src: "/images/pic1.jpg", alt: "Luxury Apartment Complex" },
    { id: 2, src: "/images/pic2.jpg", alt: "Modern Villa Project" },
    { id: 3, src: "/images/pic3.jpg", alt: "Commercial Building" },
  ];

const projectImages_phone = [
    { id: 1, src: "/images/ph1.jpg", alt: "phone_image1" },
    { id: 2, src: "/images/ph2.jpg", alt: "phone_image2" },
    { id: 3, src: "/images/ph3.jpg", alt: "phone_image3" },
  ];

const projectImages_tablet = [
    { id: 1, src: "/images/t1.jpg", alt: "tab_image1" },
    { id: 2, src: "/images/t2.jpg", alt: "tab_image2" },
    { id: 3, src: "/images/t3.jpg", alt: "tab_image3" },
  ];

  
const useDeviceImages = (desktop, tablet, phone) => {
    const [images, setImages] = useState(desktop);

    useEffect(() => {
      const updateImages = () => {
        if (window.innerWidth < 640) {
          setImages(phone);
        } else if (window.innerWidth < 1024) {
          setImages(tablet);
        } else {
          setImages(desktop);
        }
      };
      updateImages();
      window.addEventListener("resize", updateImages);
      return () => window.removeEventListener("resize", updateImages);
    }, [desktop, tablet, phone]);

    return images;
  };
  
const images = useDeviceImages(
    projectImages,
    projectImages_tablet,
    projectImages_phone
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
}, [images.length]);

const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };


const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });


const [showCustomSolutionPopup, setShowCustomSolutionPopup] = useState(false);

  
const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setContactForm({ name: '', phone: '', email: '', project: '', message: '' });
  };

const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

const cards = [
  {
    Heading:"HARYANA",
    image: "/images/hh1.jpeg",
    title: "Card One",
    description: "This is the description for card one.",
    url:"/haryana"
  },
  {
    Heading:"HIMACHAL",
    image: "/images/hp_images.jpeg",
    title: "Card Two",
    description: "This is the description for card two.",
    url:"/himachal"
  },
  {
    Heading:'UTTARAKHAND',
    image: "/images/utt1.jpeg",
    title: "Card Three",
    description: "This is the description for card three.",
    url:"/uttarakhand"
  },
];
 

  return (
 <div className="min-h-screen">
  <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <Diagonal position="bottom" fill="primary-800" />
          </div>
        </div>
      </section>

  <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-4xl font-bold text-gray-900 mb-6 text-left font-serif text-3xl md:text-4xl text-[#183A32]">Building Dreams, Creating Landmarks</h2>
              <p className="text-lg text-gray-600 mb-6 mt-6 text-gray-700 leading-relaxed">
              At AGF, we don’t just develop land.we shape communities and create spaces where people truly feel at home. With years of experience in the real estate industry, we have earned a reputation for trust, transparency, and top-tier quality across residential, commercial, and investment projects.
              </p>
             
             <Link
  to="/about"
  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-[20px] p-10 shadow-md hover:bg-primary-700 hover:scale-105 transition-all duration-300">
  Learn More <ArrowRight className="h-5 w-5" />
</Link>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block " >
                              <img 
                src="/images/3.png" 
                alt="Modern building"
                 className="w-full h-auto object-cover rounded-[60px] shadow-lg"
              />
              {/* <img
                src="/images/About.webp"
                alt="AGF Developer Team"
                 className="w-full h-auto object-cover px-10 py-5  rounded-[20px] shadow-lg"/> */}
              
              <div className="absolute -bottom-6 -right-0 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary-600">3000+ </div>
                <div className="text-gray-600">Acres</div>
              </div>
            </motion.div> 
          </div>
        </div>
      </section>

  <section className="relative">
      <Diagonal color={"fill-primary-800"} flip points='0,10 100,0 100,10' />
      <div className="relative bg-primary-700">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 20%, #ffffff1a, transparent)",
          }}/>
              
                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <motion.h1 className="text-4xl font-bold text-center text-white mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                       Our services
                     </motion.h1>
                     <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                       Strategic location is the backbone of NextGen Village. With excellent
                       road networks, the Yamuna Expressway, and proximity to Noida International
                       Airport, our project ensures that residents and investors remain connected
                       to business, travel, and lifestyle hubs with unmatched ease.
                     </p>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            
                                    <div> 
              <TiltedCard
                                              imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
                         captionText="ROADS"
                       />
                       <h3 className="text-lg text-white text-center max-w-3xl mx-auto ">Land Trading</h3>
                         <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                     We have a consortium of investors through whom we regularly buy and sell properties in our areas of interest. We maintain confidentiality regarding buyers and sellers.
                     </p>
                       </div>
                                    <div> 
              <TiltedCard
                                                  imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
                         captionText="ROADS"
                       />
                       <h3 className="text-lg text-white text-center max-w-3xl mx-auto ">ROADS</h3>
                         <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                      uydssfisjakorplirjcg nnsknmckjldf
                     </p>
                       </div>
                                    <div> 
              <TiltedCard
                                               imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
                         captionText="ROADS"
                       />
                       <h3 className="text-lg text-white text-center max-w-3xl mx-auto ">
Land Leasing</h3>
                         <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                      Providing tailored leasing solutions for agricultural, commercial, and residential land with legally compliant agreements for long-term investment security.
                     </p>
                       </div>
                                    <div> 
              <TiltedCard
                                                imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
                         captionText="ROADS"
                       />
                       <h3 className="text-lg text-white text-center max-w-3xl mx-auto ">
Land Management</h3>
                         <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                     We provide land management services to our interested clients by securing possession, ensuring ownership, and maximizing land utilization.
                     </p>
                       </div>
                                    <div> 
              <TiltedCard
                                                imageSrc="https://www.realtynmore.com/wp-content/uploads/2025/04/delhi-mumbai-expressway-cover.jpg"
                         captionText="ROADS"
                       />
                       <h3 className="text-lg text-white text-center max-w-3xl mx-auto ">Land Profiling</h3>
                         <p className="text-lg text-white text-center max-w-3xl mx-auto mb-12">
                   It helps those who want to sell their land at the maximum price. By using relevant information we provide smart presentation in form of video & PPT.
                     </p>
                       </div>
                                
                  
                    
                     </div>
                   </div>
                
              <Diagonal color={"fill-primary-800"} />
      </div>
    </section>

  <section className="min-h-screen-[90vh] bg-gray-100 flex flex-col items-center mt-[60px] mb-[60px] ml-[10px] mr-[10px]">
    {/* <style>{styles}</style> */}
   {/* <div>
      <div className="w-full max-w-5xl px-4 pt-6">
     <h2 className="text-4xl font-bold text-primary-700 mb-8">Premium Locations</h2>
   </div>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
    {cards.map((card, idx) => {
      
      

      return (
        <div
          key={idx}
          className="flip-card group relative w-full h-72 ">
          <div className="flip-card-inner  relative w-full h-full">
            <div className="flip-card-front flex items-center justify-center bg-white shadow-xl rounded-xl overflow-hidden h-full">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-full blur-[0px]"
              />
              <h1 className="absolute z-10 text-white text-4xl font-bold text-center">
                {card.Heading}
              </h1>
            </div>
          

          </div>
        </div>

        
      );
    })}
  </div> */}
  <section className="min-h-[90vh] bg-gray-100 flex flex-col items-center mt-[60px] mb-[60px] ml-[10px] mr-[10px]">
  <div className="w-full max-w-5xl px-4 pt-6">
    <h2 className="text-4xl font-bold text-primary-700 mb-8">Premium Locations</h2>
  </div>

  <div className="flex flex-wrap items-center text-white justify-center gap-2 sm:gap-3 md:gap-4 p-5">
    {cards.map((card, idx) => (
      <div key={idx} className="flex flex-col text-white items-center gap-3">
       <a href={card.url} ><TiltCard title={card.Heading} img={card.image} /></a>
        <a
          href={card.url}
          className="flex bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 transition"
        >
          {card.Heading}
        </a>
      </div>
    ))}
  </div>
</section>

</section>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
              <Diagonal color={"fill-primary-800"} flip points='0,10 100,0 100,10
' />
  <section
  className="relative overflow-hidden bg-primary-400">
  <div
    className="absolute inset-0 opacity-25"
    style={{ backgroundImage: "radial-gradient(60% 60% at 70% 30%, #ffffff, transparent)" }}
  />
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
    
      <h3 className="font-serif text-3xl md:text-4xl text-white font-bold">
        Need a Custom Solution?
      </h3>
    <div
      className="mx-auto mt-3 h-[3px] w-32 rounded-full"
      style={{ backgroundImage: `linear-gradient(90deg, gold-400, primary-700)` }} />
      <p className="mx-auto mt-6 max-w-2xl text-white/85 text-xl">
        Our experts are ready to create a tailored service package just for you.
      </p>
      <button
        onClick={() => setShowCustomSolutionPopup(true)}
        className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-xl text-[#183A32] bg-gold-300">
        Get Custom Quote
        <ArrowRight className="h-5 w-5" />
      </button>
   
  </div>
    <Diagonal color={"fill-primary-800"} flip />
    </section>
          </motion.div>
   <section className="relative">
      <Diagonal color={"fill-primary-800"} flip points='0,10 100,0 100,10' />
      <div className="relative bg-primary-700">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 20%, #ffffff1a, transparent)",
          }}/>      
          

        
      </div>
    </section>
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey with us? Let's discuss your dream project
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8" >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Interest</label>
                  <select
                    name="project"
                    value={contactForm.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Apartments</option>
                    <option value="villas">Independent Villas</option>
                    <option value="commercial">Commercial Spaces</option>
                    <option value="plots">Land/Plots</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold-500 transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 9211723338</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@agfdeveloper.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">Assotech Business Cresterra, Tower-1, Office No. 917 & 918, 9th Floor, Sector 135, Noida, Uttar Pradesh 201305, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;