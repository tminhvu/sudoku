import './styles/Block.scss'

const Block = (props) => {
    let cell_id = 0
    let readOnly, defaultValue, placeholder, color, value

    const inputs = props.array.map((e) => {
        if (e === 0 || e === '.') {
            readOnly = false
            color = 'blue'
            placeholder=''
        } else {
            defaultValue = e
            value = e
            placeholder=e
            readOnly = true
            color = ''
        }
        let key = props.block_id + ' ' + cell_id++

        return <input
            //value={value}
            readOnly={readOnly}
            //defaultValue={defaultValue}
            placeholder={placeholder}
            key={key}
            onChange={(e) => {
                props.cellChange(key, e.target.value)
            }}
            style={color = { color }}
        ></input>
    })

    return (
        <div className='Block'>
            {inputs}
        </div>
    )
}

export default Block;
