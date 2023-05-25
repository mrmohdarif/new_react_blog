import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'

function Lalu() {
  const [data22]=useContext(store1)
    return(
        <>
         <div className="papaya_main_div">
          {data22.filter((item)=>item.name==="tiktok").map((data,index)=>{
            return(
                <div className="papaya_sub"> 
                    <h1>{data.title}</h1>
                    <span>{data.description}</span>
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

export default Lalu