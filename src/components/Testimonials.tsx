import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  image: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ankit Sharma',
    role: 'Frontend Developer',
    company: 'TechSolutions Inc.',
    message: 'The React course was incredible! I went from knowing nothing about React to building complex applications. The mentorship program was particularly helpful.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
  },
  {
    id: 2,
    name: 'Meera Patel',
    role: 'QA Engineer',
    company: 'Global Software Ltd.',
    message: 'The Java Selenium course transformed my career. I was able to transition from manual testing to automation. The practical examples and projects were excellent.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Full Stack Developer',
    company: 'Innovate Technologies',
    message: 'I took both the React and Node.js courses, and they were exceptional. The instructors were knowledgeable and the projects were practical and relevant to industry needs.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 4,
  },
  {
    id: 4,
    name: 'Shreya Gupta',
    role: 'Backend Developer',
    company: 'DataTech Systems',
    message: 'The Node.js and MongoDB course helped me gain confidence in backend development. The mentors were always available to help with my questions and guide me through challenges.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Hear from our graduates who have transformed their careers
            through our training programs and mentorship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-purple-100">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover object-center mb-4 md:mb-0 md:mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-purple-600">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-lg italic">
                      "{testimonial.message}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-purple-100 transition-colors duration-300"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} className="text-purple-600" />
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-purple-100 transition-colors duration-300"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} className="text-purple-600" />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;