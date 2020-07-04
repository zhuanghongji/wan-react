import { hot } from "react-hot-loader/root"
import { setConfig } from "react-hot-loader"
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

setConfig({
  reloadHooks: false,
})

const HotApp = hot(App)

ReactDOM.render(
  <React.StrictMode>
    <HotApp />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
