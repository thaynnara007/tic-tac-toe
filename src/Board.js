import Square from './Square';
import React from 'react';
import './Board.css';

class Board extends React.Component{
    renderSquare(index){
        return <Square />;
    }

    render(){
       const status = "Next Player: X";

       return(
           <div>
               <div className='status'>{status}</div>
               <div className='board'>
                    <div className='board-row'>
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                            {this.renderSquare(3)}
                    </div>
                    <div className='board-row'>
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                            {this.renderSquare(6)}
                    </div>
                    <div className='board-row'>
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                            {this.renderSquare(9)}
                    </div>
               </div>
           </div>
       )
    }
}

export default Board;