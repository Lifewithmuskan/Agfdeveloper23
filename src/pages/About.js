import React from 'react';
import { motion } from 'framer-motion';
import {Diagonal } from "../components/Diagonal";
import { 
  Building2, Users, Award, Target, 
  Eye, Heart, Shield, Zap 
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest communication and transparent dealings with all our stakeholders.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do, driving our commitment to service.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovative technologies and sustainable practices in our developments.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'AGF Developer founded as part of Globstay Group' },
    { year: '2012', event: 'First residential project completed in Gurgaon' },
    { year: '2015', event: 'Expanded operations to 5 major cities' },
    { year: '2018', event: 'Launched first commercial project' },
    { year: '2020', event: 'Achieved 10,000+ happy families milestone' },
    { year: '2022', event: 'Received "Developer of the Year" award' },
    { year: '2024', event: 'Launched sustainable housing initiative' }
  ];

 

  return (
    <div className="pt-16">
     
     

<section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white pb-20">
          
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >


     <h1 className="text-5xl pt-6 md:text-6xl font-bold mb-6">
                            About <span className="text-gold-400">AGF Developer</span>
                        </h1>

      <p className="text-l text-primary-100 max-w-3xl mx-auto">
At AGF Group, we offer a wide spectrum of real estate solutions designed to meet the evolving needs of modern buyers and investors. With a strong presence across Noida, Uttarakhand, Himachal Pradesh, Goa, and Punjab, we are shaping vibrant communities and delivering secure, future-ready investment opportunities in India’s most promising locations.
      </p>
      
    </motion.div>
  </div>
          
        <div className="absolute bottom-0 w-full">
    <Diagonal color="fill-primary-700" flip={true} />
  </div>
  
</section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">OUR STORY </h2  
             >
             <h3>Building Dreams, Creating Landmarks</h3>
             <br>
             </br>

              <p className="text-gray-600 mb-4 ">
                At AGF, we don’t just develop land we shape communities and create spaces where people truly feel at home. With years of experience in the real estate industry, we have earned a reputation for trust, transparency, and top-tier quality across residential, commercial, and investment projects.


              </p>
              <p className="text-gray-600 mb-4 ">
From premium residential plots and modern villas to commercial spaces and vacation retreats, we offer a diverse portfolio that caters to the needs of investors, homeowners, and businesses alike. Our projects are thoughtfully planned, strategically located, and built with a commitment to sustainability, design excellence, and customer satisfaction.

              </p>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/images/1.png" 
                alt="Modern building"
                 className="w-full h-auto object-cover rounded-[10px] shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">14+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     <section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="bg-white rounded-lg shadow-lg p-8"
>
<Target className="h-12 w-12 text-primary-600 mb-4" />
<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
<p className="text-gray-600">
At AGF Group, our mission is to create exceptional real estate opportunities that not only enhance lifestyles but also deliver strong and sustainable investment returns. We are committed to developing properties that harmonize with their natural and urban surroundings, while upholding the highest standards of quality, transparency, and integrity.
</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
className="bg-white rounded-lg shadow-lg p-8"
>
<Eye className="h-12 w-12 text-primary-600 mb-4" />
<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
<p className="text-gray-600">
At AGF Group, our vision is to become the most trusted name in Indian real estate—recognized for crafting properties that not only elevate lifestyles but also help build lasting legacies. We strive to expand our footprint across strategic growth corridors while staying firmly rooted in our core values of excellence, integrity, and customer satisfaction.
</p>
</motion.div>
</div>
</div>
</section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

   
    </div>
  );
};

export default About;