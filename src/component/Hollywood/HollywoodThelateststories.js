import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";

export function HollywoodThelateststories(){
    const [data12]=useContext(store1)
    console.log("this is data3",data12);
    return(
        <div className="Hollywood_latest_stories">
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {data12.filter((item)=>item.categorey==="Latest Stories" && item.name==="Hollywood").map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>
                    <Link to={d.path}><h3 className="holywood_link_storey_text">{d.title}</h3></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}