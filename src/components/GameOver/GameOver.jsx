import React, {useState} from 'react';
import GameState from "../../Gamestate.js";
function GameOver({gameState,XO}) {
    switch (gameState){
        case GameState.inProgress:
            return (
                <div
                    className={`w-full h-12  mt-10 rounded-md ${XO ? 'bg-[#48D2FE]' : 'bg-[#E2BE00]'} flex items-center justify-center gap-3 text-2xl`}>
                    {XO ? 'X' : 'O'} Turn
                </div>
            );
            case GameState.playerXWins:
                return <div
                    className={`w-full h-12  mt-10 rounded-md  bg-[#48D2FE]  flex items-center justify-center gap-3 text-2xl`}>
                    X Wins.
                </div>;
            case GameState.playerOWins:
                return <div
                    className={`w-full h-12  mt-10 rounded-md  bg-[#E2BE00]  flex items-center justify-center gap-3 text-2xl`}>
                    O Wins.
                </div>;
        case GameState.draw:
            return <div
                className={`w-full h-12  mt-10 rounded-md  bg-white  flex items-center justify-center gap-3 text-2xl`}>
                Draw.
            </div>;
    }

}

export default GameOver;