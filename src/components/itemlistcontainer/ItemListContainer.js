import './ItemListContainerStyles.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemlist/ItemList';

const mis_productos = [{
  id: 1,
  title: 'Teclado de pc',
  price: 2000,
  img: 'https://picsum.photos/id/8/100/100'

},
{
  id: 2,
  title: 'Mouse RGB',
  price: 3500,
  img: 'https://picsum.photos/id/7/100/100'
},
{
  id: 3,
  title: 'Cable de red',
  price: 500,
  img: 'https://picsum.photos/id/6/100/100'
},
{
  id: 4,
  title: 'Monitor de PC Samsung',
  price: 15000,
  img: 'https://picsum.photos/id/5/100/100'
}
]

export const ItemListContainer = () => {

const [itemList, setItemList] = useState(0);

useEffect(() => {
  setTimeout(() => {
    setItemList(mis_productos);
  }, 2000)
}, [])


return (
  <>
    {
      itemList && <ItemList itemList={itemList} />
    }
  </>
)
}
