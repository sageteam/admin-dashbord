import React , {Component} from 'react';

export default class Numbers extends Component{

   
  render() {
    return (
    <div>
{/*       
{
 this.props.score > 10 &&
 <h2>{this.props.name} succeeded</h2> 
}
{
  this.props.score < 10 &&
  <h2>{this.props.name} Failed</h2>
} */}
{
this.props.score >10
? <h2> {this.props.name} succeeded </h2>
: <h2> {this.props.name} Failed </h2>
}



    </div>
    
    );
  
}
}
