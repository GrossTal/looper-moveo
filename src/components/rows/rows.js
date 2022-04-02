import { useEffect, useMemo, useState } from "react";
import Row from "../row";
import './rows.css';

function Rows({ row, isPlaying, isLoopOn, seconds }) {
    const [rows, setRows] = useState([row]);

    const marginLeft = useMemo(() => seconds, []);


    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying && isLoopOn) {
                setRows(rows => {
                    rows.push(rows[0])
                    return [...rows]
                })
            }
        }, 16500)

        return () => clearInterval(interval);
    }, [isPlaying, isLoopOn])

    return <div className="rows" style={{  marginLeft }}>
        {rows.map((row, index) => row.isOn ? <Row row={row} index={index} key={index} setRows={setRows} /> : null)}
    </div>
}

export default Rows;