import React from 'react';
import heroImg from '../assets/img2.png';

const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]' id="home">
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                {/* texts */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                    <h1 className='font-semibold text-3xl md:text-5xl my-4'>Willie Garrett</h1>
                    <p className='md:w-96'>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>

                    {/*  buttons */}
                    <div className='mt-5'>
                        <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button>
                        <button className='btn outline px-6 py-1.5 rounded border-none text-white ml-5'>Project</button>
                    </div>
                </div>

                {/* img */}
                <div className='order-first md:order-last relative'>
                   <img src={heroImg} alt="" />
                </div>
            </div>

            {/* divider */}
            <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'></div>
        </div>
    );
};

export default Home;