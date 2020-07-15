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
      player2AnswerArray: [],
      // winningArray1: [0, 1, 2],
      // winningArray2: [3, 4, 5],
      // winningArray3: [6, 7, 8],
      // winningArray4: [0, 3, 6],
      // winningArray5: [1, 4, 7],
      // winningArray6: [2, 5, 8],
      // winningArray7: [0, 4, 8],
      // winningArray8: [2, 4, 6]
    }
   
    
  }

  //create a method of playing rules
  markBox = (index) => {
    //destructuring
    const { squares, players, player1AnswerArray, player2AnswerArray} = this.state
    //check to see that players are not clicking on a box that's already been clicked
    console.log(typeof <FaTimes />);

    if (typeof squares[index] !== "object") {
      //change the value of squares[?] when clicked
      //if its Players1 turn, "X"
      if(players[0] === "Player 1"){
        let newSquares1 = squares.slice()
        newSquares1[index] = <FaTimes />
        this.setState({ squares: newSquares1 })
        //Need to update the players answer array
        
        //Create a new variable that is the updated version of the player's answer arrray. We can use aray.push
        let updatedArray = player1AnswerArray.slice()
        updatedArray.push(index)
        //setState on the answer array for official update
        this.setState({ player1AnswerArray: updatedArray })

        //check to see if player arrays have winning set   
        if( player1AnswerArray.includes(0 && 1 && 2) || 
            player1AnswerArray.includes(3 && 4 && 5) ||  
            player1AnswerArray.includes(6 && 7 && 8) ||  
            player1AnswerArray.includes(0 && 3 && 6) ||  
            player1AnswerArray.includes(1 && 4 && 7) ||  
            player1AnswerArray.includes(2 && 5 && 8) ||  
            player1AnswerArray.includes(0 && 4 && 8) ||  
            player1AnswerArray.includes(2 && 4 && 7)
           ){
              alert("Player 1, you are the winner!") 
            //lock the board
              document.getElementById("board").style.pointerEvents = "none";
            }
      //if its Players2 turn, "O"
      else if(players[0] === "Player 2"){
        let newSquares2 = squares.slice()
        newSquares2[index] = <FaCircle />
        this.setState({ squares: newSquares2 })

        //Create a new variable that is the updated version of the player's answer arrray. We can use aray.push
        let updatedArray = player2AnswerArray.slice()
        updatedArray.push(index)
        //setState on the answer array for official update
        this.setState({ player2AnswerArray: updatedArray })

         //check to see if player arrays have winning set   
         if( player2AnswerArray.includes(0 && 1 && 2) ||
             player2AnswerArray.includes(3 && 4 && 5) ||  
             player2AnswerArray.includes(6 && 7 && 8) ||  
             player2AnswerArray.includes(0 && 3 && 6) ||  
             player2AnswerArray.includes(1 && 4 && 7) ||  
             player2AnswerArray.includes(2 && 5 && 8) ||  
             player2AnswerArray.includes(0 && 4 && 8) ||  
             player2AnswerArray.includes(2 && 4 && 7)  
         ){
            alert ("Player 2, you are the winner!")
            //lock the board
            document.getElementById("board").style.pointerEvents = "none";
          }
      //change turns after every turn 
      let newPlayers = players.slice()
      newPlayers.reverse()
      this.setState({ players: newPlayers })
    } else {
        alert("That spot has already been marked.")
      }      
    }
  } 
}  

  render(){
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
