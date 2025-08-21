import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, Award, Shield, 
  CheckCircle, Phone, Mail, FileText,
  Calculator, DollarSign, Target
} from 'lucide-react';

const BrokerPortal = () => {
  const [activeTab, setActiveTab] = useState('benefits');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    location: '',
    RERA:'',
    message: ''
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

  const benefits = [
    {
      icon: DollarSign,
      title: 'Attractive Commission Structure',
      description: 'Earn up to 2% commission on residential projects and 1.5% on commercial properties'
    },
    {
      icon: Target,
      title: 'Exclusive Leads',
      description: 'Get access to pre-qualified leads and exclusive project launches'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Monthly and annual awards for top performers with additional bonuses'
    },
    {
      icon: Shield,
      title: 'Marketing Support',
      description: 'Complete marketing materials, brochures, and digital assets provided'
    }
  ];

  const requirements = [
    'Valid RERA registration',
    'Minimum 2 years of real estate experience',
    'Strong local market knowledge',
    'Professional approach and ethics',
    'Ability to generate and convert leads'
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner With AGF Developer
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Join our network of successful brokers and channel partners. 
              Grow your business with India's leading real estate developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('register')}
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Become a Partner
              </button>
              <button 
                onClick={() => setActiveTab('benefits')}
                className="border border-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Active Partners' },
              { icon: TrendingUp, number: '₹100Cr+', label: 'Commission Paid' },
              { icon: Award, number: '95%', label: 'Partner Satisfaction' },
              { icon: Shield, number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center border-b">
            {[
              { id: 'benefits', label: 'Benefits' },
              { id: 'requirements', label: 'Requirements' },
              { id: 'process', label: 'Process' },
              { id: 'register', label: 'Register Now' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <benefit.icon className="h-12 w-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'requirements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Partner Requirements
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    To become our channel partner, you need:
                  </h3>
                  <ul className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Partnership Process
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      step: '01',
                      title: 'Application',
                      description: 'Submit your application with required documents'
                    },
                    {
                      step: '02',
                      title: 'Verification',
                      description: 'Our team will verify your credentials and experience'
                    },
                    {
                      step: '03',
                      title: 'Onboarding',
                      description: 'Complete training and start selling our projects'
                    }
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'register' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Register as Partner
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience (Years) *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select Experience</option>
                          <option value="2-5">2-5 Years</option>
                          <option value="5-10">5-10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                           <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          RERA NO 
                        </label>
                        <input
                          type="number"
                          name="RERA NO"
                          value={formData.RERA}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us about your experience and why you want to partner with us..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Our partnership team is here to help you get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 [phone_number]</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>partners@agfdeveloper.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrokerPortal;