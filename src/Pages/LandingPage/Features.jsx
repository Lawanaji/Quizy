import React from 'react'
import categories from '../../assets/Group.svg'
import leadership from '../../assets/interface-success-01-2.svg'
import feedback from '../../assets/mathematician.svg'
import playImage from '../../assets/freelancer.svg'
const Features = () => {
    const items=[
        {
            imge: categories,
            title: 'Wide Range of Quiz Categories',
            parapgraph: 'Explore quizzes on topics like history, sports, pop culture, science, and more.',
            style:  'bg-white p-5  border-2 border-[#DBFF83] rounded-lg flex flex-col text-center md:text-start'
        },
        {
            imge: leadership,
            title: 'Real-Time Leaderboards',
            parapgraph: 'See how you rank against other players in real-time and compete for the top spot.',
            style:  'bg-white p-5 border-2 border-[#F85ACA] rounded-lg flex flex-col text-center md:text-start'
        },
        {
            imge: feedback,
            title: 'Instant Feedback & Explanations',
            parapgraph: ' After each answer, get detailed explanations and improve your knowledge.',
            style:  'bg-white p-5  border-2 border-[#F3645F] rounded-lg flex flex-col text-center md:text-start'
        },
        {
            imge: playImage,
            title: 'Play Anywhere, Anytime',
            parapgraph: 'Whether you’re at home or on the go, Quizzy is designed for mobile devices so you can play anytime.',
            style:  'bg-white p-5  border-2 border-[#FECFC4] rounded-lg flex flex-col text-center md:text-start'
        }
    ]
  return (
    <div className='w-full  mt-[8rem] bg-primaryColor'>
        <div className='container py-[5rem]'>
        <h1 className='text-white text-3xl md:text-4xl'>  Everything you need to enjoy and <br/> 
        improve your quiz experience.</h1>

        <div className='w-full flex flex-col text-center md:text-start md:flex-nowrap md:flex-row  gap-5 rounded-lg py-10'>
            {items.map((item)=>(
                <div className={item.style}>
                    <img src={item.imge} alt="" className="w-full h-[15rem]  object-contain lg:w-[15rem]  lg:h-[20rem] rounded-lg"  />
                    <div>
                        <h1 className='text-xl font-bold text-primaryColor'>{item.title}</h1>
                        <p>{item.parapgraph}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
      
    </div>
  )
}

export default Features
