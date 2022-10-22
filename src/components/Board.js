import './styles/Board.scss'
import Block from './Block.js'

function Board(props) {

    const cellChange = (blockIdCellId, newValue) => {
        let [blockId, cellId] = blockIdCellId.split(' ')

        blockId = parseInt(blockId)
        cellId = parseInt(cellId)

        props.array[blockId][cellId] = newValue
    }

    return (
        <div className="Board">
            <Block array={props.array[0]} key='0' block_id='0' cellChange={cellChange} />
            <Block array={props.array[1]} key='1' block_id='1' cellChange={cellChange}/>
            <Block array={props.array[2]} key='2' block_id='2' cellChange={cellChange}/>
            <Block array={props.array[3]} key='3' block_id='3' cellChange={cellChange}/>
            <Block array={props.array[4]} key='4' block_id='4' cellChange={cellChange}/>
            <Block array={props.array[5]} key='5' block_id='5' cellChange={cellChange}/>
            <Block array={props.array[6]} key='6' block_id='6' cellChange={cellChange}/>
            <Block array={props.array[7]} key='7' block_id='7' cellChange={cellChange}/>
            <Block array={props.array[8]} key='8' block_id='8' cellChange={cellChange}/>
        </div>
    )
}

export default Board
