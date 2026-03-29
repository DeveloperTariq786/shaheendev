export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  mainImage: string;
  category: string;
  metadata: {
    country: string;
    projectType: string;
    client: string;
    dateLaunched: string;
  };
  technologies: {
    name: string;
    icon: string;
  }[];
  creatives: string[];
}

export const projects: Project[] = [
  {
    id: 'sag-consultants',
    title: 'SAG Consultants',
    subtitle: 'Where Dreams Meet Reality',
    description: 'Sag Consultants is a dynamic immigration consultancy startup, driven by a passion for helping individuals and families achieve their dreams of living, working, or studying abroad.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/sag-logo.png',
    mainImage: 'https://acmo.in/wp-content/uploads/2023/09/sag-mockup.png',
    category: 'Websites',
    metadata: {
      country: 'Saudi Arabia',
      projectType: 'Website',
      client: 'Sag Consultants',
      dateLaunched: '13 August 2025',
    },
    technologies: [
      { name: 'WordPress', icon: 'https://cdn-icons-png.flaticon.com/512/174/174881.png' },
      { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png' },
      { name: 'HTML/CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },
      { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'Analytics', icon: 'https://cdn-icons-png.flaticon.com/512/825/825561.png' },
    ],
    creatives: [
      'https://acmo.in/wp-content/uploads/2023/09/sag-creative-1.png',
      'https://acmo.in/wp-content/uploads/2023/09/sag-creative-2.png',
      'https://acmo.in/wp-content/uploads/2023/09/sag-creative-3.png',
    ],
  },
  {
    id: 'expedition-to-explore',
    title: 'Expedition To Explore',
    subtitle: 'Adventure Awaits',
    description: 'A comprehensive travel and adventure platform designed for explorers seeking unique experiences worldwide.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/expedition-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Websites',
    metadata: {
      country: 'USA',
      projectType: 'Website',
      client: 'Adventure Co.',
      dateLaunched: '10 January 2025',
    },
    technologies: [
      { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
      { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
    ],
    creatives: [],
  },
  {
    id: 'baramulla-public-school',
    title: 'Baramulla Public School',
    subtitle: 'Excellence in Education',
    description: 'A modern educational portal for Baramulla Public School, facilitating communication between students, parents, and teachers.',
    logo: 'https://acmo.in/wp-content/uploads/2024/04/Baramulla-public-school-logo-by-Acmo-Network-1-scaled-1.webp',
    mainImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Websites',
    metadata: {
      country: 'India',
      projectType: 'Website',
      client: 'BPS Management',
      dateLaunched: '05 March 2024',
    },
    technologies: [
      { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
    ],
    creatives: [],
  },
  {
    id: 'healthcare-management-app',
    title: 'Healthcare Management App',
    subtitle: 'Smart Health Solutions',
    description: 'A robust mobile application for healthcare providers to manage patient records, appointments, and billing seamlessly.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/health-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Apps',
    metadata: {
      country: 'UK',
      projectType: 'Mobile App',
      client: 'HealthFirst',
      dateLaunched: '20 November 2024',
    },
    technologies: [
      { name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' },
    ],
    creatives: [],
  },
  {
    id: 'restaurant-delivery-app',
    title: 'Restaurant Delivery App',
    subtitle: 'Delicious Food Delivered',
    description: 'An intuitive food delivery platform connecting local restaurants with hungry customers in real-time.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/food-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Apps',
    metadata: {
      country: 'Canada',
      projectType: 'Mobile App',
      client: 'EatLocal',
      dateLaunched: '15 August 2024',
    },
    technologies: [
      { name: 'React Native', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    ],
    creatives: [],
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    subtitle: 'Track Your Progress',
    description: 'A comprehensive fitness application that tracks workouts, nutrition, and health metrics for active individuals.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/fitness-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1526506114868-4eb06e3609ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Apps',
    metadata: {
      country: 'Australia',
      projectType: 'Mobile App',
      client: 'FitLife',
      dateLaunched: '12 June 2024',
    },
    technologies: [
      { name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' },
    ],
    creatives: [],
  },
  {
    id: 'enterprise-ecommerce',
    title: 'Enterprise E-Commerce',
    subtitle: 'Scalable Online Shopping',
    description: 'A high-performance e-commerce platform built for large-scale retail operations with complex inventory management.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/ecom-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Websites',
    metadata: {
      country: 'USA',
      projectType: 'E-Commerce',
      client: 'RetailGiant',
      dateLaunched: '14 January 2025',
    },
    technologies: [
      { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    ],
    creatives: [],
  },
  {
    id: 'real-estate-portal',
    title: 'Real Estate Portal',
    subtitle: 'Find Your Dream Home',
    description: 'A comprehensive real estate listing and management portal with advanced search and map integration.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/estate-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Websites',
    metadata: {
      country: 'UAE',
      projectType: 'Portal',
      client: 'LuxuryEstates',
      dateLaunched: '30 December 2024',
    },
    technologies: [
      { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
    ],
    creatives: [],
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website',
    subtitle: 'Professional Digital Presence',
    description: 'A sleek and modern corporate website designed to showcase services and build brand authority.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/corp-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Websites',
    metadata: {
      country: 'Singapore',
      projectType: 'Website',
      client: 'GlobalCorp',
      dateLaunched: '12 November 2024',
    },
    technologies: [
      { name: 'WordPress', icon: 'https://cdn-icons-png.flaticon.com/512/174/174881.png' },
    ],
    creatives: [],
  },
  {
    id: 'logistics-management-system',
    title: 'Logistics Management System',
    subtitle: 'Streamline Your Supply Chain',
    description: 'A powerful logistics platform for tracking shipments, managing fleets, and optimizing delivery routes.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/logistics-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Apps',
    metadata: {
      country: 'Netherlands',
      projectType: 'Web App',
      client: 'LogiTrans',
      dateLaunched: '05 January 2025',
    },
    technologies: [
      { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    ],
    creatives: [],
  },
  {
    id: 'customer-support-bot',
    title: 'Customer Support Bot',
    subtitle: '24/7 Intelligent Support',
    description: 'An AI-powered chatbot designed to handle customer inquiries, provide instant support, and escalate complex issues.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/bot-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'AI Agents',
    metadata: {
      country: 'Global',
      projectType: 'AI Agent',
      client: 'SupportAI',
      dateLaunched: '01 February 2025',
    },
    technologies: [
      { name: 'OpenAI', icon: 'https://cdn-icons-png.flaticon.com/512/10449/10449846.png' },
      { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    ],
    creatives: [],
  },
  {
    id: 'sales-assistant-ai',
    title: 'Sales Assistant AI',
    subtitle: 'Boost Your Sales',
    description: 'An intelligent sales assistant that identifies leads, automates follow-ups, and provides sales insights.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/sales-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'AI Agents',
    metadata: {
      country: 'Germany',
      projectType: 'AI Agent',
      client: 'SalesPro',
      dateLaunched: '18 October 2024',
    },
    technologies: [
      { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    ],
    creatives: [],
  },
  {
    id: 'data-analysis-agent',
    title: 'Data Analysis Agent',
    subtitle: 'Insights from Data',
    description: 'An AI agent that processes large datasets to provide actionable insights and visual reports for businesses.',
    logo: 'https://acmo.in/wp-content/uploads/2023/09/data-logo.png',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'AI Agents',
    metadata: {
      country: 'France',
      projectType: 'AI Agent',
      client: 'DataMind',
      dateLaunched: '22 September 2024',
    },
    technologies: [
      { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    ],
    creatives: [],
  },
];
