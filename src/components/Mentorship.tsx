import { Award, CheckCircle, Star, User, Users, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import hardik from "../assets/public/hardik6.jpg";
import kishor from "../assets/public/Kishor.jpg";
import sandesh from "../assets/public/Sandesh.png";
import erLakhanLalGupta from "../assets/public/Er.Lakhan Lal Gupta.jpg";


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
    image: sandesh,
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
  image: erLakhanLalGupta,
  about: "Creator of Codelopment, a popular YouTube channel helping engineering students with project ideas and coding resources.",
  achievements: [
    "Certified Data Scientist from Vkonex AI Research (IIT Bombay)",
    "Creator of Codelopment YouTube channel"
  ],
  studentsHelped: "1000+",
  rating: 5.0,
},
];

const features = [
  {
    id: 1,
    title: '1-on-1 Mentorship',
    description: 'Get personalized guidance from industry experts',
    icon: <User className="h-6 w-6 text-purple-500" />,
  },
  {
    id: 2,
    title: 'Mock Interviews',
    description: 'Practice with real interview questions and feedback',
    icon: <Award className="h-6 w-6 text-blue-500"  />,
  },
  {
    id: 3,
    title: 'Career Guidance',
    description: 'Get advice on career paths and job opportunities',
    icon: <Star className="h-6 w-6 text-green-500" />,
  },
  {
    id: 4,
    title: 'Code Reviews',
    description: 'Get your code reviewed by experienced developers',
    icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
  },
];

const Mentorship = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (
    <section id="mentorship" className="section bg-gray-50 py-16">
      <div className="container max-w-6xl mx-auto px-6">
      
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Expert Mentorship</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 text-center mb-12">
          Learn from industry professionals with years of experience.Get personalized  guidance and acceierate your career growth with our expert mentors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">4+</h3>
            <h3 className="text-xl font-semibold">Expert Mentors</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">560+</h3>
            <h3 className="text-xl font-semibold">Students Helped</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Award className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">95%</h3>
            <h3 className="text-xl font-semibold">Success Rate</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Star className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">4.9</h3>
            <h3 className="text-xl font-semibold">Avg Rating</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
              <div className="bg-[color] w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
<h3 className="text-4xl font-bold text-center mb-10">Meet Our Expert Mentors</h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor) => (
    <div
      key={mentor.id}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl"
      onClick={() => setSelectedMentor(mentor)}
    >

      <img
        src={mentor.image}
        alt={mentor.name}
         className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold">{mentor.name}</h4>
        <p className="text-purple-600">{mentor.role}</p>
        <p className="text-sm text-gray-600 mt-1">{mentor.experience}</p>
        <div className="mt-2 text-sm text-gray-700">
       <span className="font-semibold">Rating:</span>{" "}
       {"⭐".repeat(mentor.rating ?? 0)}
       {"☆".repeat(5 - (mentor.rating ?? 0))} 
       <span className="ml-1">({mentor.rating ?? "N/A"}/5)</span>
      </div>

    <p className="mt-1 text-sm text-gray-700">
      <span className="font-semibold">Expertise:</span>{" "}
     {(Array.isArray(mentor.expertise) ? mentor.expertise : [mentor.expertise]).join(", ")}
    </p>
       
      </div>
    </div>
  ))}
</div>
      {selectedMentor && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
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
<p className="mt-1 font-medium text-sm text-center">⭐ {selectedMentor.rating}</p>
<div className="mt-2 text-sm leading-relaxed text-center">{selectedMentor.about}</div>

<h4 className="mt-3 font-semibold text-center">Expertise:</h4>
<div className="flex gap-1.5 flex-wrap mt-2 justify-center">
  {selectedMentor.expertise.map((skill, index) => (
    <span 
      key={index} 
      className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs"
    >
      {skill}
    </span>
  ))}
</div>

            <h4 className="mt-4 font-semibold">Achievements:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {selectedMentor.achievements?.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              🎓 {selectedMentor.studentsHelped} students helped
            </p>

            <div className="mt-6 flex gap-4">
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Connect on Whatsapp
              </a>
              <a 
                href="#" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Mentorship;