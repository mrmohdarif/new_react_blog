import React, { useContext } from "react";
import { store } from "./Home";
export function Thelateststories(){
    const [data3]=useContext(store)
    console.log("this is data3",data3);
    return(
        <>
        
        <h1>Latest Stories</h1>
           <div className="latest_stories">
           
       
           {data3.filter((item)=>item.categorey==="Latest Stories").map((d,index)=>{
                return(
                    <div className="latest_stories_box" key={d.id}>
                    <img src={d.img} alt="img" style={{width:"auto"}}/>
                    <h2>{d.heading}</h2>
                    <p>{d.text}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </>
    )
}