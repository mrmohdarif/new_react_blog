import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Hollywood } from "./Hollywood";
import { Link } from "react-router-dom";


export function HollywoodThelatest(){
    const [data10]=useContext(store1)
    console.log("this is data 6",data10);
  
    
    return(
        <>
         <h1 className="holy_thelatest">The Latest</h1>
          
         
          <div className="the_latest">
          { data10.filter((item)=>item.categorey==="The Latest" && item.name==='Hollywood').map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                <Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img thelatestholywood" /></Link>
                <p >{d.title}</p>
                <p>{d.publishedAt}</p>
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}