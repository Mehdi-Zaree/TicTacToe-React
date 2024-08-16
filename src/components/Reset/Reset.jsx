import React from 'react';

function Reset({resetHandler}) {
    return (
        <button onClick={resetHandler} className={'w-3/4 h-12 rounded-lg bg-white hover:bg-[#C5A0D7] duration-200'}
        >New Game
        </button>
    );
}

export default Reset;
