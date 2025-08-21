// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Filter, MapPin, Calendar, Home, Building, ArrowRight } from 'lucide-react';
// import ProjectMap from '../components/ProjectMap';
// import { projects } from '../data/projects';

// const Projects = () => {
//   const [filter, setFilter] = useState('All');
//   const [statusFilter, setStatusFilter] = useState('All');

//   const filteredProjects = projects.filter(project => {
//     const typeMatch = filter === 'All' || project.type === filter;
//     const statusMatch = statusFilter === 'All' || project.status === statusFilter;
//     return typeMatch && statusMatch;
//   });
// const services = [
//     {
//       title: 'Residential Development',
//       description: 'Luxury apartments, villas, and housing complexes designed for modern living',
//       icon: '🏠',
//       features: ['Luxury Apartments', 'Independent Villas', 'Gated Communities', 'Affordable Housing']
//     },
//     {
//       title: 'Commercial Projects',
//       description: 'State-of-the-art office spaces and commercial complexes for businesses',
//       icon: '🏢',
//       features: ['Office Complexes', 'Retail Spaces', 'IT Parks', 'Mixed-Use Developments']
//     },
//     {
//       title: 'Interior Design',
//       description: 'Complete interior solutions to transform your space into a dream home',
//       icon: '🎨',
//       features: ['Custom Interiors', 'Space Planning', 'Furniture Design', 'Décor Consultation']
//     },
//     {
//       title: 'Property Management',
//       description: 'Comprehensive property management services for hassle-free ownership',
//       icon: '🔧',
//       features: ['Maintenance Services', 'Security Management', 'Facility Management', '24/7 Support']
//     },
//     {
//       title: 'Construction Services',
//       description: 'End-to-end construction solutions with quality materials and expert craftsmanship',
//       icon: '🏗️',
//       features: ['Civil Construction', 'Structural Work', 'Quality Control', 'Project Management']
//     },
//     {
//       title: 'Real Estate Consulting',
//       description: 'Expert guidance for property investment and real estate market insights',
//       icon: '📊',
//       features: ['Investment Advisory', 'Market Analysis', 'Property Valuation', 'Legal Assistance']
//     },
//     {
//       title: 'Architecture & Planning',
//       description: 'Innovative architectural designs and comprehensive project planning services',
//       icon: '📐',
//       features: ['Architectural Design', 'Site Planning', '3D Visualization', 'Permit Assistance']
//     },
//     {
//       title: 'Home Loans & Finance',
//       description: 'Flexible financing options and home loan assistance for your dream property',
//       icon: '💰',
//       features: ['Loan Processing', 'Financial Planning', 'EMI Calculator', 'Documentation Support']
//     },
//     {
//       title: 'After-Sales Support',
//       description: 'Dedicated customer support and maintenance services post-purchase',
//       icon: '🛠️',
//       features: ['Warranty Support', 'Maintenance Plans', 'Customer Care', 'Technical Assistance']
//     }
//   ];
//   return (
//     <div className="pt-16">
//       <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Discover premium residential and commercial developments across India
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-8 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <Filter className="h-5 w-5 text-gray-600" />
//               <span className="font-medium text-gray-700">Filter by:</span>
//             </div>
            
//             <div className="flex flex-wrap gap-4">
//               <div className="flex space-x-2">
//                 {['All', 'Residential', 'Commercial'].map((type) => (
//                   <button
//                     key={type}
//                     onClick={() => setFilter(type)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                       filter === type
//                         ? 'bg-primary-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="flex space-x-2">
//                 {['All', 'Ongoing', 'Upcoming'].map((status) => (
//                   <button
//                     key={status}
//                     onClick={() => setStatusFilter(status)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                       statusFilter === status
//                         ? 'bg-gold-500 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="card overflow-hidden group hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="relative">
//                   <img 
//                     src={project.image} 
//                     alt={project.name}
//                     className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 text-sm font-medium rounded-full ${
//                       project.status === 'Ongoing' 
//                         ? 'bg-green-500 text-white' 
//                         : 'bg-blue-500 text-white'
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-white text-gray-800 px-3 py-1 text-sm font-medium rounded-full">
//                       {project.type}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  
//                   <div className="flex items-center text-gray-600 mb-2">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     <span className="text-sm">{project.location}</span>
//                   </div>
                  
//                   <div className="flex items-center text-gray-600 mb-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span className="text-sm">Possession: {project.possession}</span>
//                   </div>
                  
//                   <div className="flex items-center text-gray-600 mb-4">
//                     <Home className="h-4 w-4 mr-1" />
//                     <span className="text-sm">{project.area}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-2xl font-bold text-primary-600">{project.price}</span>
//                   </div>
                  
//                   <Link 
//                     to={`/projects/${project.id}`}
//                     className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
//                   >
//                     View Details <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
//               <p className="text-gray-600">Try adjusting your filters to see more results.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Locations</h2>
//             <p className="text-lg text-gray-600">
//               Explore our projects on the map to find the perfect location for you
//             </p>
//           </div>
//           <ProjectMap projects={filteredProjects} />
//         </div>
//       </section>
//            <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-gold-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent mb-4">
//               <span className="text-sm font-semibold uppercase tracking-wider">What We Offer</span>
//             </div>
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive real estate solutions designed to exceed your expectations and deliver exceptional value
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-gold-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

//                 <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group-hover:border-primary-200 transform group-hover:-translate-y-2">
//                   <div className="relative mb-6">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-gold-500 rounded-xl opacity-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//                     <div className="relative bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
//                       <div className="text-4xl text-center">{service.icon}</div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {service.description}
//                     </p>

//                     <div className="pt-4 border-t border-gray-100">
//                       <ul className="space-y-3">
//                         {service.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
//                             <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center mr-3">
//                               <div className="w-2 h-2 bg-white rounded-full"></div>
//                             </div>
//                             <span className="text-sm font-medium">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="pt-6">
//                       <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
//                         Learn More
//                       </button>
//                     </div>
//                   </div>

//                   <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary-200 to-gold-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-gold-200 to-primary-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>



//           {showCustomSolutionPopup && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               >
//                 <div className="relative bg-gradient-to-br from-primary-600 to-gold-600 p-6 rounded-t-2xl">
//                   <button
//                     onClick={() => setShowCustomSolutionPopup(false)}
//                     className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>

//                   <div className="text-white text-center">
//                     <h3 className="text-2xl font-bold mb-3">Custom Solutions</h3>
//                     <p className="text-lg mb-4 text-primary-100">
//                       Let's create something amazing together
//                     </p>

//                     <div className="relative max-w-md mx-auto">
//                       <img
//                         src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=150&fit=crop"
//                         alt="Custom Solutions"
//                         className="rounded-xl shadow-lg w-full h-20 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
//                     </div>

//                     <div className="mt-4 flex justify-center space-x-6 text-sm">
//                       <div className="flex items-center text-primary-100">
//                         <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
//                         <span>Personalized Service</span>
//                       </div>
//                       <div className="flex items-center text-primary-100">
//                         <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
//                         <span>Expert Consultation</span>
//                       </div>
//                       <div className="flex items-center text-primary-100">
//                         <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
//                         <span>Tailored Solutions</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Get Your Custom Quote</h4>

//                   <form onSubmit={handleCustomSolutionSubmit} className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={customSolutionForm.name}
//                           onChange={handleCustomSolutionInputChange}
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                           placeholder="Your full name"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
//                         <input
//                           type="tel"
//                           name="mobile"
//                           value={customSolutionForm.mobile}
//                           onChange={handleCustomSolutionInputChange}
//                           required
//                           pattern="[0-9]{10}"
//                           maxLength="10"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                           placeholder="Enter 10-digit mobile number"
//                           title="Please enter a valid 10-digit mobile number"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={customSolutionForm.email}
//                           onChange={handleCustomSolutionInputChange}
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                           placeholder="Your email address"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
//                         <select
//                           name="projectName"
//                           value={customSolutionForm.projectName}
//                           onChange={handleCustomSolutionInputChange}
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                         >
//                           <option value="">Select project type</option>
//                           <option value="residential-custom">Custom Residential Project</option>
//                           <option value="commercial-custom">Custom Commercial Project</option>
//                           <option value="interior-custom">Custom Interior Design</option>
//                           <option value="construction-custom">Custom Construction</option>
//                           <option value="mixed-use">Mixed-Use Development</option>
//                           <option value="renovation">Renovation Project</option>
//                           <option value="other">Other Custom Solution</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                       <textarea
//                         name="message"
//                         value={customSolutionForm.message}
//                         onChange={handleCustomSolutionInputChange}
//                         rows={2}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
//                         placeholder="Tell us about your custom requirements..."
//                       ></textarea>
//                     </div>

//                     <div className="flex space-x-4 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => setShowCustomSolutionPopup(false)}
//                         className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center text-sm"
//                       >
//                         Submit Request <Send className="ml-2 h-4 w-4" />
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </motion.div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;