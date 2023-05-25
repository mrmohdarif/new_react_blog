import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'

function Dharavi() {
  const [data26]=useContext(store1)
  const back=useNavigate(data26)
  return (
    <div className="papaya_main_div">
       
    {data26.filter((item)=>item.categorey==="News" && item.path==='/Dharavi').map((data,index)=>{
      return(
          <div className="papaya_sub"> 
              <h1>{data.title}</h1>
              <span>{data.description}</span>
              <img src={data.urlToImage} alt="the_latest_Javan" style={{width:"600px"}} />
               <p>
                  {data.content}
               </p>
               <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
          </div>
      )
    })}
    </div>
  )
}

export default Dharavi