import { combineReducers } from 'redux'

const initialState = [
  { id: 'item-1', name: 'Hammer', quantity: 5 },
  { id: 'item-2', name: 'Drill', quantity: 2 },
  { id: 'item-3', name: "Nails 'n stuff", quantity: 3 }
]

// TODO: Reducer for items
function items(state = initialState, action) {
  /* return new state, based on the given action */
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          quantity: action.payload.quantity
        }
      ] /* copy of the current state, complemented with the new item */

    case 'DELETE_ITEM':
      var deleteItemId = action.payload
      var newState = state.filter(item => item.id !== deleteItemId)
      return newState

    default:
      return state
  }
}

export default combineReducers({ items })
