import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <ul className="container mx-auto p-5" style={{ fontFamily: 'Roboto' }}>
        <li className="w-full flex flex-col gap-10">
          {/* Welcome Section */}
          <div className="container flex flex-col sm:flex-row items-center justify-between w-full h-auto bg-customPurple p-6 rounded-lg">
            <div className="w-24 h-24 bg-cover bg-center sm:w-40 sm:h-40" style={{ backgroundImage: "url('./freepik.png')" }}></div>
            <div className="text-white text-center sm:text-left font-mono text-xl sm:text-2xl">
              <p>Welcome, Ashimolowo Riliwan</p>
            </div>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-full">
           
            <div className="art border-2 rounded-xl border-customPurple h-72 flex flex-col items-center p-6 bg-white shadow-lg">
              <div className="text-center text-2xl text-customPurple mb-4">
                <h3>Choose a Random Question</h3>
              </div>
              <div className="text-center mb-4">
                <p>Get a random question to answer</p>
              </div>
              <Link to={'question'} className="mt-auto text-center text-white bg-purple-400 hover:bg-purple-500 w-36 py-2 rounded-xl transition-all">
                Take Task
              </Link>
            </div>

           
            <div className="science border-2 rounded-xl border-pink-500 h-72 flex flex-col items-center p-6 bg-white shadow-lg">
              <div className="text-center text-2xl text-pink-500 mb-4">
                <h3>Science</h3>
              </div>
              <div className="text-center mb-4">
                <p>Challenge your knowledge in physics, chemistry, biology, and more</p>
              </div>
              <div className="mt-auto text-center text-white bg-pink-500 hover:bg-pink-600 w-36 py-2 rounded-xl transition-all font-semibold">
                Take Task
              </div>
            </div>

           
            <div className="commercial border-2 rounded-xl border-green-500 h-72 flex flex-col items-center p-6 bg-white shadow-lg">
              <div className="text-center text-2xl text-green-500 mb-4">
                <h3>Commercial</h3>
              </div>
              <div className="text-center mb-4">
                <p>Test your skills in business, economics, finance, and marketing</p>
              </div>
              <div className="mt-auto text-center text-white bg-green-500 hover:bg-green-600 w-36 py-2 rounded-xl transition-all font-semibold">
                Take Task
              </div>
            </div>

            
            <div className="studies border-2 rounded-xl border-blue-500 h-72 flex flex-col items-center p-6 bg-white shadow-lg">
              <div className="text-center text-2xl text-blue-500 mb-4">
                <h3>General Studies</h3>
              </div>
              <div className="text-center mb-4">
                <p>Dive into global politics, international relations, and events</p>
              </div>
              <div className="mt-auto text-center text-white bg-blue-500 hover:bg-blue-600 w-36 py-2 rounded-xl transition-all font-semibold">
                Take Task
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
