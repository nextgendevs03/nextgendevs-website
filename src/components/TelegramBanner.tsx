import { MessageSquare } from 'lucide-react';

const TelegramBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-white mr-3" />
            <p className="text-white font-medium">Join our thriving community of aspiring developers and QA engineers!</p>
          </div>
          <a
            href="https://t.me/nextgendevs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-purple-600 hover:bg-purple-50 py-1 px-4"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TelegramBanner;