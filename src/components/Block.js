import './styles/Block.scss'

const Block = (props) => {
    let cell_id = 0
    let readOnly, defaultValue, placeholder, color

    const inputs = props.array.map((e) => {
        if (e === 0 || e === '.') {
            readOnly = false
            defaultValue = ''
            placeholder = ''
            color = 'blue'
        } else {
            placeholder = e
            defaultValue = e
            readOnly = true
            color = 'NONE'
        }
        let key = props.block_id + ' ' + cell_id++

        return <input
            placeholder={placeholder}
            readOnly={readOnly}
            defaultValue={defaultValue}
            key={key}
            style={color = { color }}
            onChange={(e) => {
                props.cellChange(key, e.target.value)
            }}
        ></input>
    })

    return (
        <div className='Block'>
            {inputs}
        </div>
    )
}

export default Block;
