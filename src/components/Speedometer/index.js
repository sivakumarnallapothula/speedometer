import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  accelerate = () => {
    const {count} = this.state
    if (count >= 0) {
      this.setState(prevstate => ({
        count: prevstate.count + 10,
      }))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count <= 200 && count >= 0) {
      this.setState(prevstate => ({
        count: prevstate.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="ok">
        <div>
          <h1 className="ll">SPEEDOMETER</h1>
          <img
            className="sk"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="ll">Speed is {count}mph</h1>
          <p className="ll">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="naari">
            <button type="button" className="bb" onClick={this.accelerate}>
              Accelerate
            </button>
            <button type="button" className="bb" onClick={this.brake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
