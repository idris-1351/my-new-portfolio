import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Skills() {
  return (
    <div className="p-10">
      {/* <Header /> */}
      <h1 className="text-3xl font-bold">Skills</h1>
      <p className="text-gray-600 mt-2">These are the tools and technologies I work with:</p>

      <ul className="  mt-4 space-y-2">
        <li>HTML</li>
        <li>CSS & Tailwind CSS</li>
        <li>JavaScript </li>
        <li>React JS</li>
        <li>Git & GitHub</li>
      </ul>

      {/* <Footer /> */}
    </div>
  );
}

export default Skills;
