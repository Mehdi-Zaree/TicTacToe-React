// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import '/src/fontawesome/css/all.css'
import Board from "../Board/Board.jsx";
import GameOver from "../GameOver/GameOver.jsx";
import GameState from "../../Gamestate.js";
import Reset from "../Reset/Reset.jsx";
import clickSoundAsset from '/src/sounds/click.wav'

const clickSound = new Audio(clickSoundAsset)
clickSound.volume = 0.5;
//icons
const PLAYER_X = (<i className=" text-[#48D2FE] fa-solid fa-x"></i>)
const PLAYER_O = (<i className="text-[#E2BE00] fa-solid fa-o"></i>)
//winner possibilities
const winnerCombo = [
    //Rows
    {combo:[0,1,2]},
    {combo:[3,4,5]},
    {combo:[6,7,8]},
    //cols
    {combo:[0,3,6]},
    {combo:[1,4,7]},
    {combo:[2,5,8]},
    //diabolical
    {combo:[0,4,8]},
    {combo:[2,4,6]}

]

function checkWinner (tiles,setGameState,setAmount,amount,setTiles,setPlayerTurn,setXO){
    for(const {combo} of winnerCombo){
        const tileValue1=tiles[combo[0]]
        const tileValue2=tiles[combo[1]]
        const tileValue3=tiles[combo[2]]
        if(tileValue1!== null && tileValue1=== tileValue2 && tileValue1===tileValue3 ){
            // if x wins
            if(tileValue1 === PLAYER_X){
                setAmount({
                    x:amount.x+1,
                    o:amount.o,
                    draw: amount.draw
                })
                setGameState(GameState.playerXWins)
            //if O wins
            }else if(tileValue1 === PLAYER_O){
                setAmount({
                    x:amount.x,
                    o:amount.o+1,
                    draw: amount.draw
                })
                setGameState(GameState.playerOWins)

            }
            setGameState(GameState.inProgress)
            setTiles(Array(9).fill(null))
            setPlayerTurn(PLAYER_X)
            setXO(true)



            return

        }
    }
    const areAllTilesFilled = tiles.every((tiles)=> tiles !== null)
    if(areAllTilesFilled){
        setAmount({
            x:amount.x,
            o:amount.o,
            draw: amount.draw+1
        })
        setGameState(GameState.draw)
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayerTurn(PLAYER_X)
        setXO(true)
    }
}

function TicContainer() {
    const [XO,setXO] = useState(true);
    const [tiles, setTiles]= useState(Array(9).fill(null));
    const [playerTurn,setPlayerTurn] = useState(PLAYER_X);
    const [gameState, setGameState] = useState(GameState.inProgress)
    //scores
    const [amount, setAmount] = useState({
        x:0,
        o:0,
        draw:0,
    })
    const handleTileClick = (index) => {
        if(gameState !== GameState.inProgress){
            return;
        }
        if(tiles[index]){
            return
        }
        const newTiles = [...tiles]
        newTiles[index] = playerTurn
        setTiles(newTiles)
        if(playerTurn === PLAYER_X){
            setXO(false)
            setPlayerTurn(PLAYER_O)
        }else if (playerTurn === PLAYER_O){
            setXO(true)
            setPlayerTurn(PLAYER_X)
        }
    }
    const resetHandler = ()=>{
        setGameState(GameState.draw)
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayerTurn(PLAYER_X)
        setXO(true)
        setAmount({...amount, x:0,o:0,draw:0,})
    }
    useEffect(() => {
        checkWinner(tiles,setGameState,setAmount,amount,setTiles,setPlayerTurn,setXO)
    }, [tiles]);
    useEffect(()=>{
        if(tiles.some((tile)=>tile!==null)){
            clickSound.play()
        }
    },[tiles])
    return (
        <div className={'w-full  md:w-[400px] mx-auto 3   rounded-lg bg-[#2B0040] px-16 py-8  '}>
            {/*result boxes*/}
            <div className={'w-full flex items-center justify-center  *:h-20 *:w-20  gap-3 *:rounded *:text-center *:pt-5 '}>
                <div className={'bg-[#48D2FE]'}>
                    <h5>Player X</h5>
                    <div>
                        {amount.x}
                    </div>
                </div>
                <div className={'bg-[#BCDBF9]'}>
                    <h5>Draw</h5>
                    <div>
                        {amount.draw}
                    </div>
                </div>
                <div className={'bg-[#E2BE00]'}>
                    <h5>Player O</h5>
                    <div>
                        {amount.o}
                    </div>
                </div>
            </div>
            <Board tiles={tiles} onTileClick={handleTileClick}/>
            <div className={'flex justify-center flex-wrap gap-4'}>
                {/*  turns box */}
                <GameOver playerTurn={playerTurn} XO={XO} gameState={gameState}/>
                {/*NEW game button*/}
                <Reset resetHandler={resetHandler}/>
            </div>
        </div>
    );
}

export default TicContainer;