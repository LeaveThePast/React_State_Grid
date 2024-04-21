import React from 'react';

const ShopCard = ({ name, price, color, img }) => (
  <div className="shop-card">
    <img src={img} alt={name} />
    <div className="details">
      <h3>{name}</h3>
      <p>{`Color: ${color}`}</p>
      <p>{`Price: $${price}`}</p>
    </div>
  </div>
);

export default ShopCard;