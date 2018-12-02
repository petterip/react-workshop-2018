import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const StorageList = ({ list }) => (
  <ul>
    {list.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </ul>
)

function mapStateToProps(state) {
  return { list: state.items }
}

export default connect(mapStateToProps)(StorageList)
