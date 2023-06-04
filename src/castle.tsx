import { useState, useEffect } from 'react'
import './App.css'
import castleMaxLevel from './assets/svg/castles/castle op 2 - max level.svg';
import castleLevel4 from './assets/svg/castles/castle op 2 - level 4.svg';
import castleLevel3 from './assets/svg/castles/castle op 2 - level 3.svg';
import castleLevel2 from './assets/svg/castles/castle op 2 - level 2.svg';
import castleLevel1 from './assets/svg/castles/castle op 2 - level 1.svg';


// Castle SVGs generated from ASCII art in https://ivanceras.github.io/svgbob-editor/

function Castle() {
    const castleArr = [
        castleLevel1,
        castleLevel2,
        castleLevel3,
        castleLevel4,
        castleMaxLevel
    ]
    const [castleIndex, setCastleIndex] = useState<number>(0)

    function handleChangeCastle() {
        console.log(castleIndex);
        console.log(castleArr.length);
        
        castleIndex === castleArr.length - 1 ? setCastleIndex(0) : setCastleIndex(castleIndex + 1);
    }

    return (
        <>
            <img src={castleArr[castleIndex]}></img>

            <button className='btn btn-primary my-12' onClick={handleChangeCastle}>Upgrade castle</button>
        </>
    )
}

export default Castle