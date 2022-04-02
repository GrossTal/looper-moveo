import clsx from 'clsx';
import React from 'react';
import Button from './button/button';
import './Row.css';
function Row({row, index, setRows, isPlayOn}){

    function changeToggle() {
        setRows(rows => {
            const newRows = [...rows];
            const currentRow = newRows[index];
            currentRow.isOn = !currentRow.isOn
            if(currentRow.isOn && isPlayOn) {
                currentRow.audio.play();
            }
            else {
                currentRow.audio.pause();
                currentRow.audio.currentTime = 0;
            }
            return newRows;
        })
    }
    
    return (
        <div className={clsx('row', {'row-mute': !row.isOn})} >
            <div>{row.title}</div>
            <Button title={`Mute: ${!row.isOn ? 'On': 'Off'}`} onClick={changeToggle} className={'mute-button'} />
        </div>
    )
}
export default Row