import React from 'react'
import NetflixImg from '../public/assets/projects/netflix.png'
import PortfolioImg from '../public/assets/projects/porfolio.png'
import WeatherAppImg from '../public/assets/projects/weatherapp.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Netflix Clone' backgroundImg={NetflixImg} tech='React JS, Firebase' projectUrl='https://netflix-clone-b0d4a.web.app/'/>
                <ProjectItem title='Live Weather App' backgroundImg={WeatherAppImg} tech='Next JS, TailwindCSS, OpenWeatherMap API' projectUrl='https://weather-nextjs-2-git-main-shivanshsri-droid.vercel.app/'/>
                <ProjectItem title='Porfolio Website' backgroundImg={PortfolioImg} tech='Next JS, TailwindCSS' projectUrl='/'/>
            </div>
        </div>
    </div>
  )
}

export default Projects