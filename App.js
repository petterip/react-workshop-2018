import React, { Component } from 'react'
import _ from 'lodash'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItemValue: 'New item',
      items: [
        { id: 'item-1', name: 'Hammer' },
        { id: 'item-2', name: 'Drill' },
        { id: 'item-3', name: "Nails 'n' stuff " }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItemAction = this.deleteItemAction.bind(this)
  }

  addItem() {
    let timestamp = new Date().getTime()
    let key = 'item-' + timestamp
    let newItem = { id: key, name: this.state.newItemValue }

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

const StorageList = ({ list, deleteItemAction }) => (
  <ul>
    {list.map(item => (
      <Item key={item.id} deleteItemAction={deleteItemAction} item={item} />
    ))}
  </ul>
)

const NewItemForm = ({ addNewItemAction, newItemValue, handleChange }) => (
  <form>
    <input type="text" name="newItem" value={newItemValue} onChange={handleChange} />
    <AddItemButton buttonAction={addNewItemAction} />
  </form>
)

const AddItemButton = ({ buttonAction }) => (
  <button type="button" onClick={() => buttonAction()}>
    Add item
  </button>
)

const Item = ({ item, deleteItemAction }) => (
  <li>
    {item.name} - <button onClick={() => deleteItemAction(item.id)}>Delete</button>
  </li>
)

export default App
