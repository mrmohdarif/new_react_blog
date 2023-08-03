import React, { useContext } from "react";
import { store1 } from "../../NavigationBar";
import { Link } from "react-router-dom";
export function FoodThelateststories(){
    const [data19]=useContext(store1)
    console.log("this is data3",data19);
    return(
        <div className="food_latest_stories1">
          <h1 className="food_thelateststories">Latest Stories</h1>
             
           <div className="food_latest_stories2">
           {data19.filter((item)=>item.categorey==="Latest Stories" && item.name==='Food').map((d,index)=>{
                return(
                    <div className="latest_stories_box">
                    <Link to={d.path}><img src={d.urlToImage} alt="img" style={{width:"350px"}}/></Link>

                    <Link to={d.path}><h3 className="holywood_link_storey_text">{d.title}</h3></Link>
                    <p>{d.description}</p>
                    <p>{d.publishedAt}</p>
                    </div>  
                )
             })}
             

            
             

           </div>
        </div>
    )
}