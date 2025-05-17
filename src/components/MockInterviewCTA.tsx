import { Calendar } from 'lucide-react';

const MockInterviewCTA = () => {
  return (
    <div className="bg-white py-12 border-t border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                Book Your Mock Interview
              </h3>
              <p className="text-purple-700 text-lg mb-4">
                Practice with industry experts and get detailed feedback
                <br />
                <span className="font-semibold">Limited slots available at ₹299 only!</span>
              </p>
              <ul className="text-purple-600 mb-6">
                <li className="flex items-center mb-2">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Real interview scenarios
                </li>
                <li className="flex items-center mb-2">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Detailed feedback report
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Improvement roadmap
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <a
                href="https://calendly.com/nextgendevs/mock-interview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8"
              >
                Schedule Now
              </a>
              <p className="text-purple-600 text-sm mt-2">*Limited slots available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewCTA;