
import React from 'react'
import { useState } from 'react'

import './App.css'

import Game from './components/Game/index'
import Bar from './components/Bar'
import quiz from '../tips'

export default function App() {
  const newRandomNumber = Math.floor(Math.random() * quiz.length);
  const [startGame, setStartGame] = useState(false)
  const [randomNumber, setRandomNumber] = useState(newRandomNumber);
  const [abilityBtn, setAbilityBtn] = useState(null)
  const [right, setRight] = useState(false);
  const [win, setWin] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [visibleTips, setVisibleTips] = useState([]);
  const [lifePoint, setLifePoint] = useState(8);
  const [points, setPoints] = useState(0);
  const [wrong, setWrong] = useState('');
  const [disabledButtons, setDisabledButtons] = useState(Array(quiz.length).fill(false));

  function generateRandomNumber(quiz) {
    setLifePoint(8)
    setAbilityBtn(false)
    setVisibleTips([])
    setWrong('')
    setDisabledButtons(Array(quiz.length).fill(false))
    setRight(false)
    const newRandomNumber = Math.floor(Math.random() * quiz.length);
    setRandomNumber(newRandomNumber);
  }

  const randomIndex = randomNumber
  const id = quiz[randomIndex].id
  const resposta = quiz[id].resposta;
  const dicas = quiz[id].dicas
  const tipo = quiz[id].tipo
  return (
    <>
      <div className='container'>
        <Bar
          setStartGame={setStartGame}
          startGame={startGame}
          setEndGame={setEndGame}
          generateRandomNumber={generateRandomNumber}
          abilityBtn={abilityBtn}
          win={win}
          setWin={setWin}
          endGame={endGame}
          lifePoint={lifePoint}
          points={points}

        />
        <Game
          id={id}
          resposta={resposta}
          tipo={tipo}
          dicas={dicas}
          startGame={startGame}
          setStartGame={setStartGame}
          setAbilityBtn={setAbilityBtn}
          abilityBtn={abilityBtn}
          setRight={setRight}
          right={right}
          visibleTips={visibleTips}
          setVisibleTips={setVisibleTips}
          disabledButtons={disabledButtons}
          setDisabledButtons={setDisabledButtons}
          endGame={endGame}
          setEndGame={setEndGame}
          wrong={wrong}
          setWrong={setWrong}
          lifePoint={lifePoint}
          setLifePoint={setLifePoint}
          win={win}
          setWin={setWin}
          points={points}
          setPoints={setPoints}
        />
      </div>
    </>
  )
}