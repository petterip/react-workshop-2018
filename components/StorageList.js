import React from 'react'
import Item from './Item'

const StorageList = ({ list, deleteItemAction }) => (
  <ul>
    {list.map(item => (
      <Item key={item.id} deleteItemAction={deleteItemAction} item={item} />
    ))}
  </ul>
)

export default StorageList
