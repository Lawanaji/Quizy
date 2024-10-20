


const DashBoard = () => {
    return (
     <div className=" w-full">
      <ul className="container" style={{fontFamily: "Roboto"}}>
          <li className="flex items-center-justify-evenly md:justify-normal bg-customPurple w-full py-10 overflow-auto">
              <div className="flex w-full">
                  <span className="flex-initial inline w-32 text-white text-5xl">Quiz</span>
                  <span className="flex-1 inline text-center ml-2 space-x-8 text-white sm:flex-col">
                      <span>Leaderboard</span>
                      <span>Profile</span>
                      <span>Settings</span>
                  </span>
                  <span className="flex-initial inline text-white space-x-7 text-right mr-5">
                       <span className=""><i className='bx bx-user-circle' ></i></span>
                      <span className="text-white" style={{}}><i className='bx bxs-bell-ring'></i></span>
                      <span className="text-white"><i className="far fa-question-circle" ></i></span>
                  </span>
              </div>
          </li>
  
          <li className="w-90 mx-auto mt-14 flex flex-wrap flex-col gap-20">
              <div className="container flex flex-wrap items-center  w-90 h-40 bg-customPurple ">
                  <div className="w-40 sm:w-15 sm:h-15 h-40 bg-cover bg-center" style={{ backgroundImage: "url('./freepik.png')" }}></div>
                  <div className="inline-block text-white  font-mono text-1xl sm:text-60px"><p>Welcome, Ashimolowo Riliwan</p></div>
  
           </div>
           <div className="mx-auto mb-10 grid grid-cols-4 gap-2 w-auto   auto-cols-fr grid-flow-col sm:grid-cols-2">
  
              <div className="art border-2 rounded-xl border-customPurple h-72 flex flex-col items-center overflow-auto">
               
                  <div className="text-center text-2xl text-customPurple"><h3>Arts</h3></div>
                  <div className="text-center"><p>Explore quizzez on Art history, Famous partner and creative movement</p></div>
                  <div className="mt-6 text-center text-white inline-block bg-opacity-80 w-36  hover:bg-customPurple hover:text-gray-300 rounded-xl hover:ring-1">Take Task</div>
              </div>
              <div className="science border-2 rounded-xl border-pink-500 h-72 flex flex-col items-center overflow-auto">
                 
                  <div className="text-center text-2xl text-pink-500"><h3>Science</h3></div>
                  <div className="text-center"><p>Challenge your knwoledge in physics, chemistry, biology and more</p></div>
                  <div className="mt-6 text-center text-white inline-block bg-opacity-80 w-36  hover:bg-pink-500 hover:text-gray-300 rounded-xl hover:ring-1 font-semibold">Take Task</div>
              </div>
              <div className="commercial border-2 rounded-xl border-green-500 h-72 flex flex-col items-center overflow-auto">
                 
                  <div className="text-center text-2xl text-green-500"><h3>Commercial</h3></div>
                  <div className="text-center"><p>Test your skills in business, economics finance and marketing</p></div>
                  <div className="mt-6 text-center text-white inline-block bg-opacity-80 w-36  hover:bg-green-500 hover:text-gray-300 rounded-xl hover:ring-1 font-semibold">Take Task</div>
              </div>
              <div className="studies border-2 rounded-xl border-blue-500 h-72 flex flex-col items-center overflow-auto">
                  
                  <div className="text-center text-2xl text-blue-500"><h3>General Studies</h3></div>
                  <div className="text-center"><p>Dive into global politics, international relations, and event</p></div>
                  <div className="mt-6 text-center text-white inline-block bg-opacity-80 w-36  hover:bg-blue-500 hover:text-gray-300 rounded-xl hover:ring-1 font-semibold">Take Task</div>
              </div>
           </div>
           
         
          </li>
          
  
     </ul>
     </div>
    );
  };
  
  export default DashBoard;
  