import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'


function Anushkha() {
  const [data25]=useContext(store1)
  const back=useNavigate(data25)
  return (
    <div className="papaya_main_div">
       
    {data25.filter((item)=>item.categorey==="News" && item.path==='/anushkha').map((data,index)=>{
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

export default Anushkha