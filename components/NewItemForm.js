import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddItemButton from './AddItemButton'
import { addItemAction } from '../actions'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = { newItemName: '', newItemQuantity: '' }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.addNewItemAction = this.addNewItemAction.bind(this)
  }

  handleNameChange(event) {
    this.setState({ newItemName: event.target.value })
  }

  handleQuantityChange(event) {
    this.setState({ newItemQuantity: event.target.value })
  }

  addNewItemAction() {
    const newItem = this.state.newItemName
    const newItemQuantity = this.state.newItemQuantity

    // add item to store with quantity
    this.props.addItemAction(newItem, newItemQuantity)

    // empty the input fields
    this.setState({ newItemName: '', newItemQuantity: '' })
  }

  render() {
    return (
      <form>
        <input type="text" name="newItem" value={this.state.newItemName} onChange={this.handleNameChange} />
        <input type="number" name="newItem" value={this.state.newItemQuantity} onChange={this.handleQuantityChange} />
        <AddItemButton buttonAction={this.addNewItemAction} />
      </form>
    )
  }
}

const actionCreators = { addItemAction }

export default connect(
  null,
  actionCreators
)(NewItemForm)
