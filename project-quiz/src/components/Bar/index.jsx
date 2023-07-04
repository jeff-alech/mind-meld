import React from 'react';

import './style.css';

import life from '../../assets/life.png';
import point from '../../assets/point.png';
import logo from '../../assets/interrogacao.png';
import reload from '../../assets/reload.png'
import quiz from '../../../tips';

export default function Bar({ setStartGame, startGame, generateRandomNumber, abilityBtn, setEndGame, endGame, lifePoint, points, setWin, win }) {
  return (
    <>
      <div className='container-bar'>
        <img className='logo' src={logo} alt='Logo' />
        
        {endGame ? <div /> :
                    <div className='btnLife'>
                        <div className='life'><img src={life} alt="life icon" /> <span>{lifePoint}</span></div>
                        <div className='points'><img src={point} alt="point icon" /> <span>{points}</span></div>
                    </div>
                }
        <div className='btn'>

          <button
            className={`btnStart`}
            onClick={() => {
              generateRandomNumber(quiz);
              setStartGame(true);
              setEndGame(false)
              setWin(false)
            }}
          >
            {startGame ? <img className='realodBtn' src={reload} alt="reload icon"/> : 'Start' }
          </button> 
        </div>
      </div>
    </>
  );
}
