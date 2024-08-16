import React from 'react';

function Tiles({XO,value,onClick}) {
    return (
        <>
            <div  className={'hover:bg-[#5A1E76] text-4xl text-[#] '}
                 onClick={onClick}>
                {value}
            </div>
        </>
    );
}

export default Tiles;