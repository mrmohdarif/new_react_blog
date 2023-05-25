import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { store1 } from "../../NavigationBar";

export function Papaya(){
   const [data21]=useContext(store1)
   console.log("datapapaya",data21)
    return(
        <>
         <div className="papaya_main_div">
          {data21.filter((item)=>item.name==="fruit").map((data,index)=>{
            return(
                <div className="papaya_sub"> 
                    <h1>{data.title}</h1>
                    <span>{data.descriptin}</span>
                    <img src={data.urltoimg} alt="the_latest_Javan" style={{width:"600px"}} />
                     <p>
                        {data.content}
                     </p>
                </div>
            )
          })}
          </div>
        </>
    )
}