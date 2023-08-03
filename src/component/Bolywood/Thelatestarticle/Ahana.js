import React, { useContext } from 'react'
import { store1 } from '../../../NavigationBar'
import { useNavigate } from 'react-router-dom'

function Ahana() {
  const [dataC]=useContext(store1)
  console.log("dataC",dataC);
  const back=useNavigate(dataC)
  return (
    



    <div className="papaya_main_div">
    {dataC
      .filter(
        (item) =>
          item.categorey === "The Latest Article" &&
          item.name === "Bollywood" &&
          item.path === "/ahana"
      )
      .map((data, index) => {
        return (
          <div className="papaya_sub">
            <h1>{data.title}</h1>
            <span style={{ fontSize: "18px", fontStyle: "italic" }}>
              {data.description}
            </span>
            <img
              src={data.urlToImage}
              alt="the_latest_Javan"
              style={{  }}
              className='actres'
            />
            <p>{data.content}</p>
            <button
              className="backbtn_btn4"
              onClick={() => {
                back(-1);
              }}
            >
              Back
            </button>
          </div>
        );
      })}
  </div>
  )
}

export default Ahana