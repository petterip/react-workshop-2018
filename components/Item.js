import React from 'react'
import { connect } from 'react-redux'
import { deleteItemAction } from '../actions'

const Item = ({ item, deleteItemAction }) => (
  <li>
    {item.name}: {item.quantity} pieces - <button onClick={() => deleteItemAction(item.id)}>Delete</button>
  </li>
)

const actionsCreators = {
  deleteItemAction
}

export default connect(
  null,
  actionsCreators
)(Item)
