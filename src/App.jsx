import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import { Layout } from './components';
import AdminNews from './pages/AdminNews'; // Ensure this is correctly imported

import {
  Home,
  Client,
  PartnerProfile,
  PracticeArea,
  About,
  Contact
} from "./pages";

const secretToken = import.meta.env.VITE_ADMIN_SECRET_TOKEN; // Token from .env

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the root component
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/practice-area',
        element: <PracticeArea />,
      },
      {
        path: '/partner-profile',
        element: <PartnerProfile />,
      },
      {
        path: '/client',
        element: <Client />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/admin/news',
        element: secretToken ? <AdminNews /> : <Navigate to="/"  />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
