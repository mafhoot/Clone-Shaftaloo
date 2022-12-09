import React from "react";
import { useState } from "react";
import './homePageCustomer.css'

export function  Card  ({name, location, image_res, logo_res, tags}) {

  const tagGen = () => {
    const tmp=[]
    tags.forEach(item=>{
      //console.log(item);
      tmp.push(
        <span className="simple-tag" id={item.id}>{item.value}</span>
      )
    })
    return tmp;
  }

    return (
      <div className="card">
        
          <img className="img-res" src={image_res} alt="restaurant-card" />
          <img className="cardlogo" src={logo_res} alt="logo" />
          <p className="restCardName">{name}</p>
          <div className="card-discription">
            <p className="location">Location : {location}</p>
            <p className="tags">Tags : {tagGen()}</p>   
          </div>
             
      </div>
    )
}