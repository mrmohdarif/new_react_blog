import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'

function Bank() {
  const [data20]=useContext(store1)
  const back=useNavigate()
  return (
    <div className="main_move_div">
    {data20.filter((item)=>item.categorey==='The Latest Article' && item.path==='/bank').map((data,index)=>{
        return(
            <div>
                <h1 style={{textAlign:"center"}}>{data.heading}</h1>
            <div className="poster">
            <img src={data.img} alt="the_latest_Javan" className='the_latest_Javan_img' style={{}} />
            </div>
           
             <h1>{data.title}</h1>
             <p style={{fontSize:"22px"}}>{data.text}</p>
             <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
            </div>
        )
    })}
    
 </div>
  )
}

export default Bank