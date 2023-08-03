import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { store1 } from '../../../NavigationBar'
function Mashroom() {
  const [dataE]=useContext(store1)
  const back=useNavigate(dataE)
  return (
    <div className="papaya_main_div">
       
    {dataE.filter((item)=>item.categorey==="The Latest Article" && item.name==="Fitness" && item.path==='/mashroom').map((data,index)=>{
      return(
          <div className="papaya_sub"> 
              <h1>{data.title}</h1>
              <span style={{fontSize:18,fontStyle:"italic"}}>{data.description}</span>
              <img src={data.urlToImage} alt="the_latest_Javan" className='fitness_article.img' style={{}} />
               
               <p style={{lineHeight:"1.5"}}>
                  {data.content}
               </p>
               <button className='backbtn_mash' onClick={()=>{back(-1)}}>Back</button>
          </div>
      )
    })}
    </div>
  )
}

export default Mashroom