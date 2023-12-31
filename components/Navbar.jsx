import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const  [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    },[]);

  return (
    <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]':'fixed w-full h-20 z-[100] bg-[#ecf0f3]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/#home' scroll={false}>
            <Image src="/../public/assets/navLogo.png" alt="/" width='80' height='35' />
            </Link>    
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/#home' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact' scroll={false}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div 
                className={
                    nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '
                       :'fixed left-[-150%] top-0 p-10 ease-in duration-500 '
                       }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/navLogo.png' alt='/' width='87' height='35'/>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[100%] md:w-[90%] py-4'>Let&apos;s build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/#home' scroll={false}>
                            <li onClick={()=> setNav(false)} className='py-3 text-sm'>Home</li>
                        </Link>
                        <Link href='/#about' scroll={false}>
                            <li onClick={()=> setNav(false)} className='py-3 text-sm'>About</li>
                        </Link>
                        <Link href='/#skills' scroll={false}>
                            <li onClick={()=> setNav(false)} className='py-3 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#projects' scroll={false}>
                            <li onClick={()=> setNav(false)} className='py-3 text-sm'>Projects</li>
                        </Link>
                        <Link href='/#contact' scroll={false}>
                            <li onClick={()=> setNav(false)} className='py-3 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-16'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
                        <div className='flex items-center justify-between my-2 w-full sm:w-[80%]'>
                            <a href='https://www.linkedin.com/in/shivanshsri-droid/'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn/>
                                </div>
                            </a>
                            <a href='https://github.com/ShivanshSri-droid'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub/>
                                </div>
                            </a>
                            <a href = "mailto: srivastavashivansh28@gmai.com">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                            </a>
                            <a href='tel:8800312995'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar