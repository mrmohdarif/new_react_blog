import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";


export function TechnologyThelatest(){
    const [data17]=useContext(store1)
    console.log("this is data 6",data17);
  
    
    return(
        <>
         <h2>The Latest</h2>
     
         
          <div className="the_latest">
          { data17.filter((item)=>item.categorey==="The Latest" && item.name==="Technology").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
               <Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img" /></Link>
                <h3 >{d.title}</h3>
                <p>{d.publishedAt}</p>
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}