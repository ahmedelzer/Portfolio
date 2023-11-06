import React from 'react'
import movix from '../assets/Movix.png'
import photoland from '../assets/Photoland.png'
import q from '../assets/gpt3.png'
import w from '../assets/reusto.png'
import e from '../assets/two.png'
import r from '../assets/loen.png'
import t from '../assets/trhee.png'
import y from '../assets/four.png'
import u from '../assets/E-commers.jpg'
import i from '../assets/land.jpg'
import o from '../assets/login.png'
import p from '../assets/bondi.png'
import a from '../assets/age.jpg'
import { useState } from 'react'
import "./all.min.css"
import "../index.css"
import { Link } from 'react-router-dom'
function Projects() {
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
  return (
    <>
       <div class="scroll-to-top" onClick={scro} style={{display:`${scorll}`}}>
    <span></span>
  </div>
    <><div class="project mt-3 mb-3">
                <div class="container">
                    <h1 class="fw-bold fs-2 text-center">My Projects in website development</h1>
                    <div class="d-grid ">
                        <div class="row justify-content-between mt-3 mb-3 w-100">
                            <div class="info col-lg-3 col-md-5 col-sm-12 ">
                                <li class="project-item  active" data-filter-item data-category="web development">
                                    <a href="https://photoland-imazing.surge.sh/" target="_blank">
  
                                        <figure class="project-img">
                                            <div class="project-item-icon-box">
                                                <i class="fa-solid fa-eye"></i>
                                            </div>
  
                                            <img src={photoland} alt="finance" title="photoland" loading="lazy"></img>
                                            </figure>

                                      <h3 class="project-title">E-commerce Cameras</h3>

                                      <p class="project-category">FullStack Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://photoland-imazing.surge.sh/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={movix} alt="finance" title="Restaurant Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Movix App</h3>

                                      <p class="project-category">FullStack Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                                <li class="project-item  active" data-filter-item data-category="web development">
                                    <a href="https://keen-gpt3.surge.sh/" target="_blank">
  
                                        <figure class="project-img">
                                            <div class="project-item-icon-box">
                                                <i class="fa-solid fa-eye"></i>
                                            </div>
  
                                            <img src={q} alt="finance" title="Chat GPT3" loading="lazy"></img>
                                            </figure>

                                      <h3 class="project-title">Chat GPT3 review</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info d-lg-none d-block col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/HTML_And_CSS_Template_two/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={e} alt="finance" title="Kasper" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Kasper</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                      </div>
                      <div class="row justify-content-between mt-3 mb-3 w-100">
                      <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://absorbing-men.surge.sh/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={w} alt="finance" title="Restaurant Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Restaurant Page</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/HTML_And_CSS_Template_three/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={t} alt="finance" title="Profile" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Profile</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info d-lg-block d-none col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/HTML_And_CSS_Template_two/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={e} alt="finance" title="Kasper" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Kasper</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                      </div>
                      <div class="row justify-content-between mt-3 mb-3 w-100">
                          <div class="info  col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/HTML_And_CSS_Template_one/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={r} alt="finance" title="Loen" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Loen</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/HTML_And_CSS_Template_four/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={y} alt="finance" title="Portfolio" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Portfolio</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info d-lg-block d-none col-lg-3  col-md-5 col-sm-12">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/Ecommerce/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={u} alt="finance" title="E-commerce Producet Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">E-commerce Producet Page</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                      </div>
                      <div class="row justify-content-between mt-3 mb-3 w-100">
                          <div class="info d-lg-none d-block col-lg- col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/Ecommerce/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={u} alt="finance" title="E-commerce Producet Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">E-commerce Producet Page</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/Login/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={o} alt="finance" title="Login Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Login Page</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info  col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/land/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={i} alt="finance" title="Landing Page" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Landing Page</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                          <div class="info col-lg-3 col-md-5 col-sm-12 ">
                              <li class="project-item  active" data-filter-item data-category="web development">
                                  <a href="https://ahmedelzer.github.io/fornt/" target="_blank">

                                      <figure class="project-img">
                                          <div class="project-item-icon-box">
                                              <i class="fa-solid fa-eye"></i>
                                          </div>

                                          <img src={p} alt="finance" title="Bondi" loading="lazy"></img>
                                          </figure>

                                      <h3 class="project-title">Bondi</h3>

                                      <p class="project-category">Web development</p>

                                  </a>
                              </li>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
    </>
  )
}

export default Projects
