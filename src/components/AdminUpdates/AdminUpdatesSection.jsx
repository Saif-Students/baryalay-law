import { Client, Databases } from "appwrite";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_NEWS_COLLECTION_ID;

function AdminUpdatesSection() {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setNewsList(response.documents);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      toast.error("Failed to fetch news.");
    }
  };

  const handlePostNews = async (e) => {
    e.preventDefault();

    if (token !== import.meta.env.VITE_ADMIN_SECRET_TOKEN) {
      toast.error("Invalid token! You are not authorized.");
      return;
    }

    setLoading(true);
    try {
      if (editMode) {
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, editId, {
          title,
          content,
        });
        toast.success("News updated successfully!");
        setEditMode(false);
        setEditId("");
      } else {
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", {
          title,
          content,
          newsDate: new Date().toISOString(),
        });
        toast.success("News posted successfully!");
      }

      setTitle("");
      setContent("");
      fetchNews();
    } catch (error) {
      console.error("Failed to post news:", error);
      toast.error("Failed to post news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (news) => {
    setEditMode(true);
    setEditId(news.$id);
    setTitle(news.title);
    setContent(news.content);
  };

  const handleDelete = async (id) => {
    if (token !== import.meta.env.VITE_ADMIN_SECRET_TOKEN) {
      toast.error("Invalid token! You are not authorized.");
      return;
    }

    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      toast.success("News deleted successfully!");
      fetchNews();
    } catch (error) {
      console.error("Failed to delete news:", error);
      toast.error("Failed to delete news.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-2xl bg-white p-6 shadow-md rounded-lg mb-6">
        <ToastContainer />

        <h2 className="text-2xl font-bold text-center mb-6">
          {editMode ? "Edit Updates" : "Post Updates"}
        </h2>

        <form onSubmit={handlePostNews} className="space-y-4">
          <div>
            <label htmlFor="token" className="block font-medium mb-2">
              Admin Token
            </label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading
              ? editMode
                ? "Updating..."
                : "Posting..."
              : editMode
              ? "Update News"
              : "Post News"}
          </button>
        </form>
      </div>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg ">
        <h3 className="text-xl font-bold p-4 border-b bg-gray-100">
        Updates List
        </h3>
        <ul className="divide-y flex flex-col bg-gray-100 items-center justify-center gap-5">
          {newsList.map((news) => (
            <li key={news.$id} className="p-4  flex justify-between bg-white items-center flex-col gap-5">
              <div>
                <h4 className="text-lg font-semibold">{news.title}</h4>
                <p className="text-gray-600">{news.content}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  className="text-sm text-blue-500 hover:underline"
                  onClick={() => handleEdit(news)}
                >
                  Edit
                </button>
                <button
                  className="text-sm text-red-500 hover:underline"
                  onClick={() => handleDelete(news.$id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminUpdatesSection;
