import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";

export function HollywoodThelateststories(){
    const [data12]=useContext(store1)
    console.log("this is data3",data12);
    return(
        <div className="Hollywood_latest_stories">
          <h1 className="hollywood_stories">Latest Stories</h1>
             
           <div className="holy_latest_stories">
           {data12.filter((item)=>item.categorey==="Latest Stories" && item.name==="Hollywood").map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>
                    <Link to={d.path} className="remove_underline"><p className="holywood_link_storey_text">{d.title}</p></Link>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}