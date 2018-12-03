// Action creator for addItem
export const addItemAction = (name, quantity) => {
  const timestamp = new Date().getTime()
  const key = 'item-' + timestamp
  const newItem = { id: key, name, quantity }

  return {
    type: 'ADD_ITEM',
    payload: newItem
  }
}

// Action creator for deleteItem
export const deleteItemAction = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  }
}
