import React from 'react'
import  { useState } from 'react'
import Logo from '../assets/a-letter-logo-png-19.png'
import "./all.min.css"
import "../index.css"
import { Link } from 'react-router-dom'
function Header() {
    const [scorll,setscroll]=useState("none");
    const [darkmode,setdark]=useState();
    const links=document.querySelectorAll('.nav-link')
    function activeLink(e){
      links.forEach((link)=>{
        console.log(link)
        link.classList.remove('active')
        e.target.classList.add('active')
      })
    }
  let spans=document.querySelectorAll(".prog-holder .prog span");
    if(window.localStorage.getItem("mode")==="dark"){
      document.body.classList="dark";
  }else if(window.localStorage.getItem("mode")==="light"){
      document.body.classList="light";
  }
  
    function a(e){
      if(e.target.checked===true){
        e.target.checked=true;
          window.localStorage.setItem("mode","dark");
      }else if(e.target.checked===false){
        e.target.checked=false;
          window.localStorage.setItem("mode","light");
      }
      if(window.localStorage.getItem("mode")==="dark"){
          document.body.classList="dark";
      }else if(window.localStorage.getItem("mode")==="light"){
          document.body.classList="light";
      }
  }
  window.onscroll = function(e){
  if(window.scrollY>=30){
  // scroll.style.cssText="display:block;";
  // e.target.classList.add("block")
  setscroll("block")
  // e.target.classList.remove("none")
      if(window.scrollY>=1090){
      spans.forEach((s)=>{s.style.width=s.dataset.progress})}
  }
  
  else{
    // e.target.classList.add("none")
    setscroll("none")
    // e.target.classList.remove("block")
      }
  }
  let scro=function(){
      window.scrollTo({
          top:0,
          behavior:"smooth",
      })
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg">
    <div class="container d-flex">
      <Link class="navbar-brand w-25" href="/">
        <img src={Logo} class="w-25" alt="" ></img>
      </Link>
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main"
      aria-controls="main"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
      <div class="collapse navbar-collapse" id="main">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <label >
          {/* (e)=>setdark(e.target.checked) */}
          <input class="toggle-checkbox" onClick={a} onChange={()=>a} checked={darkmode} type="checkbox" />
          
          <div class="toggle-switch mt-3" >
          </div>
        </label>
          <li class="nav-item">
            <Link class="nav-link p-2 p-lg-3 active" onClick={activeLink} aria-current="page" title="home" to={"/"}>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link p-2 p-lg-3" onClick={activeLink} title="project" to={"projects"}>Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link p-2 p-lg-3" onClick={activeLink} title="about" to={"about"}>About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link p-2 p-lg-3" onClick={activeLink} title="Contact" to={"contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="scroll-to-top" onClick={scro} style={{display:`${scorll}`}}>
    <span></span>
  </div>
    </>
  )
}

export default Header
