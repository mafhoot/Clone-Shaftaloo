import React from "react";
import { useState } from "react";
import { Card } from "./card";
import './List.css'

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
                                      <span className="filter" id={filter.id}>{filter.name}</span>))}</p>
            </div>
            <div className="cards-list">
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
    )
}