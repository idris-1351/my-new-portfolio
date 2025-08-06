import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center  bg-white text-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Hi! I’m <span className="font-semibold text-black">Idris Yussuf</span>, a passionate Frontend Developer from Somalia.
        I love turning ideas into digital realities using HTML, CSS, Tailwind, JavaScript, and React.
      </p>
      <p className="text-lg text-gray-700 mt-4 max-w-xl">
        Explore my projects, skills, and more. Let’s build something amazing together!
      </p>
    </div>
  );
}

export default Home;

