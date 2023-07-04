import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto pt-8 p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&apos;S GROW TOGETHER</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#5651e5]'>Shivansh</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Tech Enthusiast
                </h1>
                <p className='md:w-[60%] lg:w-[70%] py-4 text-gray-600 max--[70%] m-auto'>
                A skilled and resourceful computer science student. 
                With expertise in various technologies, I thrive on 
                tackling coding challenges with a calm and focused 
                approach. Let&apos;s collaborate and create exceptional 
                solutions that make a difference.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/shivanshsri-droid/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>   
                        </div>
                    </a>
                    <a href='https://github.com/ShivanshSri-droid'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                    </a>
                    <a href = "mailto: srivastavashivansh28@gmai.com">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </a>
                    <a href='tel:8800312995'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main