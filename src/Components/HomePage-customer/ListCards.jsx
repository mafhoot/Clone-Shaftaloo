import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./card";
import { getRestaurantCards } from "../../services/axios";

import './homePageCustomer.css'

export const ListCardRes = () => {

    const filters = ['all', 'fast-food', 'irani', 'salad']
    const [cards, setCards] = useState();
    const [data, setData] = useState([])
    const [tag, setTag] = useState("all")

    useEffect(() => {
      getRestaurantCards()
      .then((response)=>{
        console.log("response : ", response.data)
        setData(response.data)
      
        const newCard =[];
        response.data.forEach((item) => 
        {
          newCard.push( {
            id : item.id,
            name : item.name,
            location : item.address,
            tags : item.tag
          })
        })
        setCards(newCard)
      })
    .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
          
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    }, [])
function dataGen(){
  const tmp=[]
  data.forEach(item=>{
    console.log(item);
    tmp.push(
      <Card
      id={item.id}
      name={item.name}
      location={item.address}
      tags={item.tag}
    />
    )
  })
  return tmp;
}
    return (
        
        <div>
          <div className="container">
            <div>
              <div className="filters">
                {
dataGen()
                }
              </div>
            </div>
            <div className="cards-list">
              {cards?.map((card) => {
              <div className="simple-card-inlist">
                <Card key={card.id}{...card}/>
              </div>
              })}
            </div>
          </div>
        </div>
    )
}