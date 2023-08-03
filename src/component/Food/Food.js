import React from "react";

import { Nav } from "../../Nav";
import { FoodThelatest } from "./FoodThelatest";
import { FoodThelatestarticle } from "./FoodThelatestarticle";
import { FoodThelateststories } from "./FoodThelateststories";

export function Food(){
    return(
        <>
        <Nav/>
        <div className="home1_image">
                <div >
                 <img src="https://cdn.tasteatlas.com//Images/Dishes/b01fa4c9920d42df9ef472fd4f8e6fda.jpg?w=905&h=510" className="food_home" alt="bolywoood" /> 
                    
                   
               
                </div>

                 <div className="home2_image">
                    <img src="https://cdn.tasteatlas.com//images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=905&h=510" alt="hollywood" className="food3" />
                    <img src="https://cdn.tasteatlas.com//Images/Dishes/d4baa4764df440a4ae6c4bf44dcdff6a.jpg?w=905&h=510" alt="fitness" className="food3" />
                    <img src="https://cdn.tasteatlas.com//Images/Dishes/951728fa0ae74174a2602aaece17368c.jpg?w=905&h=510" alt="tech" className="food3" />
                 </div>
            </div>
            <FoodThelatest/>
            <FoodThelatestarticle/>
            <FoodThelateststories/>
          
        </>
    )
}