import { Download, BookOpen, File, Video, Link } from 'lucide-react';
import { useState } from 'react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'ebook' | 'cheatsheet' | 'tutorial' | 'video';
  link: string;
  icon: JSX.Element;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'React Hooks Cheatsheet',
    description: 'A comprehensive guide to all React hooks with examples and best practices',
    type: 'cheatsheet',
    link: '#',
    icon: <File size={20} />,
  },
  {
    id: 2,
    title: 'JavaScript Interview Questions',
    description: '200+ JavaScript interview questions with detailed answers',
    type: 'ebook',
    link: '#',
    icon: <BookOpen size={20} />,
  },
  {
    id: 3,
    title: 'Node.js API Design Patterns',
    description: 'Learn best practices for designing scalable Node.js APIs',
    type: 'tutorial',
    link: '#',
    icon: <Link size={20} />,
  },
  {
    id: 4,
    title: 'Selenium WebDriver Masterclass',
    description: 'Complete guide to Selenium WebDriver for Java developers',
    type: 'video',
    link: '#',
    icon: <Video size={20} />,
  },
  {
    id: 5,
    title: 'TypeScript Deep Dive',
    description: 'Comprehensive guide to TypeScript features and advanced patterns',
    type: 'ebook',
    link: '#',
    icon: <BookOpen size={20} />,
  },
  {
    id: 6,
    title: 'Git Command Reference',
    description: 'Quick reference for common Git commands and workflows',
    type: 'cheatsheet',
    link: '#',
    icon: <File size={20} />,
  },
];

const typeColors = {
  ebook: 'bg-blue-100 text-blue-700',
  cheatsheet: 'bg-green-100 text-green-700',
  tutorial: 'bg-yellow-100 text-yellow-700',
  video: 'bg-red-100 text-red-700',
};

const Resources = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredResources = filter
    ? resources.filter((resource) => resource.type === filter)
    : resources;

  return (
    <section id="resources" className="section bg-purple-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Resources</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Access our library of free resources to help you in your learning journey.
            From cheatsheets to tutorials, we've got you covered.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === null
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('ebook')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'ebook'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              E-books
            </button>
            <button
              onClick={() => setFilter('cheatsheet')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'cheatsheet'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              Cheatsheets
            </button>
            <button
              onClick={() => setFilter('tutorial')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'tutorial'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              Tutorials
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'video'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="card animate-hover">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <span className={`${typeColors[resource.type]} text-xs px-2 py-1 rounded-full`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  <span className="mr-2">{resource.icon}</span>
                  Download Resource
                  <Download size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-primary">
            Get More Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;