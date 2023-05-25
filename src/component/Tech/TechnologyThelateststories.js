import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
export function TechnologyThelateststories(){
    const [data19]=useContext(store1)
    console.log("this is data3",data19);
    return(
        <>
          <h1>Latest Stories</h1>
             
           <div className="latest_stories">
           {data19.filter((item)=>item.categorey==="Latest Stories" && item.name==='Technology').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <img src={d.urlToImage} alt="img" style={{width:"auto"}}/>
                    <h3>{d.title}</h3>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </>
    )
}