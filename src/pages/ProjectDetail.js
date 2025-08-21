import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Diagonal} from "../components/Diagonal";
import { 
  ArrowLeft, MapPin, Calendar, Home, Building2, 
  CheckCircle, Phone, Mail, Download, Share2,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import ProjectMap from '../components/ProjectMap';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-16">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.name}
              </h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{project.location}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className={`px-4 py-2 rounded-full font-medium ${
                project.status === 'Ongoing' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
              <button className="p-2 text-gray-600 hover:text-primary-600">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
              <div className="absolute bottom-0 w-full">
            <Diagonal color="fill-primary-700" flip={true} />
          </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src={project.gallery[currentImageIndex]} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Building2 className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{project.type}</div>
                    <div className="text-sm text-gray-600">Property Type</div>
                  </div>
                  <div className="text-center">
                    <Home className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{project.area}</div>
                    <div className="text-sm text-gray-600">Area Range</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{project.possession}</div>
                    <div className="text-sm text-gray-600">Possession</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{project.location}</div>
                    <div className="text-sm text-gray-600">Location</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <ul className="space-y-2 mb-8">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Floor Plans</h3>
                <div className="flex flex-wrap gap-2">
                  {project.floorPlans.map((plan, index) => (
                    <span 
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                <ProjectMap 
                  projects={[project]} 
                  center={project.coordinates} 
                  zoom={12} 
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {project.price}
                  </div>
                  <div className="text-gray-600">Starting Price</div>
                </div>

                <div className="space-y-4 mb-6">
                  <button 
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full btn-primary"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Request Callback
                  </button>
                  
                  <button className="w-full btn-secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </button>
                </div>

                {showContactForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t pt-6"
                  >
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Message"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      ></textarea>
                      <button type="submit" className="w-full btn-primary">
                        Submit Request
                      </button>
                    </form>
                  </motion.div>
                )}

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Sales Team</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+91 [phone_number]</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>[email]@agfdeveloper.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;