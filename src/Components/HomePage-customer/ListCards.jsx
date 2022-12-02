import axios from "axios";
import React from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { Card } from "./card";
import { getRestaurantCards } from "../../Services/axios";

import './homePageCustomer.css'

export const ListCardRes = () => {

    const filters = ['all', 'Fast Food', 'Chicken', 'Irani', 'Pizza']
    const [cards, setCards] = useState();
    const [data, setData] = useState([])
    const [currentFilter, setCurrentFilter] = useState("all")
    const [number, setNember] = useState(0)

    useEffect(() => {
      getRestaurantCards(currentFilter, number)
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
            logo_res : item.logoImg,
            image_res : item.backgroundImg,
            tags : item.tag,
            tags : item.tags
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
    }, [,currentFilter])

    const dataGen = () => {
      const tmp=[]
      data.forEach(item=>{
        console.log(item);
        tmp.push(<div onClick={() => {handlClick(item.id)}}>
           <Card 
            key={item.id}
            id={item.id}
            name={item.name}
            location={item.address}
            image_res={item.backgroundImg}
            logo_res={item.logoImg}
            tags={item.tags}
          />
        </div>
         
        )
      })
      return tmp;
    }

    const handlClick = (id) => {
      console.log("this card id is : ", id)
    }

    const changeFilter = (p) => {
      setCurrentFilter(p)
      console.log(currentFilter)
    }

    const add_the_number = () => {
      console.log();
      setNember(number +1);
    }

    const loader = () => {
      if (data.length !== 0) {
        return <p className="loader">loading...</p>
      }
    }

    return (
        <div className="homePage-customer">
          <div className="container">
            <div>
              <div className="filters">
                {filters.map((filter) => (
                    <button onClick={()=>{changeFilter(filter)}} className="simple-filter">{filter}</button>
                  ))}
              </div>
            </div>
            <div className="cards-list">
              <div className="simple-card-inlist">
                <InfiniteScroll
                  dataLength={data.length}
                  next={() => add_the_number()}
                  hasMore={() => getRestaurantCards(currentFilter, number+1)}
                  loader={() => loader()}
                  >
                    {dataGen()}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
    )
}