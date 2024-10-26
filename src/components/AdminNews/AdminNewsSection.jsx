import { Client, Databases } from "appwrite";
// import { i } from "framer-motion/client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);


const databases = new Databases(client);
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID; // Replace with your database ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_NEWS_COLLECTION_ID; // Replace with your collection ID
console.log(DATABASE_ID, COLLECTION_ID)

function AdminNewsSection() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const handlePostNews = async (e) => {
    e.preventDefault();

    if (token !== import.meta.env.VITE_ADMIN_SECRET_TOKEN) {
      toast.error("Invalid token! You are not authorized.");
      return;
    }

    setLoading(true);
    try {
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", {
        title,
        content,
        newsDate: new Date().toISOString(),
      });

      toast.success("News posted successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Failed to post news:", error);
      toast.error("Failed to post news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-white shadow-md rounded-lg">
        <ToastContainer />

        <h2 className="text-3xl font-semibold text-center mb-4">
          Post News & Insights
        </h2>

        <form onSubmit={handlePostNews} className="space-y-6">
          <div>
            <label htmlFor="token" className="block font-medium mb-2">
              Admin Token
            </label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin token"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter news title"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter news content"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post News"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminNewsSection;
