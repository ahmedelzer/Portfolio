import React, { useState } from 'react'
import photo from '../assets/ahmedp.jpg'
import "./all.min.css"
import "../index.css"
function Home() {
  let spans=document.querySelectorAll(".prog-holder .prog span");
  const [scorll,setscroll]=useState("none");
  const [trans, settarns] = useState('')
window.onscroll = function(e){
if(window.scrollY>=30){
setscroll("block")
    if(window.scrollY>=1090){
    spans.forEach((s)=>{s.style.width=s.dataset.progress})}
}else{
  setscroll("none")
    }
  settarns(`${window.scrollY}`)
}
let scro=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
return (
  
    <>
  <div class="home d-grid mt-5 mb-3">
    <div class="container row position-relative ">
      <div class="text col-lg-6 col-sm-12 ">
        <h1 class="text-center mt-3">
          <span>Hi</span>, I'm
          Ahmed Ashraf
        </h1>
        <p class="text-center mt-3">I am a Fornt-end web developer. I love sharing my experience with others, and I also try to learn something
          new every single day.
        </p>
      </div>
      <div style={{transformOrigin:`${trans}px`}} class="img col-lg-6 col-sm-12 w-25">
        <img   src={photo}  alt="احمد اشرف" title="احمد اشرف"></img>
        <div class="social w-100 d-flex justify-content-between">
          <i><a href="https://www.facebook.com/iho.oisuyiyi" class="fa-brands fa-square-facebook fa-beat fa-2xl" target="_blank"></a></i>
          <i ><a class="fa-brands fa-square-twitter fa-beat fa-2xl" href="https://twitter.com/AihmadAshr45748" target="_blank"></a></i>
          <i><a href="https://api.whatsapp.com/send/?phone=201067921420&text&type=phone_number&app_absent=0" target="_blank" class="fa-brands fa-square-whatsapp fa-beat fa-2xl"></a> </i>
          <i ><a href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%A7%D8%B4%D8%B1%D9%81-8a3000269/" target="_blank" class="fa-brands fa-linkedin fa-beat fa-2xl"></a></i>

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
// style={{display:"none"}}
export default Home
