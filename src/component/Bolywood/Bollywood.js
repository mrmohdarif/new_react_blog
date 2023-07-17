import React, { useContext } from "react";

import { Nav } from "../../Nav";
import { store1 } from "../../NavigationBar";
import { BollywoodThelatest } from "./BollywoodThelatest";
import { BollywoodThelatestarticle } from "./BollywoodThelatestarticle";
import { BollywoodThelateststories } from "./BollywoodThelateststories";
import Footer from "../../Footer";
export function Bollywood() {
  const [data5] = useContext(store1);
  console.log("this is data5", data5);
  return (
    <>
      <Nav />
      <div className="home1_image">
        <div>
          <img
            src="https://www.betulupdate.com/wp-content/uploads/2023/05/photo1683538395.jpeg"
            alt="bolywoood"
            className="bolywood_home_image"
          />
          
        </div>

        <div className="home2_image">
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1366,h_548,c_scale,f_webp,q_auto:eco/resources/0-6-3008/cover/1170x658withlogoef8e0605843648afb2c67646c7ebf683.jpg"
            alt="hollywood"
            className="holywood1_home_image"
           
          />
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/cover/1920x7703f62f1e28948480fb8b1a13dab03dba2.jpg"
            alt="fitness"
          
            style={{
              // width: "400px",
              // height: "150px",
              // marginBottom: "5px",
              // borderRadius: "10px",
            }}
            className="fitness_home_image"
          />
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5363736/cover/1920x7704a60024dbd08411e9989fc8e83718bf6.jpg"
            alt="tech"
            className="tech_home_image"
            style={{
              // width: "400px",
              // height: "150px",
              // marginBottom: "5px",
              // borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <store1.Provider></store1.Provider>
      <BollywoodThelatest />
      <BollywoodThelatestarticle />
      <BollywoodThelateststories />
      
    </>
  );
}
