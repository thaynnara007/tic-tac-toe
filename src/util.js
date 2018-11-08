
var calculeWinner = (squares) =>{

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let n = 0; n < lines.length; n++){
        
        const [a,b,c] = lines[n];
       
        if(squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export {calculeWinner}
