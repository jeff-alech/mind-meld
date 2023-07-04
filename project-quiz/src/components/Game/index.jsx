import { useEffect, useState } from 'react';

import './style.css';

import quiz from '../../../tips';


import send from '../../assets/Vector.png';
import gameOver from '../../assets/gameOver.png';
import youWin from '../../assets/youWin.png';

export default function Game({ resposta,
    dicas,
    tipo,
    startGame,
    setStartGame,
    setAbilityBtn,
    abilityBtn,
    right, setRight,
    visibleTips,
    setVisibleTips,
    disabledButtons,
    setDisabledButtons,
    endGame,
    setEndGame, wrong,
    setWrong,
    lifePoint, setLifePoint,
    win, setWin,
    points, setPoints,
    generateRandomNumber
}) {
    const dicasSize = quiz[0].dicas;
    const [answers, setAnswers] = useState('');



    function handleTip(index) {
        setWrong('');
        const updatedTips = [...visibleTips];
        updatedTips[index] = true;
        setVisibleTips(updatedTips);
        const updatedDisabledButtons = [...disabledButtons];
        updatedDisabledButtons[index] = true;
        setDisabledButtons(updatedDisabledButtons);
        setLifePoint(lifePoint - 1);

    }
    function checkAnswer(event) {
        setWrong('')
        event.preventDefault();
        setAnswers('');
        if (answers.toLowerCase() === resposta.toLowerCase()) {
            setPoints(points + lifePoint);
            setRight(true);
            setAbilityBtn(true)
            setStartGame(true);
            setTimeout(() => {
                generateRandomNumber(quiz)
            }, 1500)
        } else {
            setLifePoint(lifePoint - 1)
            setWrong("Parece que sua resposta não está certa!");
        }
    }
    useEffect(() => {
        if (points >= 5) {
            setWin(true);
            setAbilityBtn(false)
            return
        }

    }, [points]);

    useEffect(() => {
        if (lifePoint <= 0) {
            setEndGame(true);
            setAbilityBtn(true)
            setPoints(0)
        }
    }, [lifePoint])

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            checkAnswer(event);
        }
    }

    function handleClick(event) {
        checkAnswer(event);
    }

    function renderContent() {
        if (endGame) {
            return (
                <div className='box-game-over'>
                    <img className='gameOver' src={gameOver} alt='Game Over' />
                </div>
            )
        } else if (startGame || abilityBtn) {
            return (
                <>
                    <div className='div-wrong'>
                        {wrong === '' ? '' : <h1 className='wrong'>{wrong}</h1>}
                    </div>

                    <div className='card'>
                        <div className='answerCard title answer'>
                            {right && <h2 className='title'>{resposta}</h2>}
                        </div>
                        <div className='answerCard tipo'>
                            <span className='title'>{`Eu sou uma ${tipo}`}</span>
                        </div>

                        <div className='box-dicas'>
                            <div className='answerCard dicas'>
                                {dicas.slice(0, 5).map((item, index) => (
                                    <ul key={index} className='title list'>
                                        {visibleTips[index] && <li>{item}</li>}
                                    </ul>
                                ))}
                            </div>
                            <div className='answerCard dicas'>
                                {dicas.slice(5, 10).map((item, index) => (
                                    <ul key={index} className='title list'>
                                        {visibleTips[index + 5] && <li>{item}</li>}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='inputAnswer'>
                        <input
                            onFocus={() => setWrong('')}
                            className='input'
                            onKeyPress={handleKeyPress}
                            type="text"
                            placeholder='Sua resposta'
                            name='dicas'
                            value={answers}
                            onChange={(e) => setAnswers(e.target.value)}
                        />
                        <button className='btnSend' onClick={handleClick}>
                            <img className='btnSendImage' src={send} alt="send Icon" />
                        </button>
                    </div>
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <>
            <div className='container-game'>
                    <div className='btnBox'>
                        {dicasSize.map((btn, index) => {
                            const disabled = !startGame
                            return <button
                                key={index}
                                className={`btnTips ${disabledButtons[index] || disabled || right || win ? 'gray' : ''}`}
                                onClick={() => handleTip(index)}
                                disabled={disabledButtons[index] || disabled || right || win}
                            >{`Dica ${index + 1}`}</button>
                        })}
                    </div>

                <div className='boxCard'>
                    {win ? <img className='gameOver' src={youWin} alt='You Win' /> : renderContent()}
                </div>


            </div>
        </>
    );
}
