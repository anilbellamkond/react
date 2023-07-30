import {Component} from 'react'
import "./index.css"

class Speedometer extends Component {
    state = {speed:0}
    accelerate=()=> {
        this.setState((prev)=>({speed:prev.speed+10}))
    }
    brake = ()=>{
        this.setState((prev)=>({speed:prev.speed-10}))
    }
    render(){
        const {speed} = this.state
        return (
            <div>
                    <h1 className="heading">Speedometer</h1>
                    <img className="img" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
                    <p className='para1'>Speed is {speed}mph</p>
                    <p className="para2">Min Limit is 0mph,Max Limit is 200mph</p>
                    <div className="button">
                            <button type="button" className="acc"  onClick={this.accelerate}>Accelerate</button> 
                            <button type="button" className="brake">Apply Brake</button>
                    </div>
            </div>
        )
    }
}

export default Speedometer