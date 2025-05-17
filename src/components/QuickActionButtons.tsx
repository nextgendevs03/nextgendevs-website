import { MessageCircle, Calendar, BookOpen } from 'lucide-react';

const QuickActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="https://calendly.com/nextgendevs/mock-interview"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Book Mock Interview"
      >
        <Calendar className="h-6 w-6" />
      </a>
      <a
        href="#resources"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Free Resources"
      >
        <BookOpen className="h-6 w-6" />
      </a>
    </div>
  );
};

export default QuickActionButtons;