import { useState } from 'react';
import PopUpAlert from '../components/PopUpAlert';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Contact = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowDialog(true);
    }, 1500);
  }

  function handleDialog() {
    setShowDialog(false);
  }

  function scrollToTOp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Get in Touch with <span className="text-red-400">SwiftBazaar</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> Kathmandu-30, Bagmati Pradesh, Mahakabi Marg</p>
              <p><strong>📧 Email:</strong> support@swiftBazaar.com</p>
              <p><strong>📞 Phone:</strong> +977-9814914914</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            <div>
              <label className="block text-white mb-1">Your Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-linear-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer flex justify-center items-center">
              {
                isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-2xl" /> : "Send Message"
              }
            </button>
          </form>
        </div>
      </div>
      <PopUpAlert showDialog={showDialog} handleDialog={handleDialog} scrollToTOp={scrollToTOp} />
    </div>
  );
};

export default Contact;