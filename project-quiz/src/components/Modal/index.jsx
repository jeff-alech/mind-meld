import './style.css'
import logo from '../../assets/interrogacao.png'
export default function Modal({setActiveModal}) {
    return (
        <div className='modal-container'>
            <div className='box'>
                <h1 className='modal-title'><img className='logo-title' src={logo} alt="Logo icon" />Tutorial Mind Meld</h1>
                <div className='text-block'>
                    <div className='text-line'>
                        <span>
                            Bem-vindo ao tutorial do jogo Mind Meld! Neste tutorial, você aprenderá
                            como jogar e se divertir com esse emocionante jogo de quiz. Vamos lá!
                        </span>
                    </div>

                    <h3>Passo 1: Iniciando o Jogo</h3>
                    <div className='text-line'>
                        <span>
                            Para iniciar o jogo, clique no botão "Start". Ele estará claramente visível
                            na tela. Certifique-se de ter um dispositivo com acesso à internet para jogar o Mind Meld.
                        </span>
                    </div>

                    <h3>Passo 2: Escolhendo as Dicas</h3>
                    <div className='text-line'>
                        <span>
                            Após iniciar o jogo, você terá acesso a uma carta que contém uma palavra para você adivinhar. Para ajudá-lo nessa tarefa, são fornecidas 10 dicas.
                            No entanto, você só pode escolher 8 das 10 dicas disponíveis. Leia atentamente as dicas fornecidas.
                        </span>
                    </div>

                    <h3>Passo 3: Adivinhando a Palavra</h3>
                    <div className='text-line'>
                        <span>
                            Com as dicas escolhidas, é hora de adivinhar a palavra! Utilize seu conhecimento e raciocínio lógico para tentar descobrir qual é a palavra correspondente às dicas fornecidas.
                            Digite sua resposta no campo de entrada disponível na tela do jogo e pressione "Enter" para enviar sua resposta.
                        </span>
                    </div>

                    <h3>Passo 4: Ganhe Pontos e Vidas</h3>
                    <div className='text-line'>
                        <span>
                            Se você acertar a palavra, receberá uma pontuação equivalente ao número de vidas restantes. Por exemplo, se você tiver 5 vidas restantes ao acertar, ganhará 5 pontos.
                            Continue acertando palavras para acumular pontos e chegar à pontuação mínima de 50 pontos para vencer o jogo.
                        </span>
                    </div>

                    <h3>Passo 5: Cuidado com as Vidas</h3>
                    <div className='text-line'>
                        <span>
                            Cada vez que você errar uma palavra, perderá uma vida.Cada dica utilizada, perderá uma vida. Se suas vidas chegarem a zero, você enfrentará o temível "Game Over".
                            Nesse caso, você precisará reiniciar o jogo para tentar novamente e alcançar a pontuação de vitória.
                        </span>
                    </div>
                    <div className='text-line'>
                        <span>
                            Agora que você entendeu como jogar o Mind Meld,
                            é hora de testar suas habilidades de adivinhação e aproveitar a emoção do jogo. Divirta-se e boa sorte!
                        </span>
                    </div>
                    <div className='div-btn'>
                        <button onClick={() => setActiveModal(false)} className='btn-modal'>Fechar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}