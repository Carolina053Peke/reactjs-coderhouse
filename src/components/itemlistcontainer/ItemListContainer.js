import './ItemListContainerStyles.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemlist/ItemList';

const mis_productos = [{
  id: 1,
  title: 'Teclado de pc',
  price: 2000,
  img: 'https://picsum.photos/id/20/600'

},
{
  id: 2,
  title: 'Mouse RGB',
  price: 3500,
  img: 'https://picsum.photos/id/30/600'
},
{
  id: 3,
  title: 'Cable de red',
  price: 500,
  img: 'https://picsum.photos/id/40/600'
},
{
  id: 4,
  title: 'Monitor de PC Samsung',
  price: 15000,
  img: 'https://picsum.photos/id/50/600'
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
