import React from "react";
import { useState } from "react";
import { Card } from "./card";
import './homePageCustomer.css'

export const ListCardRes = () => {

    const filters = [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'fast-food'
        },{
            id: 1,
            name: 'irani'
        },{
            id: 1,
            name: 'salad'
        },
    ]

    

    const [filterList, setFilter] = useState(filters);
    const [cards, setCards] = useState();

    return (
        <div>
          <div className="container">
            <div>
              <p className="filters">{filters.map((filter) => (
                                      <button className="simple-filter" id={filter.id}>{filter.name}</button>))}</p>
            </div>
            <div className="cards-list">
              <Card/>
            </div>
          </div>
        </div>
    )
}