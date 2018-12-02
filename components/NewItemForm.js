import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddItemButton from './AddItemButton'
import { addItemAction } from '../actions'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = { newItemValue: '' }

    this.handleChange = this.handleChange.bind(this)
    this.addNewItemAction = this.addNewItemAction.bind(this)
  }

  handleChange(event) {
    this.setState({ newItemValue: event.target.value })
  }

  addNewItemAction() {
    const newItem = this.state.newItemValue

    // add item to store
    this.props.addItemAction(newItem)

    // empty the input field
    this.setState({ newItemValue: '' })
  }

  render() {
    return (
      <form>
        <input type="text" name="newItem" value={this.state.newItemValue} onChange={this.handleChange} />
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
