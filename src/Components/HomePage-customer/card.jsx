import React from "react";
import { useState } from "react";
import './homePageCustomer.css'

export const Card = (props) => {
  const [name, setName] = useState("Macdonald");
  const [location, setLoc] = useState('atabak');
  const [image_res, setImage_res] = useState("https://images.wsj.net/im-581988/M")
  const [logo_res, setLogo_res] = useState("https://ascenciamalls.com/media/5xsdueaq/transparent-mcdonalds-logo.png?crop=0.051414758200391056,0.06154205885768007,0.051414758200390966,0.0625222618886456&cropmode=percentage&width=338&height=330&rnd=133076233019500000")
  const tags_list = [
    {
      id: 1,
      name: 'fast-food'
    },
    {
      id:2,
      name: 'irani'
    }
  ]
  const [tags, setTags] = useState(tags_list);

  //const handleAddTag = () => {}

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
            <span className="simple-tag" id={tag.id}>{tag.name}</span>
           ))}
        </p>      
      </div>
    )
}