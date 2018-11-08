import Square from './Square';
import React from 'react';
import './Board.css';
import {calculeWinner} from './util';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            squares: Array(9).fill(null),
            xTurn: true
        }
    }

    handleClick(index){
        const squares = this.state.squares.slice();
        var winner = calculeWinner(squares)

        if(winner) return

        squares[index] = this.state.xTurn ? "X" : "O";
        this.setState({
            squares: squares,
            xTurn: !this.state.xTurn,
        });
    }

    renderSquare(index){
        return( 
        <Square 
            value={this.state.squares[index]}
            onClick={() => this.handleClick(index)}
         />
        )
    }

    render(){
       const winner = calculeWinner(this.state.squares);
       let status; 
    
       if(winner) status = "Winner: " + winner;
       else status = "Next Player: " + (this.state.xTurn ? "X" : "O");

       return(
           <div>
           <div className='status'>{status}</div>
           <div className="alingn">
               <div className='board'>
                    <div className='board-row'>
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                    </div>
                    <div className='board-row'>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                    </div>
                    <div className='board-row'>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                    </div>
               </div>
           </div>
        </div>
       )
    }
}

export default Board;