import React, { useState } from 'react';
import { MessageCircle, Calendar, Award, CheckCircle, Star, User, X } from "lucide-react";
import placeholder from "../assets/public/PlaceholderImage.webp";
// import Er. Lakhan Lal Gupta from "../src/assets/public/Er. Lakhan Lal Gupta.jpeg;
import hardik from "../assets/public/hardik6.jpg";
import kishor from "../assets/public/Kishor.jpg";
import Sandesh from "../assets/public/Sandesh.png";

import {
  FaUserTie,
  FaChartLine,
  FaAward,
  FaStar,
  FaUser,
  FaClipboardCheck,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserTie className="text-purple-600 text-3xl" />,
    value: "4+",
    label: "Expert Mentors",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
    value: "560+",
    label: "Students Helped",
  },
  {
    icon: <FaAward className="text-green-600 text-3xl" />,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: <FaStar className="text-yellow-500 text-3xl" />,
    value: "4.9",
    label: "Avg Rating",
  },
];

const features = [
  {
    id: 1,
    icon: <FaUser className="text-purple-600 text-xl" />,
    title: "1-on-1 Mentorship",
    desc: "Get personalized guidance from industry experts",
    color: "bg-purple-100",
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-blue-600 text-xl" />,
    title: "Mock Interviews",
    desc: "Practice with real interview questions and feedback",
    color: "bg-blue-100",
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-green-600 text-xl" />,
    title: "Career Guidance",
    desc: "Get advice on career paths and job opportunities",
    color: "bg-green-100",
  },
  {
    id: 4, 
    icon: <FaCode className="text-orange-600 text-xl" />,
    title: "Code Reviews",
    desc: "Get your code reviewed by experienced developers",
    color: "bg-orange-100",
  },
];

interface Mentor {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  image: string;
  about: string;
  achievements?: string[];
  studentsHelped: string;
  rating?: number;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Sandesh Uttawar',
    role: 'Full Stack Developer',
    expertise: ['TypeScript', 'React', 'Angular', 'Nodejs', 'DBMS'],
    experience: '8+ years of experience in building enterprise-level full-stack applications',
    image: Sandesh,
    about: "Full Stack Developer with strong expertise in scalable web and enterprise applications.",
    achievements: [
      "Developed and maintained multiple high-traffic web applications",
      "Led a team of developers in building a complex e-commerce platform",
      "Contributed to open-source projects in the React and Node.js communities"
    ],
    studentsHelped: "150+",
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Hardik Shah',
    role: 'Full Stack Developer',
    expertise: ['TypeScript', 'Node.js', 'React','DBMS', 'AWS'],
    experience: '8+ years of experience in MERN stack development',
    image: hardik,
    about: "Full Stack Developer with a focus on building scalable and maintainable web applications.",
    achievements: [
      "Built and deployed multiple production-grade applications using the MERN stack",
      "Optimized application performance and scalability for high user loads",
      "Mentored junior developers in best practices and modern development techniques"
    ],
    studentsHelped: "200+",
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Kishor Chate',
    role: 'QA Automation Expert',
    expertise: ['Java', 'Selenium', 'TestNG', 'Playwright'],
    experience: '9+ years of experience in automation testing and QA frameworks',
    image: kishor,
    about: "QA Automation Expert with a passion for ensuring software quality through automated testing.",
    achievements: [
      "Designed and implemented automated testing frameworks for multiple projects",
      "Improved test coverage and reduced manual testing efforts by 70%",
      "Conducted training sessions on automation tools and best practices"
    ],
    studentsHelped: "100+",
    rating: 4.8,
  },

  {

  id: 4,
  name: 'Er. Lakhan Lal Gupta',
  role: 'Software Engineer',
  expertise: ['Data Science', 'Python', 'Machine Learning', 'AI'],
  experience: 'Certified Data Scientist from Vkonex AI Research (IIT Bombay)',
  image: placeholder,
  about: "Creator of Codelopment, a popular YouTube channel helping engineering students with project ideas and coding resources.",
  achievements: [
    "Certified Data Scientist from Vkonex AI Research (IIT Bombay)",
    "Creator of Codelopment YouTube channel"
  ],
  studentsHelped: "1000+",
  rating: 5.0,
},
];

const Mentorship = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (

    <div className="bg-gray-50 py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Expert Mentorship
      </h2>
      <div className="h-1 w-20 bg-purple-700 mx-auto mt-2 mb-6 rounded-full"></div>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Learn from industry professionals with years of experience. Get
        personalized guidance and accelerate your career growth with our expert
        mentors.
      </p>

      {/* Statistic {stats} Section 1st part  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex flex-col items-center">
              {stat.icon}
              <p className="text-2xl font-bold text-gray-900 mt-3">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section 2nd part */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-start gap-4 text-left"
          >
            {/* Icon with colored circle background */}
            <div className={`p-3 rounded-full ${feature.color}`}>
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

<h3 className="text-4xl font-bold text-center py-4 mb-8">Meet Our Expert Mentors</h3>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {mentors.map((mentor) => (
    <div
      key={mentor.id}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-transform hover:-translate-y-1"
      onClick={() => setSelectedMentor(mentor)}
    >
      <div className="w-full aspect-[3/2] overflow-hidden rounded-t-xl">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{mentor.name}</h4>
        <p className="text-purple-600">{mentor.role}</p>
        <p className="text-sm text-gray-600 mt-1">{mentor.experience}</p>
      </div>
    </div>
  ))}
</div>

      {selectedMentor && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh] shadow-xl">
           
           
           <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedMentor(null)}
            >
              <X className="w-5 h-5" />
            </button>             

           
            <div className="w-full flex justify-center mb-3">
              <img 
                src={selectedMentor.image} 
                alt={selectedMentor.name} 
                className="w-36 h-44 object-cover object-top rounded-lg shadow-md bg-gray-100"
              />
            </div>

           
            <h3 className="text-lg font-bold text-center">{selectedMentor.name}</h3>
            <p className="text-purple-600 text-sm text-center">{selectedMentor.role}</p>
            <p className="text-gray-600 text-sm text-center">{selectedMentor.experience}</p>
            
           
            <div className="flex justify-center mt-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.round(selectedMentor.rating ?? 0) ? "fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>

            <h4 className="mt-4 font-semibold text-left">About:</h4>
            <div className="mt-2 text-sm leading-relaxed text-gray-700 text-left">
           {selectedMentor.about}
           </div>

            
            <h4 className="mt-4 font-semibold text-left">Expertise:</h4>
            <div className="flex gap-1.5 flex-wrap mt-2 justify-start">
            {selectedMentor.expertise.map((skill: string, index: number) => (
           <span 
           key={index} 
           className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs"
        >
        {skill}
        </span>
  ))}
     </div>

           
            <h4 className="mt-4 font-semibold">Key Achievements:</h4>
            <ul className="mt-2 space-y-2">
              {selectedMentor.achievements?.map((achievement: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner text-center">
              <p className="text-sm font-medium text-gray-800">
                🎓 {selectedMentor.studentsHelped} Students Helped
              </p>
              <p className="mt-2 text-sm font-semibold text-green-600">
               Available for Mentorship
              </p>
            </div>

            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-center"
              >
                Connect on Whatsapp
              </a>
              <a 
                href="#" 
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-center"
              >
                Book Session
              </a>
            </div>

          </div>
        </div>
      )}

 <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 px-6 rounded-2xl shadow-lg max-w-5xl mx-auto my-10">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>

          {/* Subtext */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Connect with our expert mentors and get personalized guidance for your
          career growth. Book a free consultation session today!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-white text-purple-700 font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Connect on WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 border border-white px-5 py-2 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  </div>
);
};

export default Mentorship;