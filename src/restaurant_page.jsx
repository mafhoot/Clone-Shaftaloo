import React,{useState} from "react";
import { Rate } from 'antd';
//import pic from "./Images/store-banner.jpg"

export const Restaurant_page = () => {
    

      return (
        <>
        <div className="All">
        
        <div className="HeadImage"></div>
        <div className="logo"></div>
        <div className="details">
        <div className="info" >
            <label className="name">KFC</label>
            <p className="description" >The first and best brand of fried foods in the world</p>
            <p className="tags">Tagssss :</p>
            <p></p>
          </div>
        </div>
        </div>
        <Rate  />
        </>
      )
}