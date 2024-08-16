
import TicContainer from "./components/TicTacToe/TicContainer.jsx";
import React from "react";

function App() {


  return (
    <>
        <main className={'bg-[#5A1E76] w-full h-screen 2xl:container mx-auto relative flex items-center'}>
            <h1 className={'hidden lg:block text-9xl  absolute bottom-20 left-20  '}>
                <div className={'text-[#DCBF3F]'}>tic.</div>
                <div className={'text-[#72CFF9]'}>tac.</div>
                <div className={'text-[#DCBF3F]'}>toe.</div>
            </h1>
            <TicContainer/>
        </main>
    </>
  )
}

export default App
