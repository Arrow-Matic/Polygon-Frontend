import React from 'react'
import ReactDOM from 'react-dom'
import { MoralisProvider } from 'react-moralis'
import App from './App'
import reportWebVitals from './reportWebVitals'

const appId =
  'buas0r8k6V3peaVueknUNGdm7ljlDmUtSLxGjvpa'
const serverURL =
  'https://8ywmiidjmdfz.moralis.io:2053/server'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId={appId}
      serverUrl={serverURL}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
