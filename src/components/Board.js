import React, { useEffect, useState } from 'react';
import { rows } from '../utills';
import './board.css';
import Button from './button/button';
import MediaPlayer from './media-player/media-player';
import Row from './row';

function Board() {

    const [playInLoop, setPlayInLoop] = useState(false);
    const [rowsState, setRows] = useState([...rows]);
    const [marginLeft, setMarginLeft] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);


    function changeLoopToggle() {
        setRows(rows => {
            rows.forEach(row => {
                row.audio.loop = !playInLoop
            })
            return [...rows]
        })
        setPlayInLoop(playInLoop => !playInLoop);
    }
    function play() {
        setRows(rows => {
            rows.forEach((row) => {
                if (row.isOn) {
                    row.audio.play();
                }
            })
            return [...rows]
        })
        setIsPlaying(true);
    }

    function stop() {
        setRows(rows => {
            rows.forEach((row) => {
                row.audio.pause();
                row.audio.currentTime = 0;
                row.isOn = false;
            })
            return [...rows]
        })
        setMarginLeft(0);
        setIsPlaying(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setMarginLeft(marginLeft => marginLeft + 10);
            }
        }, 1000)

        return () => clearInterval(interval);
    }, [isPlaying, marginLeft])


    return (
        <div className='board'>
            <div>

                <div className='rows-container'>
                    {rowsState.map((row, index) => { return <Row row={row} index={index} key={row.id} setRows={setRows} isPlayOn={isPlaying} /> })}
                </div>
                <div className='action-buttons-container'>
                    <Button title='Loop' onClick={changeLoopToggle} className={playInLoop ? 'loop-on' : 'loop-off'} />
                    <Button title='Play' onClick={play} className='play-button' />
                    <Button title='Stop' onClick={stop} className='stop-button' />
                </div>
            </div>

            <div className='media-player-container' style={{overflowX: 'auto',}}>
        
                   <MediaPlayer rowsState={rowsState} setRows={setRows} marginLeft={marginLeft} isPlaying={isPlaying} isLoopOn={playInLoop} />
            </div>
        </div>
    )
}
export default Board