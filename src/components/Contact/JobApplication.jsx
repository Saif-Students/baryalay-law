import emailjs from "@emailjs/browser"; 
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Toast styles

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function JobApplication() {
  const [isCareerForm, setIsCareerForm] = useState(false);
  const [cvLink, setCvLink] = useState("");
  const [personalStatement, setPersonalStatement] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const notifySuccess = (message) => toast.success(message, { position: "top-right" });
  const notifyError = (message) => toast.error(message, { position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: "User", // Replace with sender's name input if available
      is_career_form: isCareerForm,
      personal_statement: isCareerForm ? personalStatement : "",
      cv_link: isCareerForm ? cvLink : "",
      inquiry_message: !isCareerForm ? inquiryMessage : "",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      notifySuccess("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      notifyError("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        className="max-w-2xl w-full mx-auto p-8 bg-white shadow-md rounded-lg"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <ToastContainer /> {/* Toast Container for notifications */}

        <h2 className="text-3xl font-semibold text-primary-color mb-4 text-center">
          {isCareerForm ? "Apply for a Job" : "General Inquiry"}
        </h2>

        {isCareerForm && (
          <p className="text-center text-primary-color mb-6">
            To apply for a job, please provide your CV link and a brief personal statement.
          </p>
        )}

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setIsCareerForm(false)}
            className={`px-4 py-2 rounded-md ${
              !isCareerForm ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            General Inquiry
          </button>
          <button
            onClick={() => setIsCareerForm(true)}
            className={`px-4 py-2 rounded-md ${
              isCareerForm ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Career Application
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isCareerForm && (
            <>
              <div>
                <label className="block font-medium mb-2" htmlFor="cvLink">
                  CV or Drive Link
                </label>
                <input
                  type="url"
                  id="cvLink"
                  value={cvLink}
                  onChange={(e) => setCvLink(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the link to your CV..."
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2" htmlFor="personalStatement">
                  Personal Statement
                </label>
                <textarea
                  id="personalStatement"
                  rows="5"
                  value={personalStatement}
                  onChange={(e) => setPersonalStatement(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write a brief personal statement..."
                  required
                />
              </div>
            </>
          )}

          {!isCareerForm && (
            <div>
              <label className="block font-medium mb-2" htmlFor="inquiryMessage">
                Your Inquiry
              </label>
              <textarea
                id="inquiryMessage"
                rows="5"
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                required
              />
            </div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default JobApplication;
