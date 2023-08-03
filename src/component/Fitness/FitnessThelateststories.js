import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";
export function FitnessThelateststories(){
    const [data16]=useContext(store1)
    console.log("this is data3",data16);
    return(
        <>
          <h1 className="fitness_stories">Latest Stories</h1>
             
           <div className="fitness_latest_stories">
           {data16.filter((item)=>item.categorey==="Latest Stories" && item.name==='Fitness').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>
                    <Link to={d.path} className="remove_underline"><p className="holywood_link_storey_text">{d.title}</p></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
           </div>
        </>
    )
}