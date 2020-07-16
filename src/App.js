import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import { FaTimes } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      players: ["Player 1", "Player 2"],
      player1AnswerArray: [],
      player2AnswerArray: []
    }
  }

  //create a method of playing rules
  markBox = (index) => {
    //destructuring
    const { squares, players, player1AnswerArray, player2AnswerArray} = this.state
    //check to see that players are not clicking on a box that's already been clicked
    // console.log(typeof <FaTimes />);
    if (typeof squares[index] !== "object") {
      //change the value of squares[?] when clicked
      //if its Players1 turn, "X"
      if(players[0] === "Player 1"){
        let newSquares1 = squares.slice()
        newSquares1[index] = <FaTimes />
        this.setState({ squares: newSquares1 })

      //if its Players2 turn, "O"
      } else if (players[0] === "Player 2") {
          let newSquares2 = squares.slice()
          newSquares2[index] = <FaCircle />
          this.setState({ squares: newSquares2 })

        //ends typeof conditional for logic to run
        } else {
          alert("That spot has already been marked.")
          }      
    } 
  }

  updatePlayer1Answers = (index) => {
    let { player1AnswerArray } = this.state
    let updatedArray1 = player1AnswerArray.slice()
    updatedArray1.push(index)
    //setState on the answer array for official update
    this.setState({ player1AnswerArray: updatedArray1 })
  }

  updatePlayer2Answers = (index) => {
    let { player2AnswerArray } = this.state
    let updatedArray2 = player2AnswerArray.slice()
    updatedArray2.push(index)
    //setState on the answer array for official update
    this.setState({ player2AnswerArray: updatedArray2 })
  }

  reverseTurns = () => {
    let { players } = this.state
    let newPlayers = players.slice()
    newPlayers.reverse()
    this.setState({ players: newPlayers })
  }

  checkPlayer1Win = () => {
    let { player1AnswerArray } = this.state
        //check to see if player arrays have winning set   
        if((player1AnswerArray.includes(0) && 
            player1AnswerArray.includes(1) && 
            player1AnswerArray.includes(2)) 
            || 
            (player1AnswerArray.includes(3) && 
             player1AnswerArray.includes(4) && 
             player1AnswerArray.includes(5))
            || 
            (player1AnswerArray.includes(6) && 
             player1AnswerArray.includes(7) && 
             player1AnswerArray.includes(8))
            || 
            (player1AnswerArray.includes(0) && 
             player1AnswerArray.includes(3) && 
             player1AnswerArray.includes(6))
            || 
            (player1AnswerArray.includes(1) && 
             player1AnswerArray.includes(4) && 
             player1AnswerArray.includes(7))
            || 
            (player1AnswerArray.includes(2) && 
             player1AnswerArray.includes(5) && 
             player1AnswerArray.includes(8))
            || 
            (player1AnswerArray.includes(0) && 
             player1AnswerArray.includes(4) && 
             player1AnswerArray.includes(8))
            || 
            (player1AnswerArray.includes(2) && 
             player1AnswerArray.includes(4) && 
             player1AnswerArray.includes(6))
          ){
              alert("Player 1, you are the winner!") 
            //lock the board
              document.getElementById("board").style.pointerEvents = "none";
           } //end of player 1 logic
  }

  checkPlayer2Win = () => {
    let { player2AnswerArray } = this.state
        //check to see if player arrays have winning set   
        if((player2AnswerArray.includes(0) && 
            player2AnswerArray.includes(1) && 
            player2AnswerArray.includes(2))
            || 
            (player2AnswerArray.includes(3) && 
             player2AnswerArray.includes(4) && 
             player2AnswerArray.includes(5))
            || 
            (player2AnswerArray.includes(6) && 
             player2AnswerArray.includes(7) && 
             player2AnswerArray.includes(8))
            || 
            (player2AnswerArray.includes(0) && 
             player2AnswerArray.includes(3) && 
             player2AnswerArray.includes(6))
            || 
            (player2AnswerArray.includes(1) && 
             player2AnswerArray.includes(4) && 
             player2AnswerArray.includes(7))
            || 
            (player2AnswerArray.includes(2) && 
             player2AnswerArray.includes(5) && 
             player2AnswerArray.includes(8))
            || 
            (player2AnswerArray.includes(0) && 
             player2AnswerArray.includes(4) && 
             player2AnswerArray.includes(8))
            || 
            (player2AnswerArray.includes(2) && 
             player2AnswerArray.includes(4) && 
             player2AnswerArray.includes(6))
          ){
              alert("Player 2, you are the winner!") 
            //lock the board
              document.getElementById("board").style.pointerEvents = "none";
           } //end of player 2 logic
  }


     
  render(){
    console.log(this.state.player1AnswerArray);
    console.log(this.state.player2AnswerArray);
    //create a new variable that holds the array that map creates
    //map will iterate through this.state.squares array
    let board = this.state.squares.map((value, index) => {
      //return the square object which will have access to different values in the state
      return (
       <Square 
          value = { value }
          index = { index }
          key = { index }
          markBox = { this.markBox }
          checkPlayer1Win = { this.checkPlayer1Win}
          checkPlayer2Win = { this.checkPlayer2Win}
          reverseTurns = {this.reverseTurns}
          updatePlayer1Answers = { this.updatePlayer1Answers }
          updatePlayer2Answers = { this.updatePlayer2Answers }
        />
      )
    })
    
    

    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id= "board">
        { board }
        </div>
      </React.Fragment>
    )
  }
}
export default App
