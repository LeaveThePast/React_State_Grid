import React from 'react';
import ShopItem from '../Items/ShopItem/ShopItem';
import "./ListView.css"

const ListView = ({ items }) => (
  <div className="list-view">
    {items.map((item, index) => (
      <ShopItem key={index} {...item} />
    ))}
  </div>
);

export default ListView;