import React, { useState } from 'react';
import {Diagonal} from "../components/Diagonal"
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, 
  Send, Building2, MessageCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectInterest: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9211723338'],
      description: 'Mon-Sat 9:00 AM - 7:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@agfdeveloper.com', 'sales@agfdeveloper.com'],
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Assotech Business Cresterra, Tower-1, Office No. 917 & 918, 9th Floor, Sector 135, Noida, Uttar Pradesh 201305', 'India'],
      description: 'Visit us for consultation'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 5:00 PM'],
      description: 'Always here to help'
    }
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
                                 Get In  <span className="text-gold-400">Touch</span>
                             </h1>
     
           <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                          Ready to find your dream property? Our team is here to help you every step of the way.

           </p>
           
         </motion.div>
       </div>
               
             <div className="absolute bottom-0 w-full">
         <Diagonal color="fill-primary-700" flip={true} />
       </div>
       
     </section>
     

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Interest
                    </label>
                    <select
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Project</option>
                      <option value="AGF Luxury Residences">AGF Luxury Residences</option>
                      <option value="AGF Commercial Hub">AGF Commercial Hub</option>
                      <option value="AGF Green Valley">AGF Green Valley</option>
                      <option value="AGF Tech Park">AGF Tech Park</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Head Office Location</p>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Head Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-700">[address]</p>
                      <p className="text-gray-700">India</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <p className="text-gray-700">+91 [phone_number]</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3" />
                    <p className="text-gray-700">info@agfdeveloper.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you find the perfect property. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+91[phone_number]" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:info@agfdeveloper.com" 
              className="border border-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;