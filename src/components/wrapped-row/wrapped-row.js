import { useMemo } from "react"
import Row from "../Row";

function WrappedRow ({marginLeft, row, index,setRows}) {
    const margin = useMemo(() => marginLeft, []);

    return <div style={{marginLeft: margin}}>
        <Row row={row} index={index} setRows={setRows} />
    </div>
}

export default WrappedRow