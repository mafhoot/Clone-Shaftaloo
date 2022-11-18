import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./card";
import { getRestaurantCards } from "../../services/axios";

import './homePageCustomer.css'

export const ListCardRes = () => {

    const filters = ['All', 'fast-food', 'irani', 'salad']
    const [cards, setCards] = useState();
    const [data, setData] = useState()
    const [tag, setTag] = useState("All")

    useEffect(() => {
      getRestaurantCards()
      .then((response)=>{
        console.log("response : ", response.data)
        setData(response.data)
        const newCard = data?.map((item) => 
        {
          return {
            id : item.id,
            name : item.name,
            location : item.address,
            tags : item.tag
          }
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
    }, [tag])

    return (
        
        <div>
          <div className="container">
            <div>
              <div className="filters">
                {filters.map((filter) => (
                    <button key={filter} className="simple-filter" 
                    onClick={() => {setTag(filter); console.log(filter)}}>{filter}</button>
                  ))}
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