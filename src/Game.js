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
            stepNumber: 0,
            xTurn: true
        }
    }

    handleClick(index){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        const winner = calculeWinner(squares);

        if(winner) return
        
        squares[index] = this.state.xTurn ? "X" : "O";
        this.setState({
            history: history.concat([{squares: squares}]),
            stepNumber: history.length,
            xTurn: !this.state.xTurn
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xTurn: (step % 2) === 0
        })
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculeWinner(current.squares);   
        let status;
        const moves1 = history.map((step, move) =>{
            if((move % 2 !== 0)){

                const desc = move ? 'go to move #' + move : 'go to game start';

                return(
                    <li key={move}>
                        <button className="font" onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                )
            }else return null;
        })
        const moves2 = history.map((step, move) =>{
            if((move % 2) === 0){
                const desc = move ? 'go to move #' + move : 'go to game start';

                return(
                    <li key={move}>
                        <button className="font" onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                )
            }else return null;
        })

        if(winner) status = "Winner: " + winner;
        else status = "Next Player: " + (this.state.xTurn ? "X" : "O"); 

        return (
            <div className='game'>
                <div className="status">{status}</div>
                <div className='game-board'>
                    <Board 
                        squares={current.squares}
                        onClick={(index) => this.handleClick(index)}
                    />
                </div>
                <div className="game-info">
                    <h1 className="toLeft">O:</h1>
                    <ol className='toRigth'>{moves1}</ol>
                    <h1 className="toRigth">X:</h1>
                    <ol className="toLeft">{moves2}</ol>
                </div>
            </div>
        )
    }
}

export default Game;