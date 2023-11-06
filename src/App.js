import Home from './component/Home';
// import * as All from './main'
import Projects from './component/Projects';
import About from './component/About';
import Contact from './component/Contact'
import './main2'
import { BrowserRouter, Routes, Route, Outlet, Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {path :'/', element:<Home/>},
      {path :'/projects', element:<Projects/>},
      {path :'/about', element:<About/>},
      {path :'/contact', element:<Contact/>},
    ],
  },
]);
function App() {

//   let scrll=document.querySelector(".scroll-to-top");
//   console.log(scrll.classList)
//    let dark=document.querySelector(".toggle-checkbox");
// let spans=document.querySelectorAll(".prog-holder .prog span");
//   if(window.localStorage.getItem("mode")==="dark"){
//     document.body.classList="dark";
//     dark.setAttribute("checked",true)
// }else if(window.localStorage.getItem("mode")==="light"){
//     document.body.classList="light";
// }

// dark.onclick= function(e){
//     console.log(9)
//     if(dark.checked===true){
//         window.localStorage.setItem("mode","dark");
//     }else if(dark.checked===false){
//         window.localStorage.setItem("mode","light");
//     }
//     if(window.localStorage.getItem("mode")==="dark"){
//         document.body.classList="dark";
//     }else if(window.localStorage.getItem("mode")==="light"){
//         document.body.classList="light";
//     }
// }
// scrll.classList.add("none")
// window.onscroll = function(){
// if(window.scrollY>=30){
// scrll.style.cssText="display:block;";
// scrll.classList.add("block")
// scrll.classList.remove("none")
//     if(window.scrollY>=1090){
//     spans.forEach((s)=>{s.style.width=s.dataset.progress})}
// }

// else{
//   scrll.classList.add("none")
//   scrll.classList.remove("block")
//     }
// }
// scrll.onclick= function(){
//     window.scrollTo({
//         top:0,
//         behavior:"smooth",
//     })
// }
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
  
}

export default App;
