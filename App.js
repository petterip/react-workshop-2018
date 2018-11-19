import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemValue: "New item",
      items: ["Hammer", "Nails", "Stuff"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.setState({
      items: [...this.state.items, this.state.newItemValue]
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
    {list.map(item => (
      <Item key={item} item={item} />
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
