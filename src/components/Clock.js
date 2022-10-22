import { useEffect, useState } from "react"

const format = (time) => {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + String(mins).padStart(2, '0') + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret
}

const Clock = (props) => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [clock, setClock] = useState('00:00')

    useEffect(() => {
        let interval
        if (props.reset) {
            setTime(0)
            setStart(true)
            setClock('00:00')
            props.resetClock(false)
        } else if (!props.finished && start) {
            interval = setInterval(() => {
                setClock(format(time))
                setTime(time + 1)
            }, 1000);
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [props.finished, start, time, props.reset, props.resetClock, props])

    return (
        <div className="Clock" >
            <div style={{
                color: 'white',
                marginBottom: '10px'
            }}>{clock}</div>
            <button style={{
                width: '80px',
                color: start ? 'blue' : '',
                marginBottom: '5px'
            }} onClick={() => {
                setStart(true)
                props.setDisplayBoard(true)
            }}>Start</button>
        </div>
    )
}

export default Clock
