import React from 'react';
import Tiles from "../Tiles/Tiles.jsx";

function Board({tiles,onTileClick}) {
    return (
        <div className={'w-full  mt-5 grid grid-rows-3 grid-cols-3 gap-4 *:bg-[#43115B] *:w-20 *:h-20 justify-items-center *:rounded *:cursor-pointer *:duration-200 *:flex *:items-center *:justify-center '}>
            <Tiles onClick={()=>{onTileClick(0)}} value={tiles[0]}/>
            <Tiles onClick={()=>{onTileClick(1)}} value={tiles[1]}/>
            <Tiles onClick={()=>{onTileClick(2)}} value={tiles[2]}/>
            <Tiles onClick={()=>{onTileClick(3)}} value={tiles[3]}/>
            <Tiles onClick={()=>{onTileClick(4)}} value={tiles[4]}/>
            <Tiles onClick={()=>{onTileClick(5)}} value={tiles[5]}/>
            <Tiles onClick={()=>{onTileClick(6)}} value={tiles[6]}/>
            <Tiles onClick={()=>{onTileClick(7)}} value={tiles[7]}/>
            <Tiles onClick={()=>{onTileClick(8)}} value={tiles[8]}/>
        </div>
    );
}

export default Board;