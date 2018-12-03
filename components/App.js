import React, { Component } from 'react'
import _ from 'lodash'

import NewItemForm from './NewItemForm'
import StorageList from './StorageList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItemValue: '',
      items: [
        { id: 'item-1', name: 'Hammer' },
        { id: 'item-2', name: 'Drill' },
        { id: 'item-3', name: "Nails 'n stuff" }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItemAction = this.deleteItemAction.bind(this)
  }

  addItem() {
    const timestamp = new Date().getTime()
    const key = 'item-' + timestamp
    const newItem = { id: key, name: this.state.newItemValue }

    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  deleteItemAction(key) {
    const filteredItems = _.filter(this.state.items, item => {
      return item.id !== key
    })

    this.setState({
      items: filteredItems
    })
  }

  handleChange(event) {
    this.setState({ newItemValue: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Storage Manager</h1>
        <StorageList list={this.state.items} deleteItemAction={this.deleteItemAction} />
        <NewItemForm
          addNewItemAction={this.addItem}
          newItemValue={this.state.newItemValue}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default App
