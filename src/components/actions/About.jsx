import React from 'react'
import NavBar from '../navbar/NavBar'
import '../../styles/About.css'
const About = () => {
  return (
      <div className='about-me'>
          <NavBar />

          <div className='about'>
                <h1 className='fs-2 text-success'>About Me</h1>
                <p className='introduction'>My name is Tharcisse and I am a rising sophomore at Oberlin College. Even though I am not too good at mathematics, I am interested in it and I like doing some projects that align computer science and math.I am majoring in computer science and minoring in mathematics and concentration in Data science.
                
              </p>
              
              <h2><a href=''><button className='btn btn-challenge btn-warning m-4 text-dark'>visit my website for more</button></a></h2>
          </div>



          
    </div>
  )
}

export default About