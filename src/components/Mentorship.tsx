import { Award, CheckCircle, Star, User } from 'lucide-react';
// import placeholder from "../assets/public/PlaceholderImage.webp";
import hardik from "../assets/public/hardik6.jpg";
import kishor from "../assets/public/Kishor.jpg";
import sandesh from "../assets/public/Sandesh.png";

interface Mentor {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Sandesh Uttawar',
    role: 'Full Stack Developer',
    expertise: ['TypeScript', 'React', 'Angular', 'Nodejs', 'DBMS'],
    experience: '8+ years of experience in building enterprise-level full-stack applications',
    image: sandesh,
  },
  {
    id: 2,
    name: 'Hardik Shah',
    role: 'Full Stack Developer',
    expertise: ['TypeScript', 'Node.js', 'React','DBMS', 'AWS'],
    experience: '8+ years of experience in MERN stack development',
    image: hardik,
  },
  {
    id: 3,
    name: 'Kishor Chate',
    role: 'QA Automation Expert',
    expertise: ['Java', 'Selenium', 'TestNG', 'Playwright'],
    experience: '9+ years of experience in automation testing and QA frameworks',
    image: kishor,
  },
];

const features = [
  {
    id: 1,
    title: '1-on-1 Mentorship',
    description: 'Get personalized guidance from industry experts',
    icon: <User className="h-6 w-6 text-white" />,
  },
  {
    id: 2,
    title: 'Mock Interviews',
    description: 'Practice with real interview questions and feedback',
    icon: <Award className="h-6 w-6 text-white" />,
  },
  {
    id: 3,
    title: 'Career Guidance',
    description: 'Get advice on career paths and job opportunities',
    icon: <Star className="h-6 w-6 text-white" />,
  },
  {
    id: 4,
    title: 'Code Reviews',
    description: 'Get your code reviewed by experienced developers',
    icon: <CheckCircle className="h-6 w-6 text-white" />,
  },
];

const Mentorship = () => {
  return (
    <section id="mentorship" className="section bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Mentorship</h2>
            <div className="w-24 h-1 bg-purple-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Our mentors are industry professionals with years of experience in their respective fields.
              They will guide you through your learning journey and help you achieve your career goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-purple-600 rounded-full p-2">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="btn btn-primary inline-flex items-center"
            >
              Connect with a Mentor
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <div className="lg:w-1/2 animate-slide-up">
            <div className="grid grid-cols-1 gap-8">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="card overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover object-center md:h-56"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{mentor.role}</p>
                    <p className="text-gray-600 mb-4">{mentor.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;