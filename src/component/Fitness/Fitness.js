import React, { useContext } from "react";

import { Nav } from "../../Nav";
import { store1 } from "../../NavigationBar";
import { FitnessThelatest } from "./FitnessThelatest";
import { FitnessThelatestarticle } from "./FitnessThelatestarticle";
import { FitnessThelateststories } from "./FitnessThelateststories";
import Footer from "../../Footer";
export function Fitness(){
    const [data13]=useContext(store1)
    console.log("this is fitness 13",data13)
    return(
        <>
        <Nav/>
        <div className="home1_image">
                <div >
                 
                <img src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bolywoood" className="fitness_home" style={{borderRadius:"10px"}}/> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=600" className="fit fit1" class alt="hollywood" style={{}}/>
                    <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" className="fit" alt="fitness" style={{}}/>
                    <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600" className="fit" alt="tech" style={{}}/>
                 </div>
            </div>
           <FitnessThelatest/>
           <FitnessThelatestarticle/>
           <FitnessThelateststories/>
           <Footer/>
          
        </>
    )
}