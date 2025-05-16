import { MessageSquare, Send, Code, Headphones } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thanks for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-purple-100 text-lg">
            Have questions about our courses or mentorship programs? 
            We're here to help you kickstart your tech career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-right">
            <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Web Development">Web Development</option>
                      <option value="QA Automation">QA Automation</option>
                      <option value="Mentorship">Mentorship</option>
                      <option value="Mock Interview">Mock Interview</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="animate-slide-left">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="mb-8 text-purple-100">
                Scan the QR code to connect with us on WhatsApp or Telegram for quick responses to your queries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 p-2 rounded-full mr-3">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold">WhatsApp</h4>
                  </div>
                  <div className="bg-white p-3 rounded-xl mb-4">
                    {/* This would be a QR code image in a real implementation */}
                    <div className="aspect-square w-full bg-gray-100 flex items-center justify-center rounded-lg">
                      <div className="text-gray-800 text-center p-6">
                        <Code size={48} className="mx-auto mb-2 text-purple-600" />
                        <p className="text-sm font-medium">WhatsApp QR Code</p>
                        <p className="text-xs text-gray-500 mt-1">Scan to chat with us</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Open WhatsApp
                  </button>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 p-2 rounded-full mr-3">
                      <Headphones className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold">Telegram</h4>
                  </div>
                  <div className="bg-white p-3 rounded-xl mb-4">
                    {/* This would be a QR code image in a real implementation */}
                    <div className="aspect-square w-full bg-gray-100 flex items-center justify-center rounded-lg">
                      <div className="text-gray-800 text-center p-6">
                        <Code size={48} className="mx-auto mb-2 text-purple-600" />
                        <p className="text-sm font-medium">Telegram QR Code</p>
                        <p className="text-xs text-gray-500 mt-1">Scan to join our channel</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Open Telegram
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4">Our Location</h4>
                <p className="mb-2">
                  <strong>Address:</strong> Office no 02, Shree siddhi Mansi hights,
Kapil Nagar, Mhalunge, Pune
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@nextgendevs.in
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +91 8482960186
                </p>
                <p>
                  <strong>Hours:</strong> Monday - Friday, 9am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;