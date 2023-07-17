import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../Nav";
import { store1 } from "../../NavigationBar";
import { HollywoodThelatest } from "./HollywoodThelatest";
import { HollywoodThelatestarticle } from "./HollywoodThelatestarticle";
import { HollywoodThelateststories } from "./HollywoodThelateststories";
import Footer from "../../Footer";


export function Hollywood(){
   const [data9]=useContext(store1)
   console.log("data9",data9);
    return(
        <>
         <Nav/>
         <div className="home1_image">
                <div >
                 
                <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4280/674280-h" alt="bolywoood" className="mareval_home_image"style={{}}/> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5435/675435-h" className="hft" alt="hollywood" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5117/1455117-h-c29d50eadb8e" className="hft" alt="fitness" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8307/1328307-h-fcd961dba8ca" className="hft" alt="tech" />
                 </div>
            </div>
              <HollywoodThelatest/>
              <HollywoodThelatestarticle/>
              <HollywoodThelateststories/>
             
        </>
    )
}