import { combineReducers } from 'redux'

const initialState = [
  { id: 'item-1', name: 'Hammer' },
  { id: 'item-2', name: 'Drill' },
  { id: 'item-3', name: "Nails 'n stuff" }
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
          name: action.payload.name
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
