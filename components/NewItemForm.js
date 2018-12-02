import React from 'react'
import AddItemButton from './AddItemButton'

const NewItemForm = ({ addNewItemAction, newItemValue, handleChange }) => (
  <form>
    <input type="text" name="newItem" value={newItemValue} onChange={handleChange} />
    <AddItemButton buttonAction={addNewItemAction} />
  </form>
)

export default NewItemForm
