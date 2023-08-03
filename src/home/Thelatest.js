import React, { useContext } from "react";
import { store } from "./Home";
import { Link } from "react-router-dom";




export function Thelatest(){
    const [data1]=useContext(store)
    // console.log(data1);
    return(
        <>
         <h1 className="home_thelatest">The Latest</h1>
          
         
          <div className="the_latest">
          { data1.filter((item)=>item.categorey==="The Latest").map((d,index)=>{
            return(
                
                <div className="the_latest_image" key={d.id}>
                <Link to={d.path}><img src={d.img} alt="the_latest" style={{width:'auto', height:"200px",objectFit:"cover"}} className="img" /></Link>
                <h3 >{d.heading}</h3>
                <p>{d.text}</p>
                </div>
                
            )
           
            })}
        
         </div>
        </>
    )
}