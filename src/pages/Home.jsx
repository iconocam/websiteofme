import React from 'react';
import { FaReact } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md'; // Material Design Build icon
import { HiOutlineSparkles } from 'react-icons/hi'; // Heroicons Sparkles icon
import { IoRocketSharp } from 'react-icons/io5'; // Ionicons Rocket icon
import { AiOutlineSmile } from 'react-icons/ai'; // Ant Design Smile icon
import { BsCodeSlash } from 'react-icons/bs'; // Bootstrap Code icon


const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-pink-800 min-h-screen">

      {/* Header Section */}
      <header className="py-8 px-6 bg-opacity-80 flex flex-col items-center space-y-4">
    
        <div className="relative">
          <div className="bg-white p-16 rounded-full shadow-lg flex items-center justify-center">
            <div className="bg-gray-800 p-4 rounded-full text-white animate-eyeball">
              
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-black text-center">Panoptic Eyeball</p>
          </div>
        </div>
      </header>

      <style jsx>{`
  .animate-eyeball {
    animation: eyeballAnimation 2s infinite alternate;
     box-shadow: 0 0 10px 5px rgba(0, 0, 255, 0.5);
  }

  @keyframes eyeballAnimation {
    0% {
      transform: translate(-60%, 30%);
    }
    100% {
      transform: translate(50%, 30%);
    }
  }
`}</style>

      {/* First Section */}
      <section className="py-7 px-6 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 rotate-in">About This Project <MdBuild className="text-blue-500 ml-2" size={24} /></h2> 
          <p className="text-lg text-gray-700">
            I aim to supply any of your technological necessities. Just recalibrate to the correct directory and transmit a message.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-7 px-6 mt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 rotate-in">Experience and Learning <HiOutlineSparkles className="text-blue-500 ml-2" size={24} /></h2>
          <p className="text-lg text-gray-700">
          <FaReact className="text-blue-500 mx-2 animate-spin" size={28} />
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
          <div className="mt-8 flex items-center justify-center space-x-4">
            <IoRocketSharp className="text-blue-500" size={40} />
            <AiOutlineSmile className="text-yellow-500" size={40} />
            <BsCodeSlash className="text-green-500" size={40} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
