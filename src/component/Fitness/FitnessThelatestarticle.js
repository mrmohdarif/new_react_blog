import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";


export function FitnessThelatestarticle(){
    const [data15]=useContext(store1)
    return(
        <>
          
         <h1 className="article_heading">The Latest Article</h1>
       
        <div className="the_latest_article_main">
     
           <div className="the_latest_article_child">
               {data15.filter((item)=>item.categorey==="The Latest Article" && item.name==="Fitness").map((d1,index)=>{
                return(
                <div className="latest_article_box" key={d1.id}>
               <Link to={d1.path}> <img src={d1.urlToImage} alt="latest_article" style={{width:"250px",marginTop:"10px"}}/></Link>
                 <div className="latest_article_box_child">
                    <p>{d1.title}</p>
                    <p>{d1.publishedAt}</p>
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