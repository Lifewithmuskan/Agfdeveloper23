import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Phone, Mail, MapPin, Send } from 'lucide-react';
import {Diagonal} from "../components/Diagonal";

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Residential Development',
            description: 'Luxury apartments, villas, and housing complexes designed for modern living with world-class amenities and sustainable features.',
            icon: '🏠',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
            features: ['Luxury Apartments', 'Independent Villas', 'Gated Communities', 'Affordable Housing', 'Smart Home Integration', 'Green Building Certification'],
            benefits: ['Prime Locations', '24/7 Security', 'Modern Amenities', 'Investment Value'],
            price: 'Starting from ₹45 Lakhs',
            duration: '18-36 Months'
        },
        {
            id: 2,
            title: 'Commercial Projects',
            description: 'State-of-the-art office spaces and commercial complexes designed for businesses to thrive in modern work environments.',
            icon: '🏢',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
            features: ['Office Complexes', 'Retail Spaces', 'IT Parks', 'Mixed-Use Developments', 'Co-working Spaces', 'Business Centers'],
            benefits: ['Strategic Locations', 'High ROI', 'Modern Infrastructure', 'Flexible Spaces'],
            price: 'Starting from ₹1.2 Crores',
            duration: '24-48 Months'
        },
        {
            id: 3,
            title: 'Interior Design',
            description: 'Complete interior solutions to transform your space into a dream home with personalized designs and quality finishes.',
            icon: '🎨',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
            features: ['Custom Interiors', 'Space Planning', 'Furniture Design', 'Décor Consultation', '3D Visualization', 'Turnkey Solutions'],
            benefits: ['Personalized Design', 'Quality Materials', 'Expert Craftsmen', 'Timely Delivery'],
            price: 'Starting from ₹8 Lakhs',
            duration: '2-6 Months'
        },
        {
            id: 4,
            title: 'Property Management',
            description: 'Comprehensive property management services ensuring hassle-free ownership and maximum returns on your investment.',
            icon: '🔧',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
            features: ['Maintenance Services', 'Security Management', 'Facility Management', '24/7 Support', 'Tenant Management', 'Financial Reporting'],
            benefits: ['Hassle-free Ownership', 'Professional Management', 'Regular Maintenance', 'Transparent Reporting'],
            price: 'Starting from ₹5,000/month',
            duration: 'Ongoing Service'
        },
        {
            id: 5,
            title: 'Construction Services',
            description: 'End-to-end construction solutions with quality materials, expert craftsmanship, and adherence to international standards.',
            icon: '🏗️',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
            features: ['Civil Construction', 'Structural Work', 'Quality Control', 'Project Management', 'Safety Compliance', 'Green Construction'],
            benefits: ['Quality Assurance', 'Timely Completion', 'Cost Effective', 'Expert Team'],
            price: 'Starting from ₹1,800/sq ft',
            duration: '12-30 Months'
        },
        {
            id: 6,
            title: 'Real Estate Consulting',
            description: 'Expert guidance for property investment decisions with comprehensive market analysis and legal assistance.',
            icon: '📊',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
            features: ['Investment Advisory', 'Market Analysis', 'Property Valuation', 'Legal Assistance', 'Portfolio Management', 'Risk Assessment'],
            benefits: ['Expert Guidance', 'Market Insights', 'Legal Support', 'Investment Security'],
            price: 'Starting from ₹25,000',
            duration: '1-3 Months'
        }
    ];

    const [contactForm, setContactForm] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [selectedService, setSelectedService] = useState(null);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        setContactForm({ name: '', phone: '', email: '', service: '', message: '' });
    };

    const handleInputChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-16">
            <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gold-600 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-gold-400">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                            Comprehensive real estate solutions designed to exceed your expectations and deliver exceptional value at every step
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Explore Services
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
                                Get Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>
                      <div className="absolute bottom-0 w-full">
                    <Diagonal color="fill-primary-700" flip={true} />
                  </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Service</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From residential developments to commercial projects, we offer comprehensive solutions for all your real estate needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {service.price}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                                        <div className="grid grid-cols-2 gap-1">
                                            {service.features.slice(0, 4).map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-xs text-gray-600">
                                                    <Check className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>Duration: {service.duration}</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="ml-1">4.8/5</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setSelectedService(service)}
                                            className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                                        >
                                            Learn More
                                        </button>
                                        <button className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors">
                                            Get Quote
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="relative">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative h-64">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
                                    <p className="text-lg text-gray-200">{selectedService.price}</p>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {selectedService.description}
                                        </p>

                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">All Features</h4>
                                        <div className="grid grid-cols-1 gap-2 mb-6">
                                            {selectedService.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-gray-700">
                                                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                                        <div className="grid grid-cols-1 gap-2 mb-6">
                                            {selectedService.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-center text-gray-700">
                                                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-3 flex-shrink-0" />
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                            <h5 className="font-semibold text-gray-900 mb-2">Service Details</h5>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between">
                                                    <span>Starting Price:</span>
                                                    <span className="font-medium">{selectedService.price}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Duration:</span>
                                                    <span className="font-medium">{selectedService.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Rating:</span>
                                                    <span className="font-medium">4.8/5 ⭐</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                                                Get Quote Now
                                            </button>
                                            <button className="flex-1 border border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                                                Schedule Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AGF Developer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            With over 15 years of excellence, we bring unmatched expertise and commitment to every project
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🏆', title: '50+ Projects', desc: 'Successfully completed across India' },
                            { icon: '👥', title: '1000+ Families', desc: 'Happy customers and growing' },
                            { icon: '⭐', title: '4.8/5 Rating', desc: 'Customer satisfaction score' },
                            { icon: '🔧', title: '24/7 Support', desc: 'Dedicated customer service' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-gold-50 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-br from-primary-600 to-gold-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                            Contact our experts today and let's discuss how we can help you achieve your real estate goals
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Service Quote</h3>

                            <form onSubmit={handleContactSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={contactForm.phone}
                                            onChange={handleInputChange}
                                            required
                                            pattern="[0-9]{10}"
                                            maxLength="10"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="10-digit mobile number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                                    <select
                                        name="service"
                                        value={contactForm.service}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Development</option>
                                        <option value="commercial">Commercial Projects</option>
                                        <option value="interior">Interior Design</option>
                                        <option value="property-management">Property Management</option>
                                        <option value="construction">Construction Services</option>
                                        <option value="consulting">Real Estate Consulting</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={contactForm.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center"
                                >
                                    Send Inquiry <Send className="ml-2 h-5 w-5" />
                                </button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <p className="text-primary-100 text-lg leading-relaxed">
                                    Our team of experts is ready to help you with any questions about our services.
                                    Contact us today for a free consultation.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Call Us</h4>
                                        <a href="tel:+918987676633" className="text-primary-100 hover:text-white transition-colors">
                                            +91 8987676633
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <a href="mailto:info@agfdeveloper.com" className="text-primary-100 hover:text-white transition-colors">
                                            info@agfdeveloper.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Visit Us</h4>
                                        <p className="text-primary-100">
                                            [Your Office Address]<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-10 rounded-xl p-6">
                                <h4 className="font-semibold mb-3">Business Hours</h4>
                                <div className="space-y-2 text-primary-100">
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

export default Services;