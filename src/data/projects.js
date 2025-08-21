export const projects = [
  {
    id: 1,
    name: "AGF Luxury Residences",
    type: "Residential",
    status: "Ongoing",
    location: "Gurgaon, Haryana",
    coordinates: [28.4595, 77.0266],
    price: "₹85 Lakh - ₹2.5 Cr",
    area: "1200-3500 sq ft",
    possession: "Dec 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    ],
    description: "Premium residential project featuring modern amenities and world-class architecture.",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Garden", "Security", "Parking"],
    floorPlans: ["2 BHK", "3 BHK", "4 BHK"],
    highlights: [
      "Prime location with excellent connectivity",
      "Modern architecture with premium finishes",
      "24/7 security and power backup",
      "Green building certified"
    ]
  },
  {
    id: 2,
    name: "AGF Commercial Hub",
    type: "Commercial",
    status: "Upcoming",
    location: "Noida, UP",
    coordinates: [28.5355, 77.3910],
    price: "₹45 Lakh - ₹1.2 Cr",
    area: "500-2000 sq ft",
    possession: "Mar 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
    ],
    description: "State-of-the-art commercial complex designed for modern businesses.",
    amenities: ["High-speed Elevators", "Central AC", "Power Backup", "Parking", "Food Court", "Conference Rooms"],
    floorPlans: ["Office Spaces", "Retail Shops", "Food Court"],
    highlights: [
      "Strategic location in business district",
      "Modern infrastructure with smart building features",
      "Flexible office spaces",
      "Excellent ROI potential"
    ]
  },
  {
    id: 3,
    name: "AGF Green Valley",
    type: "Residential",
    status: "Ongoing",
    location: "Pune, Maharashtra",
    coordinates: [18.5204, 73.8567],
    price: "₹65 Lakh - ₹1.8 Cr",
    area: "1000-2800 sq ft",
    possession: "Jun 2025",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800"
    ],
    description: "Eco-friendly residential project surrounded by lush greenery.",
    amenities: ["Eco Park", "Jogging Track", "Kids Play Area", "Solar Panels", "Rainwater Harvesting", "Organic Garden"],
    floorPlans: ["1 BHK", "2 BHK", "3 BHK"],
    highlights: [
      "Eco-friendly construction with green certification",
      "Surrounded by natural landscape",
      "Energy-efficient design",
      "Close to IT hubs and educational institutions"
    ]
  },
  {
    id: 4,
    name: "AGF Tech Park",
    type: "Commercial",
    status: "Upcoming",
    location: "Bangalore, Karnataka",
    coordinates: [12.9716, 77.5946],
    price: "₹55 Lakh - ₹2 Cr",
    area: "800-3000 sq ft",
    possession: "Sep 2026",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    ],
    description: "Premium tech park designed for IT companies and startups.",
    amenities: ["High-speed Internet", "Cafeteria", "Gym", "Parking", "Conference Halls", "Recreation Area"],
    floorPlans: ["Co-working Spaces", "Private Offices", "Meeting Rooms"],
    highlights: [
      "Located in prime IT corridor",
      "State-of-the-art infrastructure",
      "Flexible workspace solutions",
      "24/7 operational support"
    ]
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByType = (type) => {
  return projects.filter(project => project.type === type);
};