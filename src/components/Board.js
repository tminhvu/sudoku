import './styles/Board.scss'
import Block from './Block.js'
import { rowIsValid, colIsValid, blockIsValid } from '../sudoku.js'

function Board(props) {
    const cellChange = (blockIdCellId, newValue) => {
        let [blockId, cellId] = blockIdCellId.split(' ')
        let row, col, block

        blockId = parseInt(blockId)
        cellId = parseInt(cellId)

        props.array[blockId][cellId] = newValue
        console.log(props.array)

        if (blockId === 0 || blockId === 3 || blockId === 6) {
            col = 0
        } else if (blockId === 1 || blockId === 4 || blockId === 7) {
            col = 3
        } else {
            col = 6
        }

        if (cellId === 0 || cellId === 3 || cellId === 6) {
            col += 1
        } else if (cellId === 1 || cellId === 4 || cellId === 7) {
            col += 2
        } else {
            col += 3
        }

        if (blockId === 0 || blockId === 1 || blockId === 2) {
            row = 0
        } else if (blockId === 3 || blockId === 4 || blockId === 5) {
            row = 3
        } else {
            row = 6
        }

        if (cellId === 0 || cellId === 1 || cellId === 2) {
            row += 1
        } else if (cellId === 3 || cellId === 4 || cellId === 5) {
            row += 2
        } else {
            row += 3
        }

        block = blockId

        let rowValid = rowIsValid(props.array, row-1)
        let colValid = colIsValid(props.array, col-1)
        let blockValid = blockIsValid(props.array, block)
        console.log(rowValid)
        console.log(colValid)
        console.log(blockValid)
    }

    return (
        <div className="Board">
            <Block array={props.array[0]} key='0' block_id='0' cellChange={cellChange} />
            <Block array={props.array[1]} key='1' block_id='1' cellChange={cellChange} />
            <Block array={props.array[2]} key='2' block_id='2' cellChange={cellChange} />
            <Block array={props.array[3]} key='3' block_id='3' cellChange={cellChange} />
            <Block array={props.array[4]} key='4' block_id='4' cellChange={cellChange} />
            <Block array={props.array[5]} key='5' block_id='5' cellChange={cellChange} />
            <Block array={props.array[6]} key='6' block_id='6' cellChange={cellChange} />
            <Block array={props.array[7]} key='7' block_id='7' cellChange={cellChange} />
            <Block array={props.array[8]} key='8' block_id='8' cellChange={cellChange} />
        </div>
    )
}

export default Board
