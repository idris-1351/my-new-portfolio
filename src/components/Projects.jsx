import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Projects() {
  return (
    <div className="p-10">
      {/* <Header /> */}
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-600 mt-2">Here are some of the projects I’ve built:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Portfolio Website</h2>
          <p>A personal website built using React and Tailwind CSS.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Landing Page </h2>
          <p>Recreated a modern landing page design using HTML, CSS, and JavaScript as an Assignment.</p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Projects;
