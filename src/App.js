import { makepuzzle } from 'sudoku'
import { useState } from 'react';
import './App.scss';

import Board from './components/Board.js'
import Check from './components/Check';
import Clock from './components/Clock';
import { oneDimenToStr } from './sudoku.js'

function App() {
    const [finished, setFinished] = useState(false)
    const [displayBoard, setDisplayBoard] = useState(false)
    const [array, generateArray] = useState([], [], [], [], [], [], [], [], [])
    const [clock, resetClock] = useState(false)

    return (
        <div className="App">
            <div className='Score' style={{
                marginLeft: '0px',
                marginTop: '80px'
            }}>
                <Clock finished={finished} reset={clock} resetClock={resetClock} />
                <Check array={array} setFinished={setFinished} />
                <button style={{
                    width: '80px'
                }} onClick={() => {
                    generateArray(oneDimenToStr(makepuzzle()))
                    setDisplayBoard(true)
                    resetClock(true)
                }}
                >Generate</button>
            </div>

            {displayBoard ? <Board array={array} /> : <div></div>}
        </div >
    );
}

export default App;
