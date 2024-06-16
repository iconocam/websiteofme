import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-300 to-blue-800 min-h-screen">
      {/* Header Section */}
      <header className="py-8 px-6bg-opacity-80 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 border-b-4 border-gray-800 inline-block bounce-rotate-glow">
            I am Cam
          </h1>
        </div>
      </header>

      {/* First Section */}
      <section className="py-7 px-6 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 rotate-in">About This Project</h2>
          <p className="text-lg text-gray-700">
            I aim to supply any of your technological necessities. Just recalibrate to the correct directory and transmit a message.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-7 px-6  mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 rotate-in">Experience and Learning</h2>
          <p className="text-lg text-gray-700">
            I built this project with React and TailwindCSS after completing a MERN stack focused bootcamp. I attained proficiency in front-end and back-end programming, as well as having background knowledge in IT and technological support.
          </p>
          <p className="text-lg text-gray-700">
            I assisted my bootcamp Coach with creating a custom timestamp in Google spreadsheets for her class! She ended up not needing it, but I still learned about triggers, Google Sheets app scripts, and creating custom functions! Here are some pictures:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 bounce-rotate-glow">
            <img src="/image1.png" alt="Image 1" className="rounded-lg shadow-md" />
            <img src="/image2.png" alt="Image 2" className="rounded-lg shadow-md" />
            <img src="/image3.png" alt="Image 3" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
