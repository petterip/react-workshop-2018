import React, { Component } from 'react'
import _ from 'lodash'

import NewItemForm from './NewItemForm'
import StorageList from './StorageList'

const App = () => (
  <div>
    <h1>Storage Manager</h1>
    <StorageList />
    <NewItemForm />
  </div>
)

export default App
