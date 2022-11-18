import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./card";
import { getRestaurantCards } from "../../services/axios";

import './homePageCustomer.css'

export const ListCardRes = () => {

    const filters = ['All', 'fast-food', 'irani', 'salad']
    const [cards, setCards] = useState([]);
    const [data, setData] = useState([])
    const [tag, setTag] = useState("all")

    useEffect(() => {
      setCards([])
      getRestaurantCards()
      .then((res)=>{
        setData(res.data)
        console.log(data)
      })
    .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    }, [tag])

    useEffect(() => {
      data.map((card) => {
        cards.push({
          name : card.name,
          location : card.address,
          tags : card.tags
        })
      })
      console.log(cards)
    }, [data])

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
            {console.log(cards)}
            <div className="cards-list">
              {cards.map((card) => {
              <div className="simple-card-inlist">
                <Card key={card.name} name={card.name} location={card.location} tags={card.tags}/>
              </div>
              })}
            </div>
          </div>
        </div>
    )
}