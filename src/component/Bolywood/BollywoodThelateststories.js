import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
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
                    <img src={d.urlToImage} alt="img" style={{width:"auto"}}/>
                    <h3>{d.title}</h3>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}