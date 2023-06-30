import React from 'react';
import Services from './Services';

const About = () => {
  const skills =
  [
    { name: 'UI & UXDESIGNING', image:'/src/assets/icons/ruler-pen.png'},
    { name: 'WEB DEVELOPMENT', image:'/src/assets/icons/code.png'},
    { name: 'MOBILE DEVELOPMENT', image:'/src/assets/icons/android.png'},
    { name: 'WEB SCRAPING WHITH PYTHON', image:'/src/assets/icons/web-scraping.png'}
  ]
  return (
    <div className='px-7 md:px-10 sm:-mt-24' id="about">
      <h1 className='text-3xl mt-5 text-primary font-semibold'>About me</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles.
Here are the major skiills i have. </p>
    {/* expeiences section */}
      <div className='md:flex items-center my-7'>
        <p className='text-primary text-8xl font-bold'>5+</p>
        <p className='text-white text-2xl md:ml-5'>Years of experience. Specialised in building apps, while ensuring a seamless
  web experience for end users.</p>
      </div>
    {/* skills card */}
      <div className='flex flex-col md:flex-row'>
        {
          skills.map((skill, index) => <div key={index} className='skills md:w-[256px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
            <img src={skill.image} alt="" />
            <p className='text-2xl  mt-3 text-white font-semibold'>{skill.name}</p>
          </div>)
        }
      </div>

      {/* services card */}
      <Services/>
    </div>
  );
};

export default About;