import React, {useState} from "react";
import "./TicTacToe.css";

function TicTacToe() {
    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();

const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""))
}
const checkWinner = (squeres) => {
    let combos = {
        across: [ 
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ],
        down: [
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ], 
        diagnol: [
            [0,4,8],
            [2,4,6],
        ]
    }
    for (let combo in combos) {
        combos[combo].forEach(item => {
            console.log(item[0])
            if(squeres[item[0]] === "" ||
                squeres[item[1]] === "" || 
                squeres[item[2]] === "" ) {

                } else if (squeres[item[0]] === squeres[item[1]] && 
                    squeres[item[1]] === squeres[item[2]]) {
                    setWinner(squeres[item[0]]);
                }
        })

        // console.log(item[0]);
    }
}
    const handleClick = (num) => {
        let squeres = [...cells]
        if(squeres[num]) {
            alert("already chosen");
            return;
        }
        // console.log(squeres[num]);
        if(turn === "X") {
           squeres[num] = "X"
            // console.log(squeres);
            setTurn("O")
        } else {
            squeres[num] = "O"
            console.log(squeres);
            setTurn("X")
        }

        checkWinner(squeres);
        setCells(squeres);
    }
    const Cell = ({num}) => {
        return( 
        <td onClick={() => handleClick(num)}>{cells[num]}</td>
        )
    }
        return (
            <div className="container">
                <table>
                    Turn: {turn}
                    <tbody>
                        <tr><Cell num={0}/><Cell num={1}/><Cell num={2}/></tr>
                        <tr><Cell num={3}/><Cell num={4}/><Cell num={5}/></tr>
                        <tr><Cell num={6}/><Cell num={7}/><Cell num={8}/></tr>
                    </tbody>
                </table>
                {winner && (
                    <>
                    <p>{winner} is the winner!</p>
                    <button onClick={() => handleRestart()}>Play again</button>
                    </>
                )}
            </div>
        )
    }

export default TicTacToe;