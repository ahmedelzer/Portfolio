import "./all.min.css"
import "../index.css"
import { useState } from 'react'
import ahmed from '../assets/ahmeds.jpg'
function About(){
  let spans=document.querySelectorAll(".prog-holder .prog span");
  const [scorll,setscroll]=useState("none");
window.onscroll = function(e){
if(window.scrollY>=30){
setscroll("block")
    if(window.scrollY>=1090){
    spans.forEach((s)=>{s.style.width=s.dataset.progress})}
}

else{
  setscroll("none")
    }
}
let scro=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
    return(
        <>
        

<div class="skills">
        <div class="container">
        <div class="text text-center">
            <h1 class="text-center fs-2 fw-bold">About of Ahmed Ashraf</h1>
            <img src={ahmed} class="w-75 h-50" alt=""></img>
        </div>
        <div class="what d-flex justify-content-between">
            <h2 class="fs-2 fw-bold w-25 ">What I Do</h2>
            <div class="text w-50">
              <p class="lh-sm fst-normal ">
              I have created many static and dynamic websites which also contain stores, and I have experience in dealing with online payment gateways, website management, and integration.
                Also I am dealing now with Fornt-end
            </p>
            <div class="fornt d-grid mt-4 ">
              <div class="row ">
                 <h6 class="fs-6 lh-1 col-lg-6 col-sm-12">Front-end development</h6>
                 <h6 class="fs-6 lh-1 col-lg-6 col-sm-12">Programming Content</h6>
              </div>
              <div class="row mt-4">
                <h6 class="fs-6 lh-1 col-lg-6 col-sm-12">Responsive</h6>
                <h6 class="fs-6 lh-1 col-lg-6 col-sm-12">Creation</h6>
             </div>
            </div>
            </div>
        </div>
        <div class="d-grid mt-5">
          <div class="row justify-content-between align-items-center">
            <div class="left col-lg-4 col-sm-12">
              <div class="text mt-3 mb-3 pb-3">
                <h2 class="fs-3 fw-bold">Education</h2>
                <p class="lh-sm">I am a student in college of Computer Science</p>
              </div>
              <div class="text pt-3 mb-3">
                <h2 class="fs-3 fw-bold">Hobbies</h2>
                <p class="lh-sm">I love sharing my experience and knowledge with others, I love reading,  learning something new every single day.</p>
              </div>
            </div>
            <div class="right col-lg-5 col-sm-12 mt-4 p-3">
              <h2 class="text-center fw-bold">Skills</h2>
              <div class="prog-holder">
                <h4>JavaScript</h4>
                <div class="prog">
                  <span style={{width:"0%"}} data-progress="90%"></span>
                </div>
              </div>
              <div class="prog-holder">
                <h4>Html &amp; Css</h4>
                <div class="prog">
                  <span style={{width:"0%"}} data-progress="85%"></span>
                </div>
              </div>
              <div class="prog-holder">
                <h4>Reactjs</h4>
                <div class="prog">
                  <span style={{width:"0%"}} data-progress="85%"></span>
                </div>
              </div>
              <div class="prog-holder">
                <h4>bootstrap</h4>
                <div class="prog">
                  <span style={{width:"0%"}} data-progress="90%"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div class="scroll-to-top" onClick={scro} style={{display:`${scorll}`}}>
        <span></span>
      </div>
        </>
    )
}
export default About