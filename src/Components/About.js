import React, { useState } from 'react'
import ScrollReveal from 'scrollreveal';

import img from '../image/img.png';

function About() {
  const [fade, setFade] = useState(true)
  const triggerFade = () => {
    setFade(!fade)
  }

  const opentab = (value) => {

    ScrollReveal({
      reset:false,
      distance:'60px',
      duration:2000,
      delay:0
    })
   
    let tabLink = document.getElementsByClassName('tab-link')
    let tabcontent = document.getElementsByClassName('tab-content')
    for (tabLink of tabLink) {
      tabLink.classList.remove('active')
      if (tabLink.innerText == value) {
        tabLink.classList.add('active')
      }
    }
    for (tabcontent of tabcontent) {
      tabcontent.classList.remove('active-tab')
      if(tabcontent.id == value){
        tabcontent.classList.add('active-tab')
      }
    }
    
  }
  return <>
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='about-col-1'>
            <img src={img} alt='image'></img>
          </div>
          <div className='about-col-2'>
            <h1
              style={{ animation: fade ? "slideInDown" : "tada", animationDuration: fade ? '2.1s' : "2s" }}
              onClick={triggerFade}
              className='me'>about Me</h1>
            <p>Hey, I'm Sanjay, a full-stack developer. I lived in Chidambaram. I'm a newcomer, so I'm looking for work.</p>

            <div className='tab-titles'>
              <p className='tab-link active' onClick={() => opentab('Skill')}>Skill</p>
              <p className='tab-link' onClick={() => opentab('Experience')}>Experience</p>
              <p className='tab-link' onClick={() => opentab('Education')}>Education</p>
            </div>
            <div id='Skill' className='tab-content active-tab a'>
              <ul>
                <li><span>Front End Developer </span>
                  <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>DOM</li>
                    <li>AdvanceJS</li>
                    <li>ReactJS</li>
                  </ol>
                </li>
                <li><span>Back End Developer </span>
                  <ol>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>NodeJS</li>
                  </ol>
                </li>
              </ul>
            </div>
            <div id='Experience' className='tab-content a'>
              <ul>
                <li><span>DELPHI TVS COMPANY</span> Complete short term trainee</li>
                <li>Personel Project</li>
                <li>Cetrificate Course</li>
                <li>Leadership Position</li>
              </ul>
            </div>
            <div id='Education' className='tab-content a'>
              <ul>
                <li><span>Nov-2022 To Apr-2023</span> Full Stack Developer at GUVI GEEKS Network</li>
                <li><span>2021</span> B.E Mechanical Engineering From MREC Ariyalur</li>
                <li><span>2017</span> HSC From RCT Chidambaram</li>
                <li><span>2015</span> SSC From SRKV Chidambaram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}

export default About