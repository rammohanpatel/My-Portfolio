import React from 'react';

const Technologies = () => {
  const technologies = ['React.Js','Next.Js','Data Structures & Algorithms','Express.Js','Node.Js','MongoDB','Figma','Javascript','C','C++','Product Management'];
  return (
    <div className=" flex flex-col sm:flex-row justify-between bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="w-full sm:w-1/2 p-4 sm:p-8">
        <h2 className="text-center font-bold text-4xl sm:text-5xl mb-4" id="technology">
          About Me
        </h2>
        <hr className="mx-auto w-1/6 border-t-4 border-green-500 my-4 rounded" />
        <p className="text-center sm:text-left text-xl">
        I am proud to be a student of IIT Kharagpur, known for its excellence in engineering and technology. My education in Agricultural and Food Engineering has provided me with a unique perspective, blending technology and agriculture, allowing me to tackle real-world problems with innovative solutions.
        </p>
        <section className="text-gray-600 body-font">
        </section>
      </div>
      <div className="w-full sm:w-1/2 p-4 sm:p-8">
        <h2 className="text-center font-bold text-4xl sm:text-5xl mb-4" id="technology">
          SKILLS
        </h2>
        <hr className="mx-auto w-1/6 border-t-4 border-green-500 my-4 rounded" />
        <div className="flex flex-wrap justify-center sm:justify-start">   
        {
          technologies.map((tech,index)=>(
            <span 
            className="px-2 py-1 m-2 rounded-lg text-white bg-blue-500 flex justify-center items-center"
            key={index}
            >      
              {tech}
            </span>
          ))
        }   
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Technologies;
