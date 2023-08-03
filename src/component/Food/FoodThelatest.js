import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";


export function FoodThelatest(){
    const [data17]=useContext(store1)
    console.log("this is data 6",data17);
  
    
    return(
        <>
         <h1 className="food_thelatest">The Latest</h1>
     
         
          <div className="the_latest">
          { data17.filter((item)=>item.categorey==="The Latest" && item.name==="Food").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                <Link to={d.path}><img src={d.urlToImage} alt="the_latest" style={{width:'350px', height:"200px",objectFit:"cover"}} className="img" /></Link>
                <h3 >{d.title}</h3>
                <p>{d.description}</p>
                {/* <span style={{margin:"0px",}}>{d.publishedAt}</span> */}
                </div>     
            )
           
            })}
        
         </div>
        
        </>
    )
}