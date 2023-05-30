import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store1 } from '../../../NavigationBar'


function Cnn() {
    const [dataD]=useContext(store1)
    const back=useNavigate(dataD)
    return(
        <div className="papaya_main_div">
       
    {dataD.filter((item)=>item.categorey==="The Latest" && item.name==="Hollywood" && item.path==='/cnn').map((data,index)=>{
      return(
          <div className="papaya_sub"> 
              <h1>{data.title}</h1>
              <span style={{fontSize:18,fontStyle:"italic"}}>{data.description}</span>
              <img src={data.urlToImage} alt="the_latest_Javan" className='Holy_img' style={{}} />
               
               <p style={{lineHeight:"1.3"}}>
                  {data.content}
               </p>
               <button className='backbtn' onClick={()=>{back(-1)}}>Back</button>
          </div>
      )
    })}
    </div>
    )
}

export default Cnn