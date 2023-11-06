import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
function Contact(){
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
  const [name,setname]=useState("");
  const [email,setmail]=useState("");
  const [notional,setnotional]=useState("");
  const [message,setmessage]=useState("");
  const handless =(e)=>{
    e.preventDefault();

    const serviceid= "service_iyjy104";
    const templetid= "template_r93gczd";
    const publickey= "DzBv4OCSaRH8Qs8UY";

    const templetprams={
      from_name: name,
      email_id:email,
      national_id:notional,
      message:message,
    };
    emailjs.send(serviceid,templetid,templetprams,publickey)
    .then((response)=>{
      console.log(`email send :${response}`)
      setname((''));
      setmail('');
      setmessage('');
      setnotional('');
    }).catch((error)=>{
      console.log(`email failed :${error}`)
    })
  }
    return(
        <>

        <div class="ahmed">
        
              <div class="zn_contact_form_container container contactForm cf-elm eluid4f233b9d  cf--light element-scheme--light  ">
                                            <div class="zn_description">
                                                <p style={{textAlign:"center"}}>ارسل رسالتك هنا</p>
                                            </div>
                                            <form onSubmit={handless} action="#" id="form_eluid4f233b9d" method="post" class="zn_contact_form contact_form cf-elm-form row cf--placeholders"  data-redirect="">
                                                <div class="col-sm-12  kl-fancy-form zn_form_field zn_cf_text">
                                                    <input type="text"required onChange={(e)=>setname(e.target.value)} value={name} name="zn_form_field_name1_0" id="zn_form_field_name1_0" placeholder="الاسم"  class="zn_form_input zn-field-text form-control  kl-fancy-form-input zn_validate_none "/>
                                                </div>
                                                <div class="col-sm-12  kl-fancy-form zn_form_field zn_cf_text">
                                                    <input type="text" required onChange={(e)=>setmail(e.target.value)} value={email} name="zn_form_field_email1_1" id="zn_form_field_email1_1" placeholder="البريد الإلكتروني"  class="zn_form_input zn-field-text form-control  kl-fancy-form-input zn_validate_is_email "/>
                                                </div>
                                                <div class="col-sm-12  kl-fancy-form zn_form_field zn_cf_text">
                                                    <input type="text"  onChange={(e)=>setnotional(e.target.value)} value={notional} name="zn_form_field_nationality1_2" id="zn_form_field_nationality1_2" placeholder="الجنسية"  class="zn_form_input zn-field-text form-control  kl-fancy-form-input zn_validate_none "/>
                                                </div>
                                                <div class="col-sm-12  kl-fancy-form zn_form_field zn_cf_textarea">
                                                    <textarea required name="zn_form_field_message1_3" onChange={(e)=>setmessage(e.target.value)} value={message} class="zn_form_input form-control  kl-fancy-form-textarea zn_validate_not_empty " id="zn_form_field_message1_3" placeholder="اترك رسالتك واستفسارك هنا " cols="40" rows="6"></textarea>
                                                </div>
                                                <div class="col-sm-12  kl-fancy-form zn_form_field zn_cf_hidden">
                                                    <input type="hidden" name="zn_pb_form_submit_1" id="zn_pb_form_submit_1" value="1" class="zn_form_input zn_validate_none"/>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="zn_contact_ajax_response titleColor" id="zn_form_id1"></div>
                                                    <div class="zn_submit_container text-left">
                                                        <button class="zn_contact_submit btn btn-fullcolor btn--rounded  " type="submit">إرسال</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
      <div class="contact">
        <div class="container d-grid">
            <div class="row">
                <div class="text col-lg-6 text-center col-sm-12 mb-3 mt-3">
                    <h2 class="fw-bold fs-2">Contact</h2>
                    <p class="fs-5 lh-sm">Email: ahmedashrafabsh2@gmail.com</p>
                    <p class="fs-5 lh-sm">Number: +201067921420</p>
                    <p class="fs-5 lh-sm">BIRTHDAY: October 30, 2004</p>
                    <p class="fs-5 lh-sm">LOCATION: Egypt (Beni-soif)</p>
                </div>
                <div class="col-lg-6 text-center col-sm-12 mt-3">
                    <div class="text">
                        <h2 class="fw-bold fs-2">Social media</h2>
                        <div class="social">
                            <i><a href="https://www.facebook.com/iho.oisuyiyi" class="fa-brands fa-square-facebook  fa-2xl" target="_blank"></a></i>
                            <i ><a class="fa-brands fa-square-twitter  fa-2xl" href="https://twitter.com/AihmadAshr45748" target="_blank"></a></i>
                            <i><a href="https://api.whatsapp.com/send/?phone=201067921420&text&type=phone_number&app_absent=0" target="_blank" class="fa-brands fa-square-whatsapp  fa-2xl"></a> </i>
                            <i ><a href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%A7%D8%B4%D8%B1%D9%81-8a3000269/" target="_blank" class="fa-brands fa-linkedin  fa-2xl"></a></i>
                  
                          </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
      
      <div class="scroll-to-top" onClick={scro} style={{display:`${scorll}`}}>
        <span></span>
      </div>
        </div>
        </>
    )
}
export default Contact