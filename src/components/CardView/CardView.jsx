import React from 'react';
import ShopCard from '../Items/ShopCard/ShopCard';
import "./CardView.css"

const CardView = ({ cards }) => (
  <div className="card-view">
    {cards.map((card, index) => (
      <ShopCard key={index} {...card} />
    ))}
  </div>
);

export default CardView;