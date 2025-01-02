import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import { motion } from "framer-motion";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID; // Replace with your database ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_NEWS_COLLECTION_ID; // Replace with your collection ID

function UpdatesSection() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        setNewsItems(response.documents);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pt-16 lg:pt-28 bg-gray-50">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-primary-color"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Updates
      </motion.h2>

      {/* Ticker Container */}
      <div className="overflow-hidden mt-6 relative border-t border-b border-gray-300 py-3 bg-white shadow-md">
  <motion.div
    className="flex whitespace-nowrap space-x-8 text-sm sm:text-base md:text-lg text-gray-700 font-medium"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    <span>
      <span className="font-semibold font-variant-smallcaps text-primary-color">Baryalay.law</span>{" "}
      successfully advises FinVolution Group, China&apos;s largest NYSE-listed fintech, in setting up and licensing a lending NBFC in Pakistan which will operate its digital nano-lending app &quot;Daira&quot;.
    </span>

    <span>
      <span className="font-semibold font-variant-smallcaps  text-primary-color">Baryalay.law</span>{" "}
      successfully advises FinVolution Group, China&apos;s largest NYSE-listed fintech, in setting up and licensing a lending NBFC in Pakistan which will operate its digital nano-lending app &quot;Daira&quot;.
    </span>
  </motion.div>
</div>


      {/* News Items */}
      <div className="mt-8">
        {loading ? (
          <p>Loading updates...</p>
        ) : newsItems.length > 0 ? (
          newsItems.map((news) => (
            <div key={news.$id} className="bg-white p-4 mb-4 rounded shadow">
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p className="text-gray-600 mt-2">{news.content}</p>
              <p className="text-sm text-gray-500 mt-1">{new Date(news.newsDate).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default UpdatesSection;
