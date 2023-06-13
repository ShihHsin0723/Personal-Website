import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import WorkingExperience from './pages/WorkingExperience';
import Projects from './pages/Projects';
import ContactInfo from './pages/ContactInfo';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "AboutMe",
        element: <AboutMe />,
    },
    {
        path: "Education",
        element: <Education />,
    },
    {
        path: "WorkingExperience",
        element: <WorkingExperience />,
    },
    {
        path: "Projects",
        element: <Projects />,
    },
    {
        path: "ContactInfo",
        element: <ContactInfo />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
