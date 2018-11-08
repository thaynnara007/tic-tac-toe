import React from 'react';
import Board from './Board';
import './Game.css';
import {calculeWinner} from './util';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           history:[{
            squares : Array(9).fill(null)
            }],
            xTurn: true
        }
    }

    handleClick(index){
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculeWinner(squares);

        if(winner) return
        
        squares[index] = this.state.xTurn ? "X" : "O";
        this.setState({
            history: history.concat([{squares: squares}]),
            xTurn: !this.state.xTurn
        })
    }

    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculeWinner(current.squares);   
        let status;
        const moves = history.map((step, move) =>{
            const desc = move ? 'go to move #' + move : 'go to game start';

            return(
                <li>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        if(winner) status = "Winner: " + winner;
        else status = "Next Player: " + (this.state.xTurn ? "X" : "O"); 

        return (
            <div className='game'>
                <div className='game-board'>
                    <Board 
                        squares={current.squares}
                        onClick={(index) => this.handleClick(index)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

export default Game;