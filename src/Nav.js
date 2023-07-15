import React, { useState } from "react";
import { Link } from "react-router-dom";


export function Nav(){
  const[show,setshow]=useState(true)
  const hambergerhandler=()=>{
    setshow(!show)
  }

    return(
      <>

      {show ? <div className="navlink">
           <span><Link to='/' className="remove_underline">Home</Link> </span>
          <span><Link to='/bollywood'  className="remove_underline">Bollywood</Link> </span>
          <span><Link to='/hollywood' className="remove_underline">Hollywood</Link> </span>
          <span><Link to='/fitness' className="remove_underline">Fitness</Link> </span>
          <span><Link to='/technology' className="remove_underline">Technology</Link> </span>
          <span><Link to='/food' className="remove_underline">Food</Link> </span>         
        </div>:" "}
         <div className='icons'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='hamicon'>
   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" onClick={hambergerhandler}/>
 </svg> 
        </div>
        </>
    )
}
/* @media only screen and (max-width: 600px) 

{
  .home1_image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pathan {
    width: 350px;
    height: 300px;
  }
  .navlink {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 1.8
  }
  .the_latest {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .avdertise {
    display: none;
  }
  .latest_article_box {
    height: auto;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin: auto;
  }
.latest_stories {
  flex-direction: column;
  margin-top: 250px;
}
.App {
  width: auto;
}
.article_heading{
text-align: center;
}
.hollywood{
  width: 350px;
}
.tech{
  width: 350px;
}
.fitness{
  width: 350px;
}
.img{
  width: 350px;
}
.the_latest_image{
  width: 350px;
}
.latest_stories
{
margin-top: 400px;
}
img:hover {
  transform: scale(1.1);
  transition: 2s;
}
.logo{
 display: block;
}
.icon{
  justify-content: space-around;
}
} */