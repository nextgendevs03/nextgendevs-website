import { Code, Server, Database, Activity, BookOpen, Users } from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  topics: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Comprehensive training in modern web development. Master frontend, backend, and database technologies in one complete program.',
    icon: <Code size={32} />,
    topics: ['React.js', 'Node.js', 'MongoDB/SQL', 'TypeScript', 'REST APIs', 'Authentication', 'Deployment'],
    color: 'bg-purple-600',
  },
  {
    id: 2,
    title: 'QA Automation',
    description: 'Learn automated testing with Java and Selenium. Master test frameworks and CI/CD integration.',
    icon: <Activity size={32} />,
    topics: ['Java', 'Selenium WebDriver', 'TestNG', 'Page Object Model', 'API Testing', 'CI/CD Integration'],
    color: 'bg-purple-700',
  },
  {
    id: 3,
    title: 'Interview Preparation',
    description: 'Comprehensive interview preparation covering data structures, algorithms, system design, and coding challenges.',
    icon: <BookOpen size={32} />,
    topics: ['DSA', 'System Design', 'Coding Challenges', 'Problem Solving', 'Time Complexity', 'Best Practices'],
    color: 'bg-purple-800',
  },
  {
    id: 4,
    title: 'Mock Interviews',
    description: 'Practice with real interview scenarios and get detailed feedback from industry experts to improve your performance.',
    icon: <Users size={32} />,
    topics: ['Technical Rounds', 'HR Rounds', 'Live Coding', 'Feedback Sessions', 'Interview Strategy', 'Salary Negotiation'],
    color: 'bg-purple-600',
  },
  {
    id: 5,
    title: 'Career Mentorship',
    description: 'Get personalized guidance for your tech career journey, including internship and job placement support from experienced industry professionals.',
    icon: <Server size={32} />,
    topics: ['Career Planning', 'Internship Support', 'Job Placement', 'Resume Building', 'Portfolio Development', 'Industry Networking'],
    color: 'bg-purple-700',
  },
  {
    id: 6,
    title: 'Project Support',
    description: 'Comprehensive support for both minor and major projects. Get expert guidance on architecture, implementation, and best practices.',
    icon: <Database size={32} />,
    topics: ['Minor Projects', 'Major Projects', 'Code Reviews', 'Architecture Design', 'Performance Optimization', 'Deployment'],
    color: 'bg-purple-800',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive training and career support to help you become a successful
            full stack developer or QA automation engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`card p-6 animate-hover ${activeService?.id === service.id ? 'ring-2 ring-purple-600 shadow-lg transform -translate-y-1' : ''}`}
              onMouseEnter={() => setActiveService(service)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`${service.color} text-white p-3 rounded-lg inline-flex mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.topics.map((topic, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <a 
                  href="#contact" 
                  className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center transition-colors duration-300"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;