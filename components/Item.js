import React from 'react'

const Item = ({ item, deleteItemAction }) => (
  <li>
    {item.name} -
    <button onClick={() => deleteItemAction(item.id)}>Delete</button>
  </li>
)

export default Item
