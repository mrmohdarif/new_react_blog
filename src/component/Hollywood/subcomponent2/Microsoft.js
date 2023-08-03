import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'

function Microsoft() {
  const [dataE]=useContext(store1)
  const back=useNavigate(dataE)
  return (
    <div className="papaya_main_div">
       
    {dataE.filter((item)=>item.categorey==="The Latest Article" && item.name==="Hollywood" && item.path==='/microsoft').map((data,index)=>{
      return(
          <div className="papaya_sub"> 
              <h1>{data.title}</h1>
              <span style={{fontSize:18,fontStyle:"italic"}}>{data.description}</span>
              <img src={data.urlToImage} alt="the_latest_Javan" className='holy_article_img' style={{}} />
               
               <p style={{lineHeight:"1.3"}}>
                  {data.content}
               </p>
               <button className='backbtn_micro' onClick={()=>{back(-1)}}>Back</button>
          </div>
      )
    })}
    </div>
  )
}

export default Microsoft