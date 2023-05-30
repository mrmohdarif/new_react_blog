import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'

function Manoj() {
  const [data24]=useContext(store1)
  console.log("this is data24",data24)
  const back=useNavigate(data24)
  return (
    <div className="main_move_div">
            {data24.filter((item)=>item.categorey==='News' && item.path==='/manoj').map((data,index)=>{
                return(
                    <div>
                    <div className="poster">
                    
                    <img src={data.urlToImage} alt="the_latest_Javan" className='manoj' style={{}} />
                    </div>
                    {/* <h1 style={{textAlign:"center"}}>{data.title}</h1> */}
                    <h1>{data.title}</h1>
                     <p style={{fontSize:"22px"}}>{data.content}</p>
                     <div className="poster">
                    {/* <img src={data.} alt="the_latest_Javan" style={{width:"600px"}} /> */}
                    <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
                    </div>
                   
                    </div>
                )
            })}
            
         </div>
  )
}

export default Manoj
