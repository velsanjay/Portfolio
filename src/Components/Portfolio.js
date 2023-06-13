import React, { useEffect, useState } from 'react'

import ScrollReveal from 'scrollreveal';
import project from '../image/project.png'
import Typed from 'typed.js'

function Portfolio() {

useEffect(()=>{
  Type()
},[])

    const [fade, setFade] = useState(true)
    const triggerFade = () => {
      setFade(!fade)
    }
  return <>
     <div id='service'>
      <h1
      style={{animation : fade? "bounceInLeft":"lightSpeedInRight", animationDuration : fade ? '3s':"2s"}} 
      onClick={()=>triggerFade()}
      className='me'
      >My Projects</h1>
      
      <div className='service-list'>
        <div className='a'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/642bd57ec5ac65000873b0af/screenshot_2023-04-04-07-45-43-0000.png'/>
          <h2>API CRUD Application with Formic Validator</h2>
          <p>This is a library clone. In this application, we use the mock API to create, read, update, and delete the books.it's also validate the data from formic validator.</p>
          <a href='https://classy-cactus-9a294e.netlify.app/' target='_blank'>Learn more</a>
        </div>
        
        <div className='b'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64213aa6f559b15ecd9a8e68/screenshot_2023-03-27-06-42-33-0000.png'/>
          <h2>Two API in One CRUD Application</h2>
          <p>This is student and teacher management for college. In this application, we use the mock API to create, read, update, and delete the books. It's also twoAPIs in one application. </p>
          <a target='_blank' href='https://prismatic-torrone-dccaae.netlify.app/'>Learn More</a>
        </div>
        
        <div className='c'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6488369244aa6400085a95a2/screenshot_2023-06-13-09-28-33-0000.png'/>
          <h2>Bike Rental Clone</h2>
          <p>This is Bike Rental Clone. If you are the administrator, allow the creation of new bike details; otherwise, only book and return the bike. </p>
          <a href='https://glittery-cactus-85a5b3.netlify.app/' target='_blank' >LearnMore</a>
        </div>
        
        <div className='a'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6451f85a03d1ba000882ec6b/screenshot_2023-05-03-06-00-35-0000.png'/>
          <h2>Money Manager</h2>
          <p>This is the basic Money Manager. Allow access to the Dashboard page if your user ID and password are the same. Otherwise, check if your email is valid, reset your password, and login to the dashboard page. On this dashboard page, you have income and expenditures. On the next page, you create new values.</p>
          <a  >LearnMore</a>
        </div>
        
        <div className='b'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64550b3b6741bd0008ce7f73/screenshot_2023-05-05-13-57-53-0000.png'/>
          <h2>URL Shortner</h2>
          <p>This is the URL Shortner app. It's used to convert any long url to a short url and how many times they are used. This is used in Mongoose schema validation.</p>
          <a href='https://dreamy-dango-30842b.netlify.app' target='_blank' >LearnMore</a>
        </div>
        
        <div className='b'>
          <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/646b1f70ab30920008094c87/screenshot_2023-05-22-07-53-52-0000.png'/>
          <h2>The Movie Database Clone</h2>
          <p>This is the The Movie Database(TMDB) Clone. It's Used see the movie detail.</p>
          <a href='https://dreamy-dango-30842b.netlify.app' target='_blank' >LearnMore</a>
        </div>
        
      </div>
    </div>
  </>
}
export default Portfolio

const   Type = () =>{
  ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2000,
    delay:20
  })
 
  ScrollReveal().reveal('.header-text, .about-col-2 p ,.about-col-2 .tab-titles , #form h1 ' , { origin:'top' })
  ScrollReveal().reveal('.about-col-1 ,  .service-list .b , .form ' , { origin:'bottom' })
  ScrollReveal().reveal('.service-list .a' , { origin:'left' })
  ScrollReveal().reveal('.service-list .c' , { origin:'right' })

 new Typed('.multi',{
  strings:["Full Stack Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})

}
