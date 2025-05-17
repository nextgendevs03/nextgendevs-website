import { ArrowRight, Code2, BookOpen, BugOff } from 'lucide-react';
import TelegramBanner from './TelegramBanner';

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800">
      <TelegramBanner />
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Master Web Development & QA Automation
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-lg">
              Professional training for freshers and career transitioners.
              Transform your career with expert mentorship and hands-on projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="btn btn-secondary bg-transparent border-white text-white hover:bg-purple-700">
                Explore Courses
              </a>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Code2 className="text-purple-300" size={20} />
                <span className="text-purple-100">React, Node.js, TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <BugOff className="text-purple-300" size={20} />
                <span className="text-purple-100">Java, Selenium</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-slide-up">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 -right-4 w-full h-full bg-purple-500 rounded-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-purple-800 rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500 font-mono flex-1 text-center">index.js</div>
                </div>
                <div className="p-6 text-gray-800">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                      <span className="text-purple-600">import</span> <span className="text-blue-600">React</span> <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;<br/><br/>
                      <span className="text-purple-600">function</span> <span className="text-yellow-600">App</span>() {"{"}
                      <br/>&nbsp;&nbsp;<span className="text-purple-600">return</span> (
                      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-600">div</span>&gt;
                      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-600">h1</span>&gt;Hello, NextGenDevs!&lt;/<span className="text-blue-600">h1</span>&gt;
                      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-600">p</span>&gt;Welcome to your coding journey&lt;/<span className="text-blue-600">p</span>&gt;
                      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-600">div</span>&gt;
                      <br/>&nbsp;&nbsp;);
                      <br/>{"}"}
                      <br/><br/><span className="text-purple-600">export</span> <span className="text-purple-600">default</span> <span className="text-yellow-600">App</span>;
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute bottom-4 right-8 transform translate-y-1/2">
                <div className="bg-purple-600 text-white p-3 rounded-full shadow-lg">
                  <BookOpen size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;