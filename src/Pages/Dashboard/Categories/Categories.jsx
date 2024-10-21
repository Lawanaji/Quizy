import React from 'react';
import { Link } from 'react-router-dom';
import imge1 from '../../../assets/Art.svg'
import imge2 from '../../../assets/dna.svg'
import imge3 from '../../../assets/Commercial 2.svg'
import imge4 from '../../../assets/interface-searching-01-8.svg'
const Categories = () => {
  const items = [
    {
      image: imge1,
      topic: 'Arts',
      paraprah: 'Explore quizzes on Art history, Famous painter and creative movement',
      linkname: 'Take Quiz',
      path: 'question',
      style: ' flex flex-col items-center p-6 shadow-lg border-[#442D7C] border-2'
    },
    {
      image: imge2,
      topic: 'Science',
      paraprah: 'Challenge your knowledge in physics, chemistry, biology, and more',
      linkname: 'Take Quiz',
      path: 'question',
      style: ' flex flex-col items-center p-6 shadow-lg border-[#F85ACA] border-2'
    },
    {
      image: imge3,
      topic: 'Commercial',
      paraprah: 'Test your skills in business, economics, finance, and marketing',
      linkname: 'Take Quiz',
      path: 'question',
      style: ' flex flex-col items-center p-6 shadow-lg border-[#4BAE48] border-2'
    },
    {
      image: imge4,
      topic: 'General Studies',
      paraprah: 'Dive into global politics, international relations, and world events',
      linkname: 'Take Quiz',
      path: 'question',
      style: ' flex flex-col items-center p-6 shadow-lg border-[#05ACF6] border-2'
    }
  ]
  return (
    <div className="w-full h-full bg-gray-100">
      <ul className="container">
        
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:mt-[10rem]">
           {items.map((item)=>(

            <div className={item.style}>
              <img src={item.image} alt="" />
              <div className="text-center text-2xl text-customPurple mb-4">
                <h3>{item.topic}</h3>
              </div>
              <div className="text-center mb-4">
                <p>{item.paraprah}</p>
              </div>
              <Link to={item.path} className="mt-auto text-center text-white bg-purple-400 hover:bg-purple-500 w-36 py-2 rounded-xl transition-all">
               {item.linkname}</Link>
            </div>


           ))}
          </div>
       
      </ul>
    </div>
  );
};

export default Categories;
