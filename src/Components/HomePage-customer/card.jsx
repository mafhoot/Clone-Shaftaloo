import React from "react";
import { useState } from "react";
import './homePageCustomer.css'

export function  Card  ({name, location, tags}) {

  const image_res = "";
  const logo_res = "";

    return (
      <div className="card">
        <div className="card-top">
          <img className="img-res"
               src={image_res} 
               alt="restaurant-card" />
        </div>
        <div className="card-discription">
          <img className="logo" 
               src={logo_res}
               alt="logo" />
          <h1>{name}</h1>
        </div>
        <p className="location">Location : <span className="simple-loc">{location}</span></p>
        <p className="tags">tags : 
          {tags.map((tag) => (
            <span className="simple-tag" id={tags.indexOf(tag)}>{tag}</span>
           ))}
        </p>      
      </div>
    )
}