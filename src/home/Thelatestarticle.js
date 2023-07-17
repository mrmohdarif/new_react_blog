import React, { useContext } from "react";
import { store } from "./Home";
import { Link } from "react-router-dom";


export function Thelatestarticle(){
    const [data2]=useContext(store)
    // console.log("here data 2",data2)
    return(
        <>
          
         <h1 className="article_heading">The Latest Article</h1>
       
        <div className="the_latest_article_main">
     
     
           <div className="the_latest_article_child">
               {data2.filter((item)=>item.categorey==="The Latest Article" ).map((d1,index)=>{
                return(
                <div className="latest_article_box" key={d1.id}>
               <Link to={d1.path}><img src={d1.img} alt="latest_article"  className="img"/></Link> 
                 <div className="latest_article_box_child">
                    <h3 className="latest_article_h3">{d1.heading}</h3>
                    <p>{d1.text}</p>
                 </div>
            </div>
                )
               })}
           </div>
           <div className="avdertise">
            Advertise
            </div>
        </div>
        </>
    )
}