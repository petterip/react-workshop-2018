// Action creator for addItem
export const addItemAction = newItemValue => {
  const timestamp = new Date().getTime()
  const key = 'item-' + timestamp
  const newItem = { id: key + timestamp, name: newItemValue }

  return {
    type: 'ADD_ITEM',
    payload: newItem
  }
}

// TODO: Action creator for deleteItem
export const deleteItemAction = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  }
}
