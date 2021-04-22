import React from 'react';
import { Item } from '../item/Item';
import './ItemList.css';

export const ItemList = (props) => {


  return (
    <div className="ItemList">
      {
        props && props.itemList.map((item) => {
          return <Item item={item} key={item.id} />
        })
      }
    </div>
  )
}