import { useState } from "react";
import { blockIsValid, colIsValid, rowIsValid } from "../sudoku";


const Check = (props) => {
    let board = props.array
    const [finished, setFinished] = useState(false)

    const check = () => {
        for (let i = 0; i < 9; i++) {
            if (blockIsValid(board, i) === false) {
                setFinished(false)
                return
            }

            if (rowIsValid(board, i) === false) {
                setFinished(false)
                return
            }

            if (colIsValid(board, i) === false) {
                setFinished(false)
                return
            }
        }

        setFinished(true)
        props.setFinished(true)
    }

    return (
        <div className="Check" style={{
            width: '100px',
        }}>
            <button onClick={check} style={{
                color: finished? 'blue': '',
                width: '80px',
                marginBottom: '5px'
            }}>Finish</button>

            <h3 style={{
                display: finished? 'block': 'none',
                color: 'green'
            }}>Ban da hoan thanh</h3>
        </div>
    )
}

export default Check
