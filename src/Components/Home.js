import React, { useState } from 'react'
import logo from '../image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const [fade, setFade] = useState(true)
    const triggerFade = () => {
        setFade( !fade)
      }
     
      const close= ()=>{
        let sideBar = document.querySelector('ul')
        let  menuBar = document.querySelector('.menu')
        sideBar.style.right="-200px" 
        menuBar.style.right="0"
      }
      const open= ()=>{
        let sideBar = document.querySelector('ul')
        let  menuBar = document.querySelector('.menu')
        sideBar.style.right="0px"
         menuBar.style.right="-200px"
      }
  return <>
   <div id='header' className="App" >
      <div className="container">      
      <nav>
        <img className='logo' src={logo}/>
        <ul>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#service'>Portfolio</a></li>
          <li><a href='#form'>Contact </a></li>
          <FontAwesomeIcon onClick={()=>close()} className='icon' icon={faX}  />
        </ul>
        <div className='menu'>
        <FontAwesomeIcon  className='icon'  onClick={(e)=>open(e)} icon={faBars}  />
        </div>
      </nav>
      <div className='header-text'>
        <p  
        style={{animation : fade? "flipInY":"bounce", animationDuration : fade ? '2.1s':"2s"}} 
        onClick={()=>triggerFade()}
        ><span className='multi'></span></p>
        <h1  
         style={{animation : fade? "rubberBand":"shakeY", animationDuration : fade ? '2.1s':"2s"}} 
         onClick={()=>triggerFade()}
        >Hay I'm <span >Sanjay</span> <br/> From Chidambaram</h1>
        <div>
        
         </div>
      </div>
      </div>
    </div>
  </>
}


export default Home