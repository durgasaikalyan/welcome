// Write your code here
import {Component} from 'react'

import "./components/Welcome/index.css"

class App extends Component {
  state = { Subscribe: true }

  render() {
    const { Subscribe } = this.state
    let SubscribeButton
    if (Subscribe) {
      SubscribeButton= <button>Subscribed</button>
    } else {
      SubscribeButton = <button>Subscribe</button>
    }

  render() {
    return 
    <div className="container">
    <h1 className="header">Welcome</h1>
    <p className="paragraph">Thank you! Happy Learning</p>
    <button className="button" onClick=this.SubscribeButton></button>
    </div>
  }
}

export default App
