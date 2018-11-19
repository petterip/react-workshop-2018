import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemValue: "New item",
      items: {
        "item-1": "Hammer",
        "item-2": "Nails",
        "item-3": "Stuff"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let timestamp = new Date().getTime();
    let key = "item-" + timestamp;

    this.setState({
      items: { ...this.state.items, [key]: this.state.newItemValue }
    });
  }

  handleChange(event) {
    this.setState({ newItemValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Storage Manager</h1>
        <StorageList list={this.state.items} />
        <NewItemForm
          addNewItemAction={this.addItem}
          newItemValue={this.state.newItemValue}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const StorageList = ({ list }) => (
  <ul>
    {Object.keys(list).map(key => (
      <Item key={key} item={list[key]} />
    ))}
  </ul>
);

const NewItemForm = ({ addNewItemAction, newItemValue, handleChange }) => (
  <form>
    <input
      type="text"
      name="newItem"
      value={newItemValue}
      onChange={handleChange}
    />
    <AddItemButton buttonAction={addNewItemAction} />
  </form>
);

const AddItemButton = ({ buttonAction }) => (
  <button type="button" onClick={() => buttonAction()}>
    Add item
  </button>
);

const Item = ({ item }) => <li>{item}</li>;

export default App;
