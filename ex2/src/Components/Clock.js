import React from "react";

class Clock extends React.Component {
    constructor(){
        super()
        this.state = {
            time : new Date()
        }
    }

    settime(){
        this.setState({
            time : new Date()
        })
    }

    componentDidMount(){
        this.interval = setInterval(()=>this.settime(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    render() { 
        return (
            <h1>{this.state.time.toLocaleTimeString()}</h1>
        );
    }
}
 
export default Clock;