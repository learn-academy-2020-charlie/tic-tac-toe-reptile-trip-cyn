import React, { Component } from 'react'



class Square extends Component{

  handleClick1 = () => {
    this.props.updatePlayer1Answers(this.props.index)
    this.props.updatePlayer2Answers(this.props.index)
  }

  handleClick2 = () => {
    this.props.markBox(this.props.index)
  }
  
  handleClick3 = () => {
    this.props.checkPlayer1Win()
    this.props.checkPlayer2Win()
  }

  handleClick4 = () => {
    this.props.reverseTurns()
  }


  render(){
    return(
      <React.Fragment>
        <div id="square" onClick= {()=>
          {this.handleClick1();
           this.handleClick2();
           this.handleClick3();
           this.handleClick4();}}
        > 

        <div id="squaretext">
        {this.props.value} 
        </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Square


