import React, { Component } from 'react'



class Square extends Component{

  handleClick = () => {
    this.props.markBox(this.props.index)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick= {this.handleClick}> 

        <div id="squaretext">
        {this.props.value} 
        </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Square


