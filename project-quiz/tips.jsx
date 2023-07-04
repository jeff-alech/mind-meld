const quiz = [
    {
        resposta: "Homem aranha",
        tipo: "Pessoa",
        dicas: [
            "Tenho habilidades aracnídeas.",
            "Meu sobrenome é Parker.",
            "Sou conhecido por lançar teias.",
            "Sou um super-herói da Marvel.",
            "Meu uniforme é predominantemente vermelho e azul.",
            "Apareci pela primeira vez em quadrinhos em 1962.",
            "Minha tia se chama May.",
            "Meu melhor amigo é o Homem de Ferro.",
            "Tenho uma franquia de filmes própria.",
            "Sou conhecido como o Cabeça de Teia."
        ]
    },
    {
        id: 2,
        resposta: "Mona Lisa",
        tipo: "Obra de Arte",
        dicas: [
            "Fui pintada por um famoso artista renascentista.",
            "Retrato a figura de uma mulher.",
            "Sou conhecida por meu sorriso enigmático.",
            "A minha pintura é exposta no Museu do Louvre, em Paris.",
            "Fui concluída no início do século XVI.",
            "Sou considerada uma das obras mais famosas do mundo.",
            "O nome da modelo é desconhecido.",
            "A pintura é conhecida como 'La Gioconda' em italiano.",
            "Leonardo da Vinci é o meu criador.",
            "Fui pintada com tinta a óleo."
        ]
    },
    {
        resposta: "Torre Eiffel",
        tipo: "Lugar",
        dicas: [
            "É uma estrutura icônica localizada na Europa.",
            "Foi construída como uma atração para uma exposição.",
            "Fica em uma cidade conhecida como a Cidade Luz.",
            "É feita principalmente de ferro.",
            "Possui três plataformas de observação.",
            "Foi inaugurada em 1889.",
            "É um dos pontos turísticos mais visitados do mundo.",
            "Tem aproximadamente 330 metros de altura.",
            "Levo o nome do meu criador",
            "Foi inicialmente criticada por alguns como sendo feia."
        ]
    },
    {
        id: 4,
        resposta: "1984",
        tipo: "Ano",
        dicas: [
            "É um ano do século XX.",
            "Ficou famoso devido a um romance distópico.",
            "A obra foi escrita por George Orwell.",
            "Retrata um regime totalitário e vigilância governamental.",
            "Inspirou o termo 'Big Brother'.",
            "É uma crítica à manipulação e controle do Estado.",
            "O protagonista do livro chama-se Winston Smith.",
            "O autor escolheu o título invertendo o ano de escrita: 1948.",
            "O livro foi publicado em 1949, cinco anos após o ano mencionado.",
            "Tem como slogan o lema 'Guerra é Paz, Liberdade é Escravidão, Ignorância é Força'."
        ]
    },
    {
        id: 5,
        resposta: "Piano",
        tipo: "Coisa (Objeto)",
        dicas: [
            "Sou um instrumento musical de cordas.",
            "Possuo teclas brancas e pretas.",
            "Sou tocado pressionando as teclas com os dedos.",
            "Sou comumente utilizado em música clássica.",
            "Possuo cordas que são percutidas por martelos.",
            "Fui inventado no século XVIII.",
            "Sou conhecido por sua ampla faixa de notas.",
            "Posso ter cauda.",
            "Um dos compositores famosos que me tocava era Beethoven.",
            "Tenho cerca de 88 teclas."
        ]
    },
    {
        resposta: "Albert Einstein",
        tipo: "Pessoa",
        dicas: [
            "Fui um famoso cientista do século XX.",
            "Sou conhecido por sua teoria da relatividade.",
            "Ganhei o Prêmio Nobel de Física em 1921.",
            "Nasci em Ulm, na Alemanha.",
            "Sou conhecido por seu visual com cabelos despenteados.",
            "Trabalhei no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
            "Desenvolvi a famosa equação E=mc².",
            "Sou um defensor da paz e do desarmamento nuclear.",
            "Ensinei na Universidade de Princeton, nos Estados Unidos.",
            "Faleci em 1955, aos 76 anos de idade."
        ]
    },
    {
        id: 7,
        resposta: "Pirâmides de Gizé",
        tipo: "Lugar",
        dicas: [
            "Somos estruturas antigas localizadas no Egito.",
            "Fomos construídas como túmulos para faraós.",
            "Estamos localizadas perto da cidade do Cairo.",
            "Somos conhecidas como uma das Sete Maravilhas do Mundo Antigo.",
            "A maior de mim é a Pirâmide de Quéops.",
            "Fomos construídas há mais de 4.500 anos.",
            "Acredita-se que fomos construídas por milhares de trabalhadores.",
            "Fomos construídas com grandes blocos de pedra calcária.",
            "Somos alinhadas com as estrelas.",
            "Fazemos parte de um complexo funerário."
        ]
    },
    {
        id: 8,
        resposta: "1492",
        tipo: "Ano",
        dicas: [
            "Sou um ano do século XV.",
            "Fiquei famoso devido à descoberta de um novo continente.",
            "Cristóvão Colombo chegou a uma nova terra neste ano.",
            "Marca o início da colonização europeia das Américas.",
            "Foi financiado pela Coroa Espanhola.",
            "Colombo fez sua primeira viagem ao Novo Mundo.",
            "Nesse ano acreditava-se estar chegando às Índias, mas descobriu a América.",
            "É um ano considerado um marco na história da exploração.",
            "A viagem de Colombo foi feita com três navios: Santa Maria, Pinta e Niña, neste ano.",
            "Nesse ano a descoberta de Colombo levou à expansão do Império Espanhol."
        ]
    },
    {
        id: 9,
        resposta: "Violino",
        tipo: "Coisa",
        dicas: [
            "Sou um instrumento de cordas.",
            "Sou tocado com um arco.",
            "Possuo quatro cordas.",
            "Sou utilizado em diversos gêneros musicais.",
            "Sou um dos instrumentos mais populares da família das cordas.",
            "Sou comumente usado em orquestras.",
            "A minha forma moderna foi desenvolvida na Itália.",
            "Requer habilidade e prática para ser tocado proficientemente.",
            "Sou construído com madeira, como o abeto e o bordo.",
            "O meu som é amplificado pela caixa de ressonância."
        ]
    },
    {
        id: 10,
        resposta: "Leonardo da Vinci",
        tipo: "Pessoa",
        dicas: [
            "Fui um artista, cientista e inventor renascentista.",
            "Pintei a famosa obra 'Mona Lisa'.",
            "Também sou conhecido por 'A Última Ceia'.",
            "Fui um gênio polímata, ou seja, tinha conhecimentos em diversas áreas.",
            "Minhas invenções incluem projetos de máquinas voadoras.",
            "Nasci na cidade de Vinci, na Itália.",
            "Sou considerado um dos maiores pintores de todos os tempos.",
            "Meu caderno de esboços, chamado de Códice, contém diversas anotações e desenhos.",
            "Fui um dos pioneiros do estilo artístico conhecido como sfumato.",
            "Vivi durante o período conhecido como Renascimento."
        ]
    },
    {
        id: 11,
        resposta: "Machu Picchu",
        tipo: "Lugar",
        dicas: [
            "Sou uma antiga cidade inca.",
            "Estou localizada no Peru, na região dos Andes.",
            "Fui construída no século XV.",
            "Sou considerada Patrimônio Mundial pela UNESCO.",
            "Fico em uma área montanhosa e possui uma vista deslumbrante.",
            "Sou conhecida como a Cidade Perdida dos Incas.",
            "Acredita-se que fui um importante centro político e religioso.",
            "Fui redescoberta pelo explorador Hiram Bingham em 1911.",
            "As minhas construções são feitas de pedra e têm uma precisão impressionante.",
            "Sou um dos destinos turísticos mais populares da América do Sul."
        ]
    },
    {
        id: 12,
        resposta: "1955",
        tipo: "Ano",
        dicas: [
            "Sou um ano do século XX.",
            "Fiquei conhecido pelo início da era espacial.",
            "Albert Einstein faleceu neste ano.",
            "A Disneylândia, o primeiro parque temático da Disney, foi inaugurada.",
            "O Pacto de Varsóvia foi assinado, estabelecendo a aliança militar comunista.",
            "Foi o ano em que a série de TV 'The Mickey Mouse Club' estreou.",
            "Rosa Parks, ativista dos direitos civis, recusou-se a ceder seu assento no ônibus.",
            "O primeiro McDonald's abriu suas portas nos Estados Unidos.",
            "O filme 'Rebel Without a Cause', estrelado por James Dean, foi lançado.",
            "A União Soviética lançou o primeiro satélite artificial, o Sputnik 1."
        ]
    },
    {
        id: 13,
        resposta: "Guitarra",
        tipo: "Coisa",
        dicas: [
            "Sou um instrumento musical de cordas.",
            "Sou tocado com os dedos ou com uma palheta.",
            "Sou um dos instrumentos mais populares no rock e no pop.",
            "Tenho um corpo oco ou semiacústico.",
            "Possuo seis cordas, mas há variações com mais ou menos cordas.",
            "Os principais tipos de mim são elétrica e acústica.",
            "Fui popularizada por músicos como Jimi Hendrix, Eric Clapton e Jimmy Page.",
            "As minhas cordas são feitas de aço ou náilon.",
            "Posso ser usada para tocar acordes ou fazer solos.",
            "A minha afinação padrão das cordas é E, A, D, G, B, E."
        ]
    },
    {
        id: 14,
        resposta: "Pablo Picasso",
        tipo: "Pessoa",
        dicas: [
            "Fui um famoso pintor e escultor espanhol.",
            "Sou um dos artistas mais influentes do século XX.",
            "Fui co-fundador do movimento cubista.",
            "Pintei obras famosas como 'Guernica' e 'Les Demoiselles d'Avignon'.",
            "Experimentei diversos estilos e técnicas ao longo de sua carreira.",
            "Nasci em Málaga, na Espanha.",
            "Fui um dos pioneiros da arte moderna.",
            "Tive uma produção artística prolífica, com mais de 50.000 obras.",
            "Sou conhecido por sua criatividade e expressividade em minhas obras.",
            "Minha arte teve um grande impacto no mundo da arte e na cultura contemporânea."
        ]
    },
    {
        id: 15,
        resposta: "Telescópio",
        tipo: "Coisa",
        dicas: [
            "Sou um instrumento óptico utilizado para observar objetos distantes.",
            "Sou usado principalmente para estudar o espaço e as estrelas.",
            "Amplio a imagem dos objetos celestes.",
            "Posso ser usado tanto para observações astronômicas quanto terrestres.",
            "Existem diferentes tipos de mim, como refratores e refletores.",
            "O Hubble é um dos mais conhecidos de mim.",
            "Fui inventado no início do século XVII.",
            "Permito aos astrônomos estudar a composição e os movimentos dos corpos celestes.",
            "Os mais modernos de mim podem captar sinais de luz e radiação não visível.",
            "A minha qualidade é medida por sua abertura e poder de resolução."
        ]
    },
    {
        id: 16,
        resposta: "Londres",
        tipo: "Lugar",
        dicas: [
            "Sou a capital da Inglaterra e do Reino Unido.",
            "Sou uma das cidades mais populosas da Europa.",
            "Tenho uma rica história que remonta aos tempos romanos.",
            "Sou conhecida por seus marcos icônicos, como o Big Ben e o Palácio de Buckingham.",
            "O rio Tâmisa me atravessa.",
            "Sou um importante centro cultural e financeiro.",
            "Sediei os Jogos Olímpicos de Verão em 2012.",
            "Posso uma extensa rede de transporte público, incluindo o metrô conhecido como 'Tube'.",
            "Sou lar de renomadas instituições culturais, como o Museu Britânico e a National Gallery.",
            "Sou famosa por meus teatros e pelo famoso distrito de compras em Oxford Street."
        ]
    },
    {
        id: 17,
        resposta: "1920",
        tipo: "Ano",
        dicas: [
            "Sou um ano do século XX.",
            "Fiquei conhecido como a 'Era do Jazz'.",
            "Marquei o período de grande prosperidade nos Estados Unidos.",
            "Fui a época da Proibição, quando a venda de bebidas alcoólicas foi proibida.",
            "A moda das flappers, mulheres que desafiavam as convenções sociais, estava em alta.",
            "O rádio se tornou um meio de comunicação popular.",
            "Fui o início do período conhecido como 'Os Anos Loucos'.",
            "Tive um grande crescimento econômico e industrial.",
            "A cultura popular foi influenciada pelo cinema e pela música.",
            "A arte e a literatura também passaram por transformações significativas."
        ]
    },
    {
        id: 18,
        resposta: "Violoncelo",
        tipo: "Coisa",
        dicas: [
            "Sou maior que o violino e o viola.",
            "Sou tocado apoiado entre as pernas e com um arco.",
            "Sou um instrumento musical de cordas.",
            "Tenho quatro cordas afinadas em quintas.",
            "Sou parte da família das cordas da orquestra.",
            "Produzo um som grave e profundo.",
            "Sou usado tanto em música clássica quanto em outros gêneros musicais.",
            "Para me tocar, requer habilidade e prática.",
            "A minha caixa de ressonância é feita de madeira, como o abeto e o bordo.",
            "Sou considerado um dos instrumentos mais expressivos e versáteis."
        ]
    },
    {
        id: 19,
        resposta: "Cleópatra",
        tipo: "Pessoa",
        dicas: [
            "Fui a última rainha do Egito.",
            "Fui conhecida por sua beleza e poder.",
            "Tive relacionamentos com Júlio César e Marco Antônio.",
            "Desenvolvi uma aliança política com os romanos.",
            "Meu nome significa 'glória do pai'.",
            "Fui uma líder influente no Antigo Egito.",
            "Fui uma das figuras históricas mais famosas e emblemáticas.",
            "Desempenhei um papel importante na política e na cultura do Egito.",
            "Fui a última governante da dinastia ptolomaica.",
            "Minha morte é associada à serpente venenosa conhecida como áspide."
        ]
    },
    {
        id: 20,
        resposta: "Baleia",
        tipo: "Coisa",
        dicas: [
            "Sou um mamífero marinho.",
            "Sou conhecida por ser um dos maiores animais do mundo.",
            "Existem diferentes espécies de mim, como a azul e a jubarte.",
            "Possuo um corpo alongado e hidrodinâmico.",
            "Alimento-me principalmente de pequenos organismos, como plâncton e krill.",
            "Faço migrações de longa distância todos os anos.",
            "Posso emitir sons para se comunicar com outros membros do grupo.",
            "Sou um animal ameaçado de extinção devido à caça indiscriminada.",
            "Sou um símbolo da conservação dos oceanos e da biodiversidade marinha.",
            "A minha cauda, conhecida como nadadeira caudal, é usada para me propulsionar na água."
        ]
    },
    {
        id: 21,
        resposta: "Marte",
        tipo: "Lugar",
        dicas: [
            "Sou o quarto planeta a partir do Sol.",
            "Sou conhecido como o 'Planeta Vermelho' devido à minha coloração.",
            "Sou o segundo menor planeta do sistema solar.",
            "Possuo uma atmosfera fina composta principalmente de dióxido de carbono.",
            "Sou o único planeta além da Terra onde já foram encontradas evidências de água líquida.",
            "Sou alvo de diversas missões espaciais em busca de sinais de vida.",
            "Possuo vulcões e cânions gigantescos, como o Monte Olimpo e o Vale Marineris.",
            "Meus polos apresentam calotas de gelo compostas principalmente de água congelada.",
            "As missões Viking, Pathfinder, Spirit, Opportunity e Curiosity já exploraram minha superfície.",
            "A possibilidade de colonização humana em mim tem sido objeto de estudo e especulação."
        ]
    },
    {
        id: 22,
        resposta: "Jane Austen",
        tipo: "Pessoa",
        dicas: [
            "Fui uma famosa escritora inglesa.",
            "Sou conhecida por seus romances do século XIX.",
            "Meus livros abordam temas como amor, casamento e classes sociais.",
            "Minhas obras famosas incluem 'Orgulho e Preconceito' e 'Razão e Sensibilidade'.",
            "Sou considerada uma das maiores escritoras da literatura inglesa.",
            "Meus livros foram publicados anonimamente durante minha vida.",
            "Os meus romances foram adaptados para o cinema e a televisão.",
            "Retratei com habilidade a sociedade e as convenções da época.",
            "Minhas obras continuam populares e influentes até os dias de hoje.",
            "Nasci em Hampshire, na Inglaterra, em 1775."
        ]
    },
    {
        id: 23,
        resposta: "Fotografia",
        tipo: "Coisa",
        dicas: [
            "Sou uma técnica de capturar imagens usando luz.",
            "Sou uma forma de arte e expressão visual.",
            "Fui inventada no século XIX.",
            "Para me fazer envolve o uso de uma câmera para registrar momentos e cenas.",
            "O meu nome significa 'escrita com luz'.",
            "Existem diferentes tipos de mim, como paisagem, retrato e fotografia de moda.",
            "A evolução da tecnologia trouxe a versão digital.",
            "Ansel Adams, Annie Leibovitz e Henri Cartier-Bresson, são especialistas em mim.",
            "Posso ser impressa, exibida digitalmente ou publicada em livros e revistas.",
            "Permito capturar momentos únicos e preservar memórias de forma duradoura."
        ]
    },
    {
        id: 24,
        resposta: "Egito",
        tipo: "Lugar",
        dicas: [
            "Sou um país localizado no nordeste da África.",
            "Possuo uma rica história e uma das civilizações mais antigas do mundo.",
            "Sou conhecido pelos monumentos e pelas pirâmides.",
            "O rio Nilo me atravessa.",
            "Cairo é a minha capital.",
            "A Esfinge e as pirâmides de Gizé são minhas atrações turísticas famosas.",
            "Fui governado por faraós.",
            "A minha cultura inclui mitologia, arte, arquitetura e escrita hieroglífica.",
            "Sou lar de importantes sítios arqueológicos, como o Vale dos Reis e o Templo de Luxor.",
            "O turismo desempenha um papel importante para minha economia."
        ]
    },
    {
        id: 25,
        resposta: "1939",
        tipo: "Ano",
        dicas: [
            "Fiquei marcado pelo início da Segunda Guerra Mundial.",
            "A Alemanha nazista invadiu a Polônia, dando início ao conflito.",
            "O Reino Unido e a França declararam guerra à Alemanha.",
            "Foi o ano em que ocorreu o início da evacuação de crianças britânicas para áreas rurais durante a guerra.",
            "A máquina de venda automática de café foi patenteada neste ano.",
            "Sou um ano do século XX.",
            "O filme 'O Mágico de Oz' foi lançado.",
            "A escritora Virginia Woolf publicou a obra 'As Ondas'.",
            "A cidade de Barcelona foi bombardeada durante a Guerra Civil Espanhola.",
            "O físico alemão Albert Einstein escreveu uma carta ao presidente dos Estados Unidos, alertando sobre a possibilidade de desenvolvimento de armas nucleares."
        ]
    },
    {
        id: 26,
        resposta: "Abelha",
        tipo: "Coisa",
        dicas: [
            "Sou um inseto.",
            "Desempenho um papel importante na polinização das flores.",
            "Vivo em colônias organizadas, com uma rainha e várias operárias.",
            "Produzo mel e cera.",
            "Possuo um ferrão, que é usado para se defender.",
            "Sou conhecida por minha comunicação através da dança.",
            "Existem diferentes espécies de mim, como a melífera e a carpinteira.",
            "Sou um inseto sociável e trabalho em equipe para manter a colmeia.",
            "Sou vital para a polinização de plantas e para a preservação da biodiversidade.",
            "A minha casa é composta por uma rainha e operárias."
        ]
    },
    {
        id: 27,
        resposta: "Amazônia",
        tipo: "Lugar",
        dicas: [
            "Sou a maior floresta tropical do mundo.",
            "Me localizo na América do Sul, abrangendo vários países, incluindo Brasil, Peru e Colômbia.",
            "Sou conhecida pela sua biodiversidade e importância para o equilíbrio climático.",
            "Sou lar de diversas espécies de animais e plantas.",
            "Abrigo comunidades indígenas que tenho uma relação ancestral com o ambiente.",
            "A exploração ilegal de madeira e a expansão agrícola representam ameaças à mim.",
            "Enfrento desafios relacionados à preservação ambiental e à sustentabilidade.",
            "Sou um importante foco de pesquisas científicas e estudos sobre a conservação da natureza.",
            "Sou considerada o pulmão do mundo, devido à sua capacidade de absorver dióxido de carbono e liberar oxigênio.",
            "A minha preservação é fundamental para a saúde do planeta e o combate às mudanças climáticas."
        ]
    },
    {
        id: 28,
        resposta: "Cachorro",
        tipo: "Coisa",
        dicas: [
            "Sou um mamífero domesticado e considerado o melhor amigo do ser humano.",
            "Existo em diversas raças com diferentes tamanhos e características.",
            "Somos conhecidos por sua lealdade e capacidade de estabelecer vínculos afetivos com seus donos.",
            "Somos animais sociais e gostam de interagir.",
            "Podemos ser treinados para realizar várias tarefas, como guardar a casa, auxiliar pessoas com deficiência e participar de competições esportivas.",
            "Requeremos cuidados, como alimentação adequada e exercícios.",
            "Temos habilidades sensoriais superiores, como olfato aguçado e audição apurada.",
            "Somos animais brincalhões e adoram receber carinho e atenção.",
            "Existem organizações e instituições que trabalham em prol do meu bem-estar.",
            "Ter um da minha espécie traz muitos benefícios, como companheirismo e redução do estresse."
        ]
    },
    {
        id: 29,
        resposta: "Chá Mate",
        tipo: "Coisa",
        dicas: [
            "Sou uma bebida tradicional de um país específico.",
            "Sou muito popular e consumida diariamente pelos habitantes desse país.",
            "Minha preparação envolve o uso de folhas de uma planta nativa.",
            "Sou conhecido por ser uma fonte de energia e estimulante.",
            "Posso ser consumido quente ou gelado, dependendo da preferência.",
            "Sou geralmente servido em uma cuia e bebido através de uma bomba ou bombilha.",
            "Meu sabor é característico e único, com um leve amargor e aroma herbal.",
            "Sou uma bebida social e compartilhada entre amigos e familiares.",
            "Sou parte da cultura do Brasil, sendo consumido em diversos momentos do dia.",
            "Sou associado a rituais de hospitalidade e amizade."
        ]
    },
    {
        id: 30,
        resposta: "William Shakespeare",
        tipo: "Pessoa",
        dicas: [
            "Fui um famoso escritor e dramaturgo inglês.",
            "Sou considerado um dos maiores escritores da literatura mundial.",
            "Minhas peças teatrais incluem 'Romeu e Julieta', 'Hamlet' e 'Macbeth'.",
            "Contribui para o desenvolvimento do teatro elisabetano.",
            "Escrevi sonetos, poemas e peças em diversos gêneros, como tragédia, comédia e romance.",
            "Minhas obras abordam temas universais, como amor, poder, traição e ambição.",
            "Muitas expressões e palavras usadas atualmente têm origem nas minhas obras.",
            "Acredita-se que eu tenha nascido em Stratford-upon-Avon, Inglaterra, em 1564.",
            "Meu legado literário continua a ser estudado, encenado e apreciado em todo o mundo.",
            "Sou conhecido como o 'Bardo de Avon' e é uma figura icônica da literatura inglesa."
        ]
    },
    {
        id: 31,
        resposta: "Bicicleta",
        tipo: "Coisa",
        dicas: [
            "Sou um veículo de transporte pessoal.",
            "Possuo duas rodas, pedais e guidão.",
            "Sou movida pela força humana.",
            "Sou um meio de transporte ecológico e saudável.",
            "Sou amplamente utilizada para lazer, esporte e locomoção.",
            "Existem diferentes tipos de mim, como de estrada e urbanas.",
            "Fui inventada no século XIX.",
            "Promovi a atividade física e contribui para a melhoria da saúde e do condicionamento físico.",
            "Possp ser equipada com acessórios, como cestas, faróis e suportes para transporte.",
            "Há competições esportivas, que me utilizam como modalidade."
        ]
    },
    {
        id: 32,
        resposta: "Avião",
        tipo: "Coisa",
        dicas: [
            "Sou um meio de transporte que permite voar.",
            "Sou uma das invenções mais importantes da história da humanidade.",
            "Existem diferentes tipos de mim.",
            "Sou utilizado para transporte de passageiros, carga, resgate e exploração.",
            "Somos projetados para voar através da aerodinâmica e do princípio da sustentação.",
            "Revolucionei as viagens de longa distância e encurtei o tempo de deslocamento.",
            "Asas, motores e fuselagem são algumas das partes principais de mim.",
            "A indústria responsável pela minha criação é uma área de desenvolvimento tecnológico e inovação contínua.",
            "A segurança para mim é prioridade, com procedimentos rigorosos e regulamentações de segurança.",
            "O meu primeiro passeio controlado foi realizado pelos irmãos Wright em 1903."
        ]
    },
    {
        id: 33,
        resposta: "Marilyn Monroe",
        tipo: "Pessoa",
        dicas: [
            "Fui uma famosa atriz de cinema americana.",
            "Sou considerada um ícone de beleza e estilo.",
            "Estrelei filmes como 'O Pecado Mora ao Lado' e 'Quanto Mais Quente Melhor'.",
            "Minha imagem icônica inclui o vestido branco esvoaçante em 'O Pecado Mora ao Lado'.",
            "Também fui cantora e modelo.",
            "Minha vida pessoal e minha morte prematura contribuíram para o mistério e a fascinação em torno de minha figura.",
            "Nasci em 1926 em Los Angeles, Califórnia.",
            "Sou lembrada como um símbolo de feminilidade, sensualidade e vulnerabilidade.",
            "Minha contribuição para a indústria do entretenimento e minha influência cultural continuam a ser reconhecidas até hoje.",
            "Sou uma das atrizes mais famosas e icônicas da história do cinema."
        ]
    },
    {
        id: 34,
        resposta: "Cafeteira",
        tipo: "Coisa",
        dicas: [
            "Sou um eletrodoméstico usado para preparar café.",
            "Existem diferentes tipos de mim, como as de filtro, expresso e cápsulas.",
            "Uso filtro de papel ou metal para filtrar o café moído.",
            "Produzo um café mais concentrado e são comuns em cafeterias.",
            "As vezes uso cápsulas pré-dosadas para fazer o café.",
            "O café é uma bebida amplamente consumida em todo o mundo e sou um utensílio essencial para sua preparação.",
            "Quando sou moderna possuo recursos como programação, controle de intensidade do café e vaporizador para leite.",
            "Quando prepardo café o cheiro é reconfortante para muitas pessoas.",
            "Posso ter uma jarra de vidro ou inox.",
            "Facilito o processo de fazer café, tornando-o mais rápido e conveniente."
        ]
    },
    {
        id: 35,
        resposta: "Vincent van Gogh",
        tipo: "Pessoa",
        dicas: [
            "Fui um famoso pintor holandês.",
            "Sou considerado um dos maiores artistas da história da arte.",
            "Minha obra é caracterizada por pinceladas intensas, cores vibrantes e temas emocionais.",
            "Pintei obras icônicas, como 'A Noite Estrelada' e 'Girassóis'.",
            "Enfrentei desafios pessoais e lutou contra problemas de saúde mental ao longo de sua vida.",
            "Minha arte ganhou reconhecimento após minha morte e influenciou gerações posteriores de artistas.",
            "Nasci em 1853 na Holanda.",
            "Meu estilo artístico é associado ao pós-impressionismo.",
            "Minhas pinturas retratam paisagens, retratos, naturezas-mortas e autorretratos.",
            "Deixei um legado duradouro na história da arte, com meu trabalho sendo exibido em museus e apreciado em todo o mundo."
        ]
    },
    {
        id: 36,
        resposta: "Internet",
        tipo: "Coisa",
        dicas: [
            "Sou uma rede global de computadores interconectados.",
            "Permito a troca de informações e o acesso a recursos digitais.",
            "Revolucionei as comunicações e a forma como as pessoas acessam informações.",
            "Sou uma fonte de conhecimento, entretenimento e comunicação em todo o mundo.",
            "Permito a criação de sites, o envio de e-mails, a realização de videochamadas e o compartilhamento de arquivos.",
            "Tecnologias como Wi-Fi e banda larga facilitam o acesso à mim.",
            "A segurança online e a proteção de dados são preocupações importantes relacionadas à mim.",
            "As redes sociais, os aplicativos de mensagens e as plataformas de compartilhamento de conteúdo são parte integrante da experiência que proporciono.",
            "Continuo a evoluir e me expandir, com o desenvolvimento de tecnologias como a IOT e a IA.",
            "Sou um meio poderoso de conectar pessoas, ideias e informações em todo o mundo."
        ]
    },
    {
        id: 37,
        resposta: "Arco-íris",
        tipo: "Coisa",
        dicas: [
            "Sou um fenômeno óptico que ocorre após a chuva, quando a luz solar é refratada e refletida pelas gotas de água no ar.",
            "Sou composto por faixas coloridas, geralmente em uma sequência de sete cores.",
            "Formo um semicírculo.",
            "Posso ser observado quando o sol está atrás do observador e as gotas de chuva estão na direção oposta.",
            "Sou um símbolo de esperança, beleza e renovação em várias culturas.",
            "Pode ser observado em cachoeiras, fontes de água e em condições especiais de luz e umidade.",
            "Cientificamente, sou explicado pela dispersão e refração da luz branca em diferentes comprimentos de onda.",
            "Me fotografar pode ser um desafio devido às condições ideais de iluminação e posicionamento.",
            "Embora me ver completo seja mais comum, às vezes é possível me ver parcialmente ou até mesmo duplo."
        ]
    },
    {
        id: 38,
        resposta: "Futebol",
        tipo: "Coisa",
        dicas: [
            "Sou um esporte praticado em todo o mundo.",
            "Envolvo duas equipes de onze jogadores cada.",
            "O objetivo é colocar a bola na meta adversária.",
            "Sou jogado em um campo retangular com uma bola.",
            "Os jogadores usam seus pés para chutar a bola e marcar gols.",
            "Sou um esporte de equipe que requer habilidades técnicas, táticas e condicionamento físico.",
            "Sou regido por regras estabelecidas pela (FIFA).",
            "A Copa do Mundo é o meu torneio mais prestigioso, realizado a cada quatro anos.",
            "O esporte é conhecido por seu impacto cultural, paixão dos torcedores e rivalidades entre clubes.",
            "Alguns dos meus jogadores se tornaram ícones globais e alcançaram grande fama e sucesso."
        ]
    },
    {
        id: 39,
        resposta: "Grande Muralha da China",
        tipo: "Lugar",
        dicas: [
            "Sou uma estrutura de defesa histórica localizada na China.",
            "Sou uma das maravilhas do mundo antigo.",
            "Me estende por vários milhares de quilômetros.",
            "Fui construída ao longo de várias dinastias chinesas para proteger o império de invasões.",
            "A minhas construção envolveu trabalho manual intenso e materiais como pedra, tijolo e terra compactada.",
            "Sou um importante destino turístico e um símbolo da China.",
            "Ofereço vistas panorâmicas e uma conexão com a história e cultura chinesas.",
            "Sou uma das estruturas mais longas já construídas pelo ser humano.",
            "Sou reconhecida como Patrimônio Mundial da UNESCO desde 1987.",
            "Sou um testemunho da engenhosidade e da habilidade arquitetônica dos antigos chineses."
        ]
    },
    {
        id: 40,
        resposta: "Estátua da Liberdade",
        tipo: "Lugar",
        dicas: [
            "Sou um famoso monumento localizado nos Estados Unidos.",
            "Fui um presente dado pela França aos Estados Unidos.",
            "Represento a liberdade e fui inaugurada em 1886.",
            "Estou localizada na Liberty Island, em Nova York.",
            "Sou um símbolo icônico dos Estados Unidos e da cidade de Nova York.",
            "Sou feita de cobre e possuo uma estrutura de ferro.",
            "Seguro uma tocha na mão direita e uma tabuleta com a data da Declaração de Independência dos Estados Unidos na mão esquerda.",
            "Sou um dos destinos turísticos mais populares do mundo, atraindo milhões de visitantes anualmente.",
            "Os visitantes podem subir até a minha coroa ou visitar o pedestal da estátua para obter vistas panorâmicas da cidade.",
            "Represento os valores de liberdade, democracia e acolhimento aos imigrantes."
        ]
    },
    {
        id: 41,
        resposta: "Robô",
        tipo: "Coisa",
        dicas: [
            "Sou uma máquina programável capaz de realizar tarefas automaticamente.",
            "Somos amplamente utilizados em várias áreas, como indústria, medicina, exploração espacial e entretenimento.",
            "Podemos ter formas humanoides, ou sermos projetados para fins específicos.",
            "As vezes sou controlado remotamente, as vezes possuo inteligência artificial para tomar decisões autônomas.",
            "Sou projetado para aumentar a eficiência, a precisão e a segurança em várias tarefas.",
            "As vezes realizo trabalhos repetitivos em linhas de produção, as vezes auxilio em procedimentos médicos e também faço limpeza doméstica.",
            "A inteligência artificial e a aprendizagem de máquina têm impulsionado avanços na capacidade da minha interação e me adaptar ao ambiente.",
            "O desenvolvimento da minha versão humanoides tem como objetivo criar máquinas que possam se assemelhar e interagir de forma semelhante aos seres humanos.",
            "O campo que me estuda é a robótica."
        ]
    },
    {
        id: 42,
        resposta: "Harry Potter",
        tipo: "Pessoa",
        dicas: [
            "Sou um personagem fictício protagonista de uma série de livros e filmes.",
            "Fui criado pela escritora britânica J.K. Rowling.",
            "Souum jovem bruxo com uma cicatriz em forma de raio na testa.",
            "Sou conhecido por estudar em uma escola de magia e bruxaria.",
            "A série de livros e filmes narra as minhas aventuras e de meus amigos.",
            "Meus melhores amigos são Hermione Granger e Ron Weasley.",
            "Enfrentei o vilão Lord Voldemort ao longo da história.",
            "A minha série de livros vendeu milhões de cópias em todo o mundo e foi adaptada para o cinema com grande sucesso.",
            "Os livros e filmes inspirados em mim se tornaram uma das franquias mais populares e influentes da cultura pop.",
            "Sou um símbolo de coragem, amizade e magia para muitos fãs ao redor do mundo."
        ]
    },
    {
        id: 43,
        resposta: "Taj Mahal",
        tipo: "Lugar",
        dicas: [
            "Sou um famoso mausoléu localizado na Índia.",
            "Fui construído no século XVII pelo imperador Shah Jahan.",
            "Estou situado na cidade de Agra, às margens do rio Yamuna.",
            "Sou considerado um dos mais belos exemplos da arquitetura mogol.",
            "Fui construído em homenagem à esposa do imperador, Mumtaz Mahal.",
            "Sou feito de mármore branco e possui detalhes decorativos elaborados.",
            "Sou um Patrimônio Mundial da UNESCO desde 1983.",
            "Sou conhecido por minha simetria perfeita e pela beleza de seus jardins.",
            "Sou um dos destinos turísticos mais visitados da Índia e um símbolo do amor eterno.",
            "Ao amanhecer e ao entardecer, exibo diferentes tonalidades, criando uma experiência visual deslumbrante."
        ]
    },
    {
        id: 44,
        resposta: "Império Romano",
        tipo: "Lugar",
        dicas: [
            "Fui um dos maiores impérios da história.",
            "Durei mais de 500 anos, começando no século I a.C. e terminando no século V d.C.",
            "Tive minha capital inicialmente em Roma e, posteriormente, em Constantinopla.",
            "Abrangi vastas áreas da Europa, norte da África e parte do Oriente Médio.",
            "Fui conhecido por meu sistema político, engenharia avançada, lei e ordem, e cultura influente.",
            "Deixei um legado duradouro em áreas como direito, arquitetura, literatura, língua e organização política.",
            "Era dividida em classes sociais, com os imperadores exercendo poder político e militar.",
            "Enfrentei uma série de desafios, incluindo invasões bárbaras e problemas econômicos internos.",
            "O meu declínio foi marcado por instabilidade política, divisões territoriais e eventos como a queda de Roma em 476 d.C.",
            "Apesar do meu fim como um império unificado, a minha influência e minha cultura continuaram a se espalhar e influenciar outras civilizações ao longo dos séculos."
        ]
    },
    {
        id: 45,
        resposta: "Odisseia",
        tipo: "Coisa",
        dicas: [
            "Sou um dos grandes épicos da literatura grega antiga.",
            "Sou atribuída ao poeta grego Homero.",
            "Narro a jornada de Ulisses (também conhecido como Odisseu) de volta para casa após a Guerra de Troia.",
            "Na história, Ulisses enfrenta diversos desafios e perigos em sua jornada, incluindo encontros com criaturas mitológicas e deuses.",
            "Sou composta por 24 cantos e considerada uma das obras mais importantes da literatura ocidental.",
            "Abordo temas como heroísmo, honra, astúcia, lealdade e o retorno ao lar.",
            "Sou uma fonte rica de mitologia grega e oferece insights sobre a cultura e os valores da época.",
            "influenciei muitos outros trabalhos literários ao longo dos séculos.",
            "Sou amplamente estudada e apreciada até os dias de hoje, sendo considerada uma obra-prima da literatura mundial.",
            "A história de Ulisses e sua jornada épica cativa leitores de todas as idades e continua a inspirar novas interpretações e adaptações."
        ]
    },
    {
        id: 46,
        resposta: "Florença",
        tipo: "Lugar",
        dicas: [
            "Sou uma cidade italiana localizada na região da Toscana.",
            "Sou considerada o berço do Renascimento italiano.",
            "Fui o centro cultural, artístico e econômico da Europa durante o século XIV e XV.",
            "Sou conhecida por sua arquitetura renascentista, como a Catedral de Santa Maria del Fiore e o Palazzo Vecchio.",
            "Abrigo uma das mais importantes galerias de arte do mundo, a Galleria degli Uffizi.",
            "Grandes artistas renascentistas, como Leonardo da Vinci, Michelangelo e Botticelli, deixaram um legado artístico significativo em mim.",
            "O rio Arno corta a cidade, proporcionando vistas pitorescas e charme adicional.",
            "Sou também famosa por sua culinária, incluindo pratos como a Bistecca alla Fiorentina e o gelato italiano.",
            "Sou um destino turístico popular devido à sua rica história, arte e beleza arquitetônica.",
            "Continuo a ser um importante centro cultural e artístico, atraindo visitantes de todo o mundo."
        ]
    },
    {
        id: 47,
        resposta: "Grécia Antiga",
        tipo: "Lugar",
        dicas: [
            "Fui uma das civilizações mais influentes da história.",
            "Estava localizada na península grega e nas ilhas do mar Egeu.",
            "Sou conhecida por minhas contribuições para a filosofia, arte, ciência, política e literatura.",
            "Em mim uma das primeiras formas de governo democrático foi criado.",
            "Grandes filósofos, como Sócrates, Platão e Aristóteles, surgiram aqui.",
            "A cidade-estado de Atenas era meu centro cultural e intelectual.",
            "Os Jogos Olímpicos, que começaram em mim, foram uma das maiores celebrações esportivas da época.",
            "A mitologia grega, com deuses e heróis, também se originou aqui.",
            "A minha arquitetura, incluindo os templos, é conhecida por seu estilo elegante e proporções harmônicas.",
            "A guerra entre Esparta e Atenas, conhecida como Guerra do Peloponeso, foi um conflito significativo na minha história."
        ]
    },
    {
        id: 48,
        resposta: "Girafa",
        tipo: "Coisa",
        dicas: [
            "Sou um mamífero de pescoço longo e pernas compridas.",
            "Somos os animais terrestres mais altos, podendo atingir alturas de até 5,5 metros.",
            "Somos encontradas em partes da África, principalmente em savanas e áreas arborizadas.",
            "Possuimos manchas irregulares em sua pelagem, que ajudam na camuflagem.",
            "Possuimos uma língua comprida, que usamos para comer folhas e brotos de árvores.",
            "Somos herbívoras e se alimentam principalmente de folhagens.",
            "Apesar de meu tamanho, somos animais pacíficos e geralmente evitamos conflitos.",
            "Os machos possuem chifres ósseos, chamados de ossicones, que ajudam na defesa e competição por fêmeas.",
            "Somos conhecidas por sua caminhada graciosa e sua postura única ao se alimentar ou beber água.",
            "Somos consideradas espécies vulneráveis devido à caça furtiva e à perda de habitat."
        ]
    },
    {
        id: 49,
        resposta: "Ano-Novo",
        tipo: "Ano",
        dicas: [
            "Sou a celebração do início de um novo ano.",
            "Sou comemorado em muitos países ao redor do mundo na noite de 31 de dezembro para 1º de janeiro.",
            "Marco o fim do ano civil e o começo do próximo.",
            "Minhas comemorações incluem festas, fogos de artifício, jantares especiais e reuniões familiares.",
            "É tradicional fazer resoluções, definindo metas e objetivos para o próximo ano.",
            "Em alguns países, como o Brasil, é costume pular sete ondas no mar à meia-noite para trazer sorte.",
            "Em Nova York, a queda da bola na Times Square é um evento icônico.",
            "Desejar coisas boas é uma expressão comum durante as festividades.",
            "É uma oportunidade de começar de novo, deixar o passado para trás e ter esperanças para o futuro.",
            "Em muitas culturas, é uma ocasião para reunir-se com entes queridos e celebrar o recomeço."
        ]
    },
    {
        id: 50,
        resposta: "Montanha-russa",
        tipo: "Coisa",
        dicas: [
            "Sou uma atração popular em parques de diversões.",
            "Sou um tipo de brinquedo mecânico que simula uma viagem emocionante em trilhos.",
            "Os meus trilhos possuem subidas íngremes, quedas rápidas, curvas fechadas e loopings.",
            "Existem diferentes tipos de mim, desde as mais suaves e familiares até as mais extremas e radicais.",
            "Sou uma experiência que proporciona adrenalina e emoção aos visitantes.",
            "Alguns parques de diversões têm modelos temáticas, com cenários e narrativas.",
            "A primeira de mim foi construída na Rússia no século XVIII.",
            "Hoje em dia, somos projetadas com tecnologia avançada e oferecem emoções cada vez mais intensas.",
            "Temos restrições de altura e idade para garantir a segurança dos visitantes.",
            "Andar em mim é uma experiência divertida e desafiadora para os amantes de emoções fortes."
        ]
    },
    {
        id: 51,
        resposta: "Chat GPT",
        tipo: "Coisa",
        dicas: [
            "Sou uma forma avançada de inteligência artificial.",
            "Fui projetado para conversar e interagir com os usuários.",
            "Utilizo algoritmos e modelos de linguagem para gerar respostas e fornecer informações.",
            "Sou capaz de compreender e processar textos em diferentes idiomas.",
            "Estou em constante aprendizado, pois sou treinado com grandes volumes de dados.",
            "Posso ser encontrado em plataformas de chat online e assistentes virtuais.",
            "Meu objetivo é fornecer assistência e responder a perguntas dos usuários.",
            "Sou capaz de realizar tarefas como fornecer informações, fazer recomendações e até mesmo contar piadas.",
            "Minha tecnologia é baseada em redes neurais e processamento de linguagem natural.",
            "Estou sendo utilizado em diversos setores, como atendimento ao cliente, suporte técnico e educação."
        ]
    },
    {
        id: 52,
        resposta: "Kimonos",
        tipo: "Coisa",
        dicas: [
            "Sou uma peça de vestuário tradicional de um país asiático.",
            "Sou usada em ocasiões especiais, como festivais e cerimônias.",
            "Tenho origem histórica e culturalmente significativa nesse país.",
            "Sou feito de tecidos leves e fluidos, geralmente de seda.",
            "Minha estrutura é composta por uma peça retangular com mangas largas.",
            "Sou usado por pessoas de todas as idades e gêneros.",
            "Minhas estampas e padrões são variados, representando símbolos e significados tradicionais.",
            "Sou amarrado com um obi, uma faixa larga e decorativa.",
            "Minhas cores e estilos podem indicar a estação do ano ou o status social da pessoa que o veste.",
            "Atualmente, sou apreciado como uma peça de moda única e estilizada em todo o mundo."
        ]
    },
    {
        id: 53,
        resposta: "Pandas",
        tipo: "Coisa",
        dicas: [
            "Sou um mamífero conhecido por ser um dos animais mais adoráveis e amados do mundo.",
            "Tenho uma aparência distintiva, com uma cabeça redonda, olhos grandes e manchas pretas ao redor dos olhos e orelhas.",
            "Sou nativo da China e sou considerado um símbolo nacional desse país.",
            "Minha dieta é principalmente herbívora, com uma preferência especial por bambu.",
            "Sou um animal solitário e passo a maior parte do meu tempo comendo e descansando.",
            "Minhas patas dianteiras possuem um polegar opositor, que me ajuda a segurar o bambu.",
            "Sou conhecido por ser um animal pacífico e não agressivo.",
            "Infelizmente, sou uma espécie em perigo de extinção, devido à destruição do meu habitat e à caça ilegal.",
            "Existem programas de conservação dedicados a proteger e preservar minha espécie.",
            "Minha pelagem é preta e branca, o que me torna facilmente reconhecível e adorável para as pessoas."
        ]
    },
    {
        id: 54,
        resposta: "Japão",
        tipo: "Lugar",
        dicas: [
            "Sou um país insular localizado no leste da Ásia.",
            "Tenho uma rica história e cultura, combinando tradições antigas com inovação moderna.",
            "Minha capital é Tóquio, uma cidade vibrante e tecnologicamente avançada.",
            "Sou conhecido por minha culinária deliciosa, como sushi, ramen e tempura.",
            "Tenho belos jardins tradicionais, como o Jardim Japonês de Kenroku-en e o Jardim do Palácio Imperial.",
            "Minha cultura é fortemente influenciada por tradições como o budismo, o xintoísmo e a cerimônia do chá.",
            "Sou famoso por minha arquitetura única, incluindo templos, santuários e castelos históricos.",
            "Minha tecnologia é líder mundial em inovação, com empresas renomadas nas áreas de eletrônicos, automóveis e robótica.",
            "Sou um destino popular para turistas que buscam explorar minha cultura fascinante e paisagens deslumbrantes.",
            "Realizei os Jogos Olímpicos de Verão em 2021, proporcionando uma experiência única aos atletas e espectadores."
        ]
    },
    {
        id: 56,
        resposta: "Foguete",
        tipo: "Coisa",
        dicas: [
            "Sou um veículo projetado para se mover no espaço.",
            "Sou impulsionado por motores de foguete que queimam combustível para gerar impulso.",
            "Minha forma aerodinâmica ajuda a minimizar o arrasto durante o voo.",
            "Fui desenvolvido para transportar cargas úteis, como satélites, sondas espaciais e astronautas.",
            "Minha história remonta aos foguetes chineses utilizados no século XIII para fins militares.",
            "Fui crucial para a exploração espacial e permiti que humanos alcançassem a lua pela primeira vez.",
            "Agências espaciais, como a NASA e a ESA, utilizam-me para lançar missões espaciais e explorar o universo.",
            "Sou projetado com estágios, onde cada estágio é descartado após esgotar seu combustível.",
            "Meu desenvolvimento e avanço tecnológico levaram ao surgimento de missões espaciais mais ambiciosas e descobertas científicas.",
            "Minha trajetória de voo segue cálculos precisos para atingir a órbita desejada ou alcançar outros corpos celestes."
        ]
    },
    {
        id: 57,
        resposta: "Caverna de Lascaux",
        tipo: "Lugar",
        dicas: [
            "Sou uma caverna localizada no sudoeste da França.",
            "Fui descoberta em 1940 e abrigo uma série de pinturas rupestres pré-históricas.",
            "Minhas pinturas datam de cerca de 17.000 anos atrás, pertencendo ao período Paleolítico Superior.",
            "As pinturas nas paredes da minha caverna retratam principalmente animais, como bisões, cavalos, veados e rinocerontes.",
            "Minhas pinturas são notáveis ​​pela sua precisão e detalhamento, revelando a habilidade artística dos povos pré-históricos.",
            "Para preservar as pinturas, minha caverna foi fechada ao público em 1963 e substituída por uma réplica exata.",
            "Sou considerada um tesouro arqueológico e uma importante janela para o passado humano.",
            "As pinturas na minha caverna fornecem insights valiosos sobre a vida e a cultura dos povos pré-históricos.",
            "Sou reconhecida como Patrimônio Mundial pela UNESCO e minha importância histórica é amplamente reconhecida.",
            "Embora não seja possível visitar a caverna original, a réplica permite que as pessoas apreciem e estudem essas incríveis obras de arte."
        ]
    },
    {
        id: 58,
        resposta: "Coelho",
        tipo: "Coisa",
        dicas: [
            "Sou um animal conhecido por ser um herbívoro mamífero.",
            "Sou encontrado em diferentes habitats ao redor do mundo, desde florestas até campos abertos.",
            "Tenho orelhas longas e uma cauda fofa.",
            "Minha agilidade e velocidade me permitem escapar de predadores.",
            "Sou conhecido por minha habilidade de saltar, sendo capaz de dar grandes pulos.",
            "Existem várias raças de mim, incluindo o coelho doméstico, que é popular como animal de estimação.",
            "Minha dieta consiste principalmente de vegetais, folhas e grama.",
            "Sou conhecido por minha reprodução rápida, com ninhadas que podem ter vários filhotes.",
            "Em muitas culturas, sou um símbolo de fertilidade e renovação, especialmente durante a época da Páscoa.",
            "Minha fofura e comportamento brincalhão me tornam um animal popular e amado em todo o mundo."
        ]
    },
    {
        id: 59,
        resposta: "Batalha de Waterloo",
        tipo: "Coisa",
        dicas: [
            "Fui uma batalha decisiva que ocorreu em 18 de junho de 1815.",
            "Fui travada perto de Waterloo, na atual Bélgica.",
            "Meu confronto envolveu as forças lideradas por Napoleão Bonaparte e uma coalizão de países europeus.",
            "A batalha foi um ponto de virada na história, marcando o fim do domínio de Napoleão e o início de um período de paz na Europa.",
            "A vitória da coalizão aliada sobre as tropas francesas resultou na abdicação de Napoleão e seu exílio para a Ilha de Santa Helena.",
            "Minha batalha foi notória pela brutalidade e intensidade dos combates, com pesadas perdas de ambos os lados.",
            "Minha história é estudada até hoje como um exemplo de estratégia militar e liderança.",
            "O local da batalha, conhecido como Campo de Batalha de Waterloo, é uma atração turística popular e um local de interesse histórico.",
            "Meu resultado teve um impacto duradouro nas relações políticas e territoriais da Europa, moldando a configuração geopolítica da época.",
            "Sou lembrado como um dos eventos mais importantes do século XIX e uma das batalhas mais famosas da história."
        ]
    },
    {
        id: 60,
        resposta: "Sol",
        tipo: "Coisa",
        dicas: [
            "Sou uma estrela localizada no centro do sistema solar.",
            "Sou a fonte primária de luz e calor para os planetas que orbitam ao meu redor.",
            "Tenho uma massa enorme e sou composto principalmente de hidrogênio e hélio.",
            "Minha temperatura é extremamente alta, atingindo milhões de graus Celsius no meu núcleo.",
            "Em minha superfície, são visíveis manchas solares, que são áreas com temperaturas mais baixas.",
            "A energia que emito é gerada através de reações nucleares que ocorrem em meu interior.",
            "Meu tamanho é tão grande que a Terra caberia mais de um milhão de vezes dentro de mim.",
            "Minha influência é essencial para a vida na Terra, pois forneço a energia necessária para a fotossíntese das plantas.",
            "Também afeto o clima e as condições atmosféricas do nosso planeta.",
            "Sou objeto de estudo da astrofísica e da astronomia, e o estudo das minhas propriedades ajuda a entender as estrelas em geral."
        ]
    }
]
export default quiz