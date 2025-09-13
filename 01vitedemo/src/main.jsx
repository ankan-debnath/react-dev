import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me'
}

const anotherReactElement = (
  <a href="www.google.com" target='_blank'>Click me</a>
)

const newReactElement = React.createElement(
  'a',    // type
  {
    href: 'https://www.google.com', 
    target: '_blank'
  },      // props
  'Click me'  // children
)

console.log(newReactElement)      // this is a react element
console.log(anotherReactElement)  // this is also a react element
console.log(App())                // this is a react component


createRoot(document.getElementById('root')).render(
  // anotherReactElement
  // reactElement               this will not work
  newReactElement             // this will work
  // <App/>
)
