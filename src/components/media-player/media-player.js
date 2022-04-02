import Rows from "../rows/rows"
import './media-player.css';

function MediaPlayer({rowsState, isPlaying, isLoopOn, marginLeft, setRows}) {

    return <div className="media-player-container">
        <div style={{ width: 10, height: 10, background: 'yellow', marginLeft: marginLeft, position: 'absolute', top:0 }} />
        {rowsState.map((row, index) => row.isOn ? <Rows row={row} isPlaying={isPlaying} isLoopOn={isLoopOn} index={index} key={row.id} setRows={setRows} seconds={marginLeft} /> : <div style={{height: 34}} />)}
    </div>
}

export default MediaPlayer