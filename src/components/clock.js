import React , {Component} from 'react';

export default class Clock extends Component{
    constructor(props){
        super(props)
            this.state = {
                
                time : new Date()
            }
        }
        componentDidMount(){
        this.interval =  setInterval(() => this.tick(),1000)
        }
        tick(){
            this.setState({
                time : new Date()
            })
        }
        componentWillUnmount(){
           clearInterval(this.interval)
        }
        stoptimer(){
            if(this.state.pause){
                this.interval =  setInterval(() => this.tick(),1000)
                this.setState({
                    pause : false

                })
            }else{
                clearInterval(this.interval)
                this.setState({
                    pause:true
                })
            }
        }
  render() {
    return (
   
    <div  onClick = {() => this.stoptimer()}>
       
        <h1> time is {this.state.time.toLocaleTimeString()}</h1>
    </div>
    );
  
}
}
