import Square from './Square';
import React from 'react';

class Board extends React.Component{
    renderSquare(index){
        return <Square />;
    }

    render(){
       const status = "Next Player: X";

       return(
           <div>
               <div>{status}</div>
               <div>
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
               </div>
               <div>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
               </div>
               <div>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
               </div>
           </div>
       )
    }
}

export default Board;