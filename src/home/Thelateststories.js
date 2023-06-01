import React, { useContext } from "react";
import { store } from "./Home";
import { Link } from "react-router-dom";

export function Thelateststories(){
    const [data3]=useContext(store)
    console.log("this is data3",data3);
    return(
        <div className="stores">
        
        <h1>Latest Stories</h1>
           <div className="latest_stories">
           
        
           {data3.filter((item)=>item.categorey==="Latest Stories"  ).map((d,index)=>{
                return(
                    <div className="latest_stories_box" key={d.id}>
                    <Link to={d.path}><img src={d.img} alt="img" style={{width:"350px"}}/></Link>
                    <Link to={d.path} className="store_home_link_text"><p >{d.text}</p></Link>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}