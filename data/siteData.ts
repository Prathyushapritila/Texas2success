// Site-wide configuration and content data
// Edit this file to update content across the site

export const siteConfig = {
  name: "Texas 2 Success",
  tagline: "Boutique IT Staffing & Software Development",
  description: "Texas to Success is a boutique IT Staffing consultancy & software development company that provides comprehensive IT solutions.",
  url: "https://www.texas2success.com",
  contact: {
    phone: "469 708 3802",
    email: "info@texas2success.com",
    address: "7800 Preston Rd, STE 125",
    city: "Plano TX 75024",
    fullAddress: "7800 Preston Rd, STE 125, Plano TX 75024"
  },
  social: {
    linkedin: "https://linkedin.com/company/texas2success",
    twitter: "https://twitter.com/texas2success",
    facebook: "https://facebook.com/texas2success"
  }
}

export const services = [
  {
    id: "erp-crm",
    title: "Custom ERP & CRM Software",
    shortDescription: "Custom software solutions for your business needs, including ERP and CRM systems.",
    description: "Streamline your business operations with custom ERP solutions designed to integrate all your core business processes. Our ERP systems help you manage inventory, finance, human resources, and more in one unified platform. Build stronger customer relationships with our custom CRM software.",
    icon: "Database",
    features: [
      "Real-time data integration",
      "Scalable architecture",
      "Custom reporting and analytics",
      "Mobile accessibility",
      "Secure data management",
      "24/7 support and maintenance"
    ]
  },
  {
    id: "salesforce",
    title: "Salesforce Development",
    shortDescription: "Expert Salesforce solutions, consulting, and integration for all business sizes.",
    description: "From initial setup to full deployment, we guide you through every step of your Salesforce implementation. Our team ensures seamless integration with your existing systems and processes. Build custom applications, workflows, and integrations tailored to your specific business needs.",
    icon: "Zap",
    features: [
      "Certified Salesforce professionals",
      "End-to-end project management",
      "Custom solutions for all business sizes",
      "Ongoing support and training",
      "Proven track record",
      "Scalable and flexible solutions"
    ]
  },
  {
    id: "websites-apps",
    title: "Websites & Mobile Apps",
    shortDescription: "Modern, responsive websites and mobile applications to grow your business online.",
    description: "Create stunning, responsive websites that work seamlessly across all devices. From simple landing pages to complex web applications, we build solutions that engage users and drive conversions. Develop native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    features: [
      "Responsive and mobile-first design",
      "Fast loading and optimized performance",
      "SEO-friendly architecture",
      "Cross-platform compatibility",
      "Scalable and maintainable code",
      "Ongoing support and updates"
    ]
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    shortDescription: "Boost your online presence and reach with our SEO and digital marketing services.",
    description: "Improve your website's visibility in search engine results. Our SEO strategies help you rank higher, attract more organic traffic, and generate quality leads. Comprehensive digital marketing campaigns that drive engagement and conversions.",
    icon: "TrendingUp",
    features: [
      "Data-driven strategies",
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Performance tracking and analytics",
      "Conversion rate optimization",
      "Regular reporting and insights"
    ]
  }
]

export const differentiators = [
  {
    title: "DevOps Development",
    description: "We provide DevOps consulting services to help our customers adapt to an environment of continuous integration and deployment, ensuring faster delivery and improved reliability.",
    icon: "Cloud"
  },
  {
    title: "Automated Software",
    description: "We use the latest technologies, toolkits, and modern software development practices to create intelligent, scalable solutions that drive business growth.",
    icon: "Bot"
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored applications designed specifically for your business needs, from enterprise systems to specialized tools that streamline operations.",
    icon: "Code"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that ensure your applications perform optimally while maintaining security and cost-effectiveness.",
    icon: "Server"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation services that modernize your business processes and enhance customer experiences.",
    icon: "Rocket"
  },
  {
    title: "24/7 Support & Maintenance",
    description: "Round-the-clock technical support and maintenance services to ensure your systems run smoothly and efficiently.",
    icon: "Headphones"
  }
]

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    content: "Texas 2 Success transformed our business operations with their custom ERP solution. The team's expertise and dedication are unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, Digital Solutions Group",
    content: "Their Salesforce implementation exceeded our expectations. We've seen a 40% increase in sales productivity since working with them.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Growth Co.",
    content: "The digital marketing campaign they created for us resulted in a 300% increase in qualified leads. Highly recommend!",
    rating: 5
  }
]

export const caseStudies = [
  {
    id: "erp-manufacturing",
    title: "Enterprise ERP for Manufacturing",
    client: "Global Manufacturing Corp",
    category: "ERP & CRM",
    challenge: "Legacy systems causing inefficiencies and data silos across multiple locations.",
    solution: "Developed a custom ERP system integrating inventory, finance, HR, and supply chain management.",
    results: [
      { metric: "40%", label: "Reduction in operational costs" },
      { metric: "60%", label: "Faster order processing" },
      { metric: "100%", label: "Data visibility across departments" }
    ],
    image: "/case-studies/manufacturing.jpg"
  },
  {
    id: "salesforce-retail",
    title: "Salesforce CRM for Retail Chain",
    client: "Retail Excellence Inc",
    category: "Salesforce",
    challenge: "Disconnected customer data across 50+ store locations affecting customer experience.",
    solution: "Implemented Salesforce Sales Cloud and Service Cloud with custom integrations.",
    results: [
      { metric: "35%", label: "Increase in customer satisfaction" },
      { metric: "50%", label: "Faster response times" },
      { metric: "25%", label: "Growth in repeat customers" }
    ],
    image: "/case-studies/retail.jpg"
  },
  {
    id: "mobile-healthcare",
    title: "Mobile App for Healthcare Provider",
    client: "HealthCare Plus",
    category: "Websites & Mobile Apps",
    challenge: "Need for patient engagement platform with appointment scheduling and telemedicine.",
    solution: "Built native iOS and Android apps with secure HIPAA-compliant backend infrastructure.",
    results: [
      { metric: "80%", label: "Patient adoption rate" },
      { metric: "45%", label: "Reduction in no-shows" },
      { metric: "4.8/5", label: "App store rating" }
    ],
    image: "/case-studies/healthcare.jpg"
  },
  {
    id: "seo-ecommerce",
    title: "SEO Strategy for E-commerce",
    client: "Fashion Forward",
    category: "SEO & Digital Marketing",
    challenge: "Low organic visibility and declining traffic affecting online sales.",
    solution: "Comprehensive SEO audit, technical optimization, and content strategy implementation.",
    results: [
      { metric: "250%", label: "Increase in organic traffic" },
      { metric: "180%", label: "Growth in online sales" },
      { metric: "15", label: "Top keyword rankings" }
    ],
    image: "/case-studies/ecommerce.jpg"
  }
]

export const companyValues = [
  {
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions."
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards."
  },
  {
    title: "Partnership",
    description: "We build long-term relationships with our clients, becoming an extension of their team."
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices."
  }
]

export const leadership = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "20+ years of experience in IT consulting and software development. Previously led technology teams at Fortune 500 companies.",
    image: "/leadership/john-smith.jpg"
  },
  {
    name: "Jane Doe",
    role: "CTO",
    bio: "Expert in cloud architecture and DevOps. Passionate about building scalable, high-performance systems.",
    image: "/leadership/jane-doe.jpg"
  },
  {
    name: "Robert Williams",
    role: "VP of Sales",
    bio: "15+ years in B2B technology sales. Specializes in helping businesses transform through technology.",
    image: "/leadership/robert-williams.jpg"
  }
]

