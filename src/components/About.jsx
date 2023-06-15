import React from 'react'

const About = () => {
  return (
  <div
  name="about"
  className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
>
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        About
      </p>
    </div>
    <p style={{marginTop: '0rem'}} className="text-xl mt-20">
      A UX/UI designer & front-end skills with passion for an intuitive flow. 
      I am passionate about what I do and with my listening and communication 
      skills, drives me to deliver high-quality work. I am very flexible, 
      interested in finding creative solutions and help each other are keys about myself.
    </p>
  </div>
</div>
);  
};

export default About;