import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>&#47;&#47; I am not your normal developer</p>
                <br></br>
                <p className='py-2 text-gray-600 text-sm md:text-base'>
                Hello, I&apos;m Shivansh Srivastava, a fourth-year Computer Science engineering student at Jaypee Institute of Information Technology. 
                With a passion for programming since 11th grade, I have honed my skills in languages like C++ and gained experience in React.js,
                 Node.js, Python, and more. Alongside technical expertise, I possess strong management and communication abilities.
                </p>
                <br></br>
                <p className='py-2 text-gray-600 text-sm md:text-base'>
                As an aspiring developer, my goal is to continually expand my knowledge and explore cutting-edge technologies. I aim 
                to create solutions that improve lives and contribute to convenience. With attention to detail and commitment to 
                excellence, I am excited to make a positive impact in the world of technology.
                </p>
                {/* <p className='py-2 text-gray-600'>Check out some of my latest projects</p> */}
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt=""/> 
            </div>
        </div>
    </div>
  )
}

export default About