import React from 'react'

const AddItemButton = ({ buttonAction }) => (
  <button type="button" onClick={() => buttonAction()}>
    Add item
  </button>
)

export default AddItemButton
