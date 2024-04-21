import React, { useState } from 'react';
import CardView from '../CardView/CardView';
import ListView from '../ListView/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';


const Store = ({ products }) => {
  const [layout, setLayout] = useState('cards'); // начальное значение 'cards'

  const handleSwitch = () => {
    setLayout(layout === 'cards' ? 'list' : 'cards'); // изменение состояния при переключении между видами
  };

  return (
    <div>
      <IconSwitch
        icon={layout === 'cards' ? 'view_list' : 'view_module'} // выбор иконки в зависимости от текущего состояния
        onSwitch={handleSwitch}
      />
      {layout === 'cards' ? (
        <CardView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

export default Store;