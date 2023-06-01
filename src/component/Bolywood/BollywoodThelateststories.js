import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";

export function BollywoodThelateststories(){
    const [data8]=useContext(store1)
    console.log("this is data3",data8);
    return(
        <div className="bolywood_the_latest_stories">
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {data8.filter((item)=>item.categorey==="Latest Stories" && item.name==='Bollywood').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>
                    <Link to={d.path}  className="bolywood_stores_link_text"><h3>{d.title}</h3></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}