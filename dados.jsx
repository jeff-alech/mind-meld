const quiz = [
    {
        resposta: "Homem aranha",
        tipo: "Pessoa",
        dicas: [
            "Ele tem habilidades aracnídeas.",
            "Seu nome civil é Peter Parker.",
            "Ele é conhecido por lançar teias.",
            "É um super-herói da Marvel.",
            "Seu uniforme é predominantemente vermelho e azul.",
            "Ele apareceu pela primeira vez em quadrinhos em 1962.",
            "Sua tia se chama May Parker.",
            "Seu melhor amigo é o Homem de Ferro.",
            "Ele tem uma franquia de filmes própria.",
            "É conhecido como o Cabeça de Teia."
        ]
    },
    {
        id: 2,
        resposta: "Mona Lisa",
        tipo: "Obra de Arte",
        dicas: [
            "Foi pintada por um famoso artista renascentista.",
            "A figura retratada é uma mulher.",
            "É conhecida por seu sorriso enigmático.",
            "A pintura é exposta no Museu do Louvre, em Paris.",
            "Foi concluída no início do século XVI.",
            "É considerada uma das obras mais famosas do mundo.",
            "O nome da modelo é desconhecido.",
            "A pintura é conhecida como 'La Gioconda' em italiano.",
            "Leonardo da Vinci é o autor da obra.",
            "Foi pintada com tinta a óleo."
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
            "Leva o nome do engenheiro Gustave Eiffel.",
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
            "É um instrumento musical de cordas.",
            "Possui teclas brancas e pretas.",
            "É tocado pressionando as teclas com os dedos.",
            "É comumente utilizado em música clássica.",
            "Possui cordas que são percutidas por martelos.",
            "Foi inventado no século XVIII.",
            "É conhecido por sua ampla faixa de notas.",
            "Pode ser um piano de cauda ou de armário.",
            "Um dos compositores famosos que o tocava é Beethoven.",
            "O piano moderno tem cerca de 88 teclas."
        ]
    },
    {
        resposta: "Albert Einstein",
        tipo: "Pessoa",
        dicas: [
            "Foi um famoso cientista do século XX.",
            "É conhecido por sua teoria da relatividade.",
            "Ganhou o Prêmio Nobel de Física em 1921.",
            "Nasceu em Ulm, na Alemanha.",
            "Era conhecido por seu visual com cabelos despenteados.",
            "Trabalhou no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
            "Desenvolveu a famosa equação E=mc².",
            "Era um defensor da paz e do desarmamento nuclear.",
            "Ensinou na Universidade de Princeton, nos Estados Unidos.",
            "Faleceu em 1955, aos 76 anos de idade."
        ]
    },
    {
        id: 7,
        resposta: "Pirâmides de Gizé",
        tipo: "Lugar",
        dicas: [
            "São estruturas antigas localizadas no Egito.",
            "Foram construídas como túmulos para faraós.",
            "Estão localizadas perto da cidade do Cairo.",
            "São conhecidas como uma das Sete Maravilhas do Mundo Antigo.",
            "A maior delas é a Pirâmide de Quéops.",
            "Foram construídas há mais de 4.500 anos.",
            "Acredita-se que tenham sido construídas por milhares de trabalhadores.",
            "Foram construídas com grandes blocos de pedra calcária.",
            "As pirâmides são alinhadas com as estrelas.",
            "As pirâmides fazem parte de um complexo funerário."
        ]
    },
    {
        id: 8,
        resposta: "1492",
        tipo: "Ano",
        dicas: [
            "É um ano do século XV.",
            "Ficou famoso devido à descoberta de um novo continente.",
            "Cristóvão Colombo chegou a uma nova terra neste ano.",
            "Marca o início da colonização europeia das Américas.",
            "Foi financiado pela Coroa Espanhola.",
            "Colombo fez sua primeira viagem ao Novo Mundo.",
            "Acreditava estar chegando às Índias, mas descobriu a América.",
            "É considerado um marco na história da exploração.",
            "A viagem de Colombo foi feita com três navios: Santa Maria, Pinta e Niña.",
            "A descoberta de Colombo levou à expansão do Império Espanhol."
        ]
    },
    {
        id: 9,
        resposta: "Violino",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um instrumento de cordas.",
            "É tocado com um arco.",
            "Possui quatro cordas.",
            "É utilizado em diversos gêneros musicais.",
            "É um dos instrumentos mais populares da família das cordas.",
            "É comumente usado em orquestras.",
            "A forma moderna do violino foi desenvolvida na Itália.",
            "Requer habilidade e prática para ser tocado proficientemente.",
            "Os violinos são construídos com madeira, como o abeto e o bordo.",
            "O som do violino é amplificado pela caixa de ressonância."
        ]
    },
    {
        id: 10,
        resposta: "Leonardo da Vinci",
        tipo: "Pessoa",
        dicas: [
            "Foi um artista, cientista e inventor renascentista.",
            "Pintou a famosa obra 'Mona Lisa'.",
            "Também é conhecido por 'A Última Ceia'.",
            "Era um gênio polímata, ou seja, tinha conhecimentos em diversas áreas.",
            "Suas invenções incluem projetos de máquinas voadoras.",
            "Nasceu na cidade de Vinci, na Itália.",
            "É considerado um dos maiores pintores de todos os tempos.",
            "Seu quaderno de esboços, chamado de Códice, contém diversas anotações e desenhos.",
            "Foi um dos pioneiros do estilo artístico conhecido como sfumato.",
            "Viveu durante o período conhecido como Renascimento."
        ]
    },
    {
        id: 11,
        resposta: "Machu Picchu",
        tipo: "Lugar",
        dicas: [
            "É uma antiga cidade inca.",
            "Está localizada no Peru, na região dos Andes.",
            "Foi construída no século XV.",
            "É considerada Patrimônio Mundial pela UNESCO.",
            "Fica em uma área montanhosa e possui uma vista deslumbrante.",
            "É conhecida como a Cidade Perdida dos Incas.",
            "Acredita-se que tenha sido um importante centro político e religioso.",
            "Foi redescoberta pelo explorador Hiram Bingham em 1911.",
            "As construções são feitas de pedra e têm uma precisão impressionante.",
            "É um dos destinos turísticos mais populares da América do Sul."
        ]
    },
    {
        id: 12,
        resposta: "1955",
        tipo: "Ano",
        dicas: [
            "É um ano do século XX.",
            "Ficou conhecido pelo início da era espacial.",
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
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um instrumento musical de cordas.",
            "É tocado com os dedos ou com uma palheta.",
            "É um dos instrumentos mais populares no rock e no pop.",
            "Tem um corpo oco ou semiacústico.",
            "Possui seis cordas, mas há variações com mais ou menos cordas.",
            "Os principais tipos são guitarra elétrica e guitarra acústica.",
            "Foi popularizada por músicos como Jimi Hendrix, Eric Clapton e Jimmy Page.",
            "As cordas são feitas de aço ou náilon.",
            "Pode ser usada para tocar acordes ou fazer solos.",
            "A afinação padrão das cordas é EADGBE."
        ]
    },
    {
        id: 14,
        resposta: "Pablo Picasso",
        tipo: "Pessoa",
        dicas: [
            "Foi um famoso pintor e escultor espanhol.",
            "É um dos artistas mais influentes do século XX.",
            "Co-fundador do movimento cubista.",
            "Pintou obras famosas como 'Guernica' e 'Les Demoiselles d'Avignon'.",
            "Experimentou diversos estilos e técnicas ao longo de sua carreira.",
            "Nasceu em Málaga, na Espanha.",
            "Foi um dos pioneiros da arte moderna.",
            "Teve uma produção artística prolífica, com mais de 50.000 obras.",
            "É conhecido por sua criatividade e expressividade em suas obras.",
            "Sua arte teve um grande impacto no mundo da arte e na cultura contemporânea."
        ]
    },
    {
        id: 15,
        resposta: "Telescópio",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um instrumento óptico utilizado para observar objetos distantes.",
            "É usado principalmente para estudar o espaço e as estrelas.",
            "Amplia a imagem dos objetos celestes.",
            "Pode ser usado tanto para observações astronômicas quanto terrestres.",
            "Existem diferentes tipos de telescópios, como refratores e refletores.",
            "O telescópio espacial Hubble é um dos mais conhecidos.",
            "Foi inventado no início do século XVII.",
            "Permite aos astrônomos estudar a composição e os movimentos dos corpos celestes.",
            "Os telescópios modernos podem captar sinais de luz e radiação não visível.",
            "A qualidade de um telescópio é medida por sua abertura e poder de resolução."
        ]
    },
    {
        id: 16,
        resposta: "Londres",
        tipo: "Lugar",
        dicas: [
            "É a capital da Inglaterra e do Reino Unido.",
            "É uma das cidades mais populosas da Europa.",
            "Tem uma rica história que remonta aos tempos romanos.",
            "É conhecida por seus marcos icônicos, como o Big Ben e o Palácio de Buckingham.",
            "O rio Tâmisa atravessa a cidade.",
            "É um importante centro cultural e financeiro.",
            "A cidade sediou os Jogos Olímpicos de Verão em 2012.",
            "Possui uma extensa rede de transporte público, incluindo o metrô conhecido como 'Tube'.",
            "É lar de renomadas instituições culturais, como o Museu Britânico e a National Gallery.",
            "A cidade é famosa por seus teatros e pelo famoso distrito de compras em Oxford Street."
        ]
    },
    {
        id: 17,
        resposta: "1920",
        tipo: "Ano",
        dicas: [
            "É um ano do século XX.",
            "Ficou conhecido como a 'Era do Jazz'.",
            "Marcou o período de grande prosperidade nos Estados Unidos.",
            "Foi a época da Proibição, quando a venda de bebidas alcoólicas foi proibida.",
            "A moda das flappers, mulheres que desafiavam as convenções sociais, estava em alta.",
            "O rádio se tornou um meio de comunicação popular.",
            "Foi o início do período conhecido como 'Os Anos Loucos'.",
            "Teve um grande crescimento econômico e industrial.",
            "A cultura popular foi influenciada pelo cinema e pela música.",
            "A arte e a literatura também passaram por transformações significativas."
        ]
    },
    {
        id: 18,
        resposta: "Violoncelo",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um instrumento musical de cordas.",
            "É maior que o violino e o viola.",
            "É tocado apoiado entre as pernas e com um arco.",
            "Tem quatro cordas afinadas em quintas.",
            "É parte da família das cordas da orquestra.",
            "Produz um som grave e profundo.",
            "É usado tanto em música clássica quanto em outros gêneros musicais.",
            "Requer habilidade e prática para ser tocado.",
            "A caixa de ressonância é feita de madeira, como o abeto e o bordo.",
            "O violoncelo é considerado um dos instrumentos mais expressivos e versáteis."
        ]
    },
    {
        id: 19,
        resposta: "Cleópatra",
        tipo: "Pessoa",
        dicas: [
            "Foi a última rainha do Egito.",
            "É conhecida por sua beleza e poder.",
            "Teve relacionamentos com Júlio César e Marco Antônio.",
            "Desenvolveu uma aliança política com os romanos.",
            "Seu nome significa 'glória do pai'.",
            "Foi uma líder influente no Antigo Egito.",
            "É uma das figuras históricas mais famosas e emblemáticas.",
            "Desempenhou um papel importante na política e na cultura do Egito.",
            "Foi a última governante da dinastia ptolomaica.",
            "Sua morte é associada à serpente venenosa conhecida como áspide."
        ]
    },
    {
        id: 20,
        resposta: "Baleia",
        tipo: "Coisa (Animal)",
        dicas: [
            "É um mamífero marinho.",
            "É conhecida por ser um dos maiores animais do mundo.",
            "Existem diferentes espécies de baleias, como a baleia-azul e a baleia-jubarte.",
            "Possui um corpo alongado e hidrodinâmico.",
            "Alimenta-se principalmente de pequenos organismos, como plâncton e krill.",
            "Faz migrações de longa distância todos os anos.",
            "Pode emitir sons para se comunicar com outros membros do grupo.",
            "É um animal ameaçado de extinção devido à caça indiscriminada.",
            "É um símbolo da conservação dos oceanos e da biodiversidade marinha.",
            "A cauda da baleia, conhecida como nadadeira caudal, é usada para propulsionar o animal na água."
        ]
    },
    {
        id: 21,
        resposta: "Marte",
        tipo: "Lugar",
        dicas: [
            "É o quarto planeta a partir do Sol.",
            "É conhecido como o 'Planeta Vermelho' devido à sua coloração.",
            "É o segundo menor planeta do sistema solar.",
            "Possui uma atmosfera fina composta principalmente de dióxido de carbono.",
            "É o único planeta além da Terra onde já foram encontradas evidências de água líquida.",
            "É alvo de diversas missões espaciais em busca de sinais de vida.",
            "Possui vulcões e cânions gigantescos, como o Monte Olimpo e o Vale Marineris.",
            "Seus polos apresentam calotas de gelo compostas principalmente de água congelada.",
            "As missões Viking, Pathfinder, Spirit, Opportunity e Curiosity já exploraram sua superfície.",
            "A possibilidade de colonização humana em Marte tem sido objeto de estudo e especulação."
        ]
    },
    {
        id: 22,
        resposta: "Jane Austen",
        tipo: "Pessoa",
        dicas: [
            "Foi uma famosa escritora inglesa.",
            "É conhecida por seus romances do século XIX.",
            "Seus livros abordam temas como amor, casamento e classes sociais.",
            "Obras famosas incluem 'Orgulho e Preconceito' e 'Razão e Sensibilidade'.",
            "É considerada uma das maiores escritoras da literatura inglesa.",
            "Seus livros foram publicados anonimamente durante sua vida.",
            "Os romances de Austen foram adaptados para o cinema e a televisão.",
            "Ela retratou com habilidade a sociedade e as convenções da época.",
            "Suas obras continuam populares e influentes até os dias de hoje.",
            "Nasceu em Hampshire, na Inglaterra, em 1775."
        ]
    },
    {
        id: 23,
        resposta: "Fotografia",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É uma técnica de capturar imagens usando luz.",
            "É uma forma de arte e expressão visual.",
            "Foi inventada no século XIX.",
            "Envolve o uso de uma câmera para registrar momentos e cenas.",
            "A palavra 'fotografia' significa 'escrita com luz'.",
            "Existem diferentes tipos de fotografia, como paisagem, retrato e fotografia de moda.",
            "A evolução da tecnologia trouxe a fotografia digital e o surgimento das câmeras de celular.",
            "Fotógrafos famosos incluem Ansel Adams, Annie Leibovitz e Henri Cartier-Bresson.",
            "As fotografias podem ser impressas, exibidas digitalmente ou publicadas em livros e revistas.",
            "A fotografia permite capturar momentos únicos e preservar memórias de forma duradoura."
        ]
    },
    {
        id: 24,
        resposta: "Egito",
        tipo: "Lugar",
        dicas: [
            "É um país localizado no nordeste da África.",
            "Possui uma rica história e uma das civilizações mais antigas do mundo.",
            "É conhecido pelos monumentos e pelas pirâmides do Antigo Egito.",
            "O rio Nilo atravessa o país.",
            "Cairo é a capital do Egito.",
            "A Esfinge e as pirâmides de Gizé são atrações turísticas famosas.",
            "O Antigo Egito foi governado por faraós.",
            "A cultura egípcia inclui mitologia, arte, arquitetura e escrita hieroglífica.",
            "O Egito é lar de importantes sítios arqueológicos, como o Vale dos Reis e o Templo de Luxor.",
            "O turismo desempenha um papel importante na economia do país."
        ]
    },
    {
        id: 25,
        resposta: "1939",
        tipo: "Ano",
        dicas: [
            "É um ano do século XX.",
            "Ficou marcado pelo início da Segunda Guerra Mundial.",
            "A Alemanha nazista invadiu a Polônia, dando início ao conflito.",
            "O Reino Unido e a França declararam guerra à Alemanha.",
            "Foi o ano em que ocorreu o início da evacuação de crianças britânicas para áreas rurais durante a guerra.",
            "A máquina de venda automática de café foi patenteada neste ano.",
            "O filme 'O Mágico de Oz' foi lançado.",
            "A escritora Virginia Woolf publicou a obra 'As Ondas'.",
            "A cidade de Barcelona foi bombardeada durante a Guerra Civil Espanhola.",
            "O físico alemão Albert Einstein escreveu uma carta ao presidente dos Estados Unidos, alertando sobre a possibilidade de desenvolvimento de armas nucleares."
        ]
    },
    {
        id: 26,
        resposta: "Abelha",
        tipo: "Coisa (Animal)",
        dicas: [
            "É um inseto.",
            "Desempenha um papel importante na polinização das flores.",
            "Vive em colônias organizadas, com uma rainha e várias operárias.",
            "Produz mel e cera.",
            "Possui um ferrão, que é usado para se defender.",
            "As abelhas são conhecidas por sua comunicação através da dança.",
            "Existem diferentes espécies de abelhas, como a abelha melífera e a abelha carpinteira.",
            "São insetos sociais e trabalham em equipe para manter a colmeia.",
            "As abelhas são vitais para a polinização de plantas e para a preservação da biodiversidade.",
            "A colônia de abelhas é composta por uma rainha, zangões e operárias."
        ]
    },
    {
        id: 27,
        resposta: "Amazônia",
        tipo: "Lugar",
        dicas: [
            "É a maior floresta tropical do mundo.",
            "Localiza-se na América do Sul, abrangendo vários países, incluindo Brasil, Peru e Colômbia.",
            "É conhecida pela sua biodiversidade e importância para o equilíbrio climático.",
            "É lar de diversas espécies de animais e plantas.",
            "A floresta abriga comunidades indígenas que têm uma relação ancestral com o ambiente.",
            "A exploração ilegal de madeira e a expansão agrícola representam ameaças à Amazônia.",
            "A região enfrenta desafios relacionados à preservação ambiental e à sustentabilidade.",
            "A Amazônia é um importante foco de pesquisas científicas e estudos sobre a conservação da natureza.",
            "É considerada o pulmão do mundo, devido à sua capacidade de absorver dióxido de carbono e liberar oxigênio.",
            "A preservação da Amazônia é fundamental para a saúde do planeta e o combate às mudanças climáticas."
        ]
    },
    {
        id: 28,
        resposta: "Cachorro",
        tipo: "Coisa (Animal)",
        dicas: [
            "É um mamífero domesticado e considerado o melhor amigo do ser humano.",
            "Existem diversas raças de cachorros, com diferentes tamanhos e características.",
            "São conhecidos por sua lealdade e capacidade de estabelecer vínculos afetivos com seus donos.",
            "São animais sociais e gostam de interagir com outros cães e pessoas.",
            "Podem ser treinados para realizar várias tarefas, como guardar a casa, auxiliar pessoas com deficiência e participar de competições esportivas.",
            "Requerem cuidados, como alimentação adequada, exercícios e visitas regulares ao veterinário.",
            "Os cachorros têm habilidades sensoriais superiores, como olfato aguçado e audição apurada.",
            "São animais brincalhões e adoram receber carinho e atenção.",
            "Existem organizações e instituições que trabalham em prol do bem-estar dos cachorros, como abrigos e resgates de animais de rua.",
            "Ter um cachorro como animal de estimação traz muitos benefícios, como companheirismo e redução do estresse."
        ]
    },
    {
        id: 29,
        resposta: "Telescópio",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um instrumento óptico usado para observar objetos distantes no espaço.",
            "Permite a ampliação e a análise de corpos celestes, como estrelas, planetas e galáxias.",
            "Existem diferentes tipos de telescópios, como o refrator e o refletor.",
            "Astrônomos profissionais e amadores utilizam telescópios para realizar pesquisas e estudos do universo.",
            "Os telescópios espaciais, como o Hubble, são colocados em órbita para evitar a interferência atmosférica.",
            "O desenvolvimento da tecnologia permitiu a criação de telescópios cada vez mais avançados e precisos.",
            "Os telescópios captam a luz ou outras formas de radiação emitida pelos corpos celestes.",
            "O telescópio de Galileu foi um dos primeiros telescópios utilizados para observação astronômica.",
            "A astronomia moderna depende fortemente do uso de telescópios para expandir nosso conhecimento do universo.",
            "Telescópios terrestres são instalados em observatórios astronômicos ao redor do mundo."
        ]
    },
    {
        id: 30,
        resposta: "William Shakespeare",
        tipo: "Pessoa",
        dicas: [
            "Foi um famoso escritor e dramaturgo inglês.",
            "É considerado um dos maiores escritores da literatura mundial.",
            "Suas peças teatrais incluem 'Romeu e Julieta', 'Hamlet' e 'Macbeth'.",
            "Contribuiu para o desenvolvimento do teatro elisabetano.",
            "Shakespeare escreveu sonetos, poemas e peças em diversos gêneros, como tragédia, comédia e romance.",
            "Suas obras abordam temas universais, como amor, poder, traição e ambição.",
            "Muitas expressões e palavras usadas atualmente têm origem nas obras de Shakespeare.",
            "Acredita-se que Shakespeare tenha nascido em Stratford-upon-Avon, Inglaterra, em 1564.",
            "Seu legado literário continua a ser estudado, encenado e apreciado em todo o mundo.",
            "Shakespeare é conhecido como o 'Bardo de Avon' e é uma figura icônica da literatura inglesa."
        ]
    },
    {
        id: 31,
        resposta: "Bicicleta",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um veículo de transporte pessoal.",
            "Possui duas rodas, pedais e guidão.",
            "É movida pela força humana ao pedalar.",
            "É um meio de transporte ecológico e saudável.",
            "A bicicleta é amplamente utilizada para lazer, esporte e locomoção.",
            "Existem diferentes tipos de bicicletas, como mountain bikes, bicicletas de estrada e bicicletas urbanas.",
            "A bicicleta foi inventada no século XIX.",
            "Promove a atividade física e contribui para a melhoria da saúde e do condicionamento físico.",
            "As bicicletas podem ser equipadas com acessórios, como cestas, faróis e suportes para transporte.",
            "Há competições esportivas, como o ciclismo de estrada e o ciclismo de montanha, que utilizam a bicicleta como modalidade."
        ]
    },
    {
        id: 32,
        resposta: "Avião",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um meio de transporte que permite voar.",
            "É uma das invenções mais importantes da história da humanidade.",
            "Existem diferentes tipos de aviões, como jatos, monomotores e bimotores.",
            "É utilizado para transporte de passageiros, carga, resgate e exploração aérea.",
            "Os aviões são projetados para voar através da aerodinâmica e do princípio da sustentação.",
            "O avião comercial revolucionou as viagens de longa distância e encurtou o tempo de deslocamento.",
            "Asas, motores e fuselagem são algumas das partes principais de um avião.",
            "A indústria aeronáutica é uma área de desenvolvimento tecnológico e inovação contínua.",
            "A segurança é uma prioridade na aviação, com procedimentos rigorosos e regulamentações de segurança.",
            "O voo inaugural do primeiro avião controlado foi realizado pelos irmãos Wright em 1903."
        ]
    },
    {
        id: 33,
        resposta: "Marilyn Monroe",
        tipo: "Pessoa",
        dicas: [
            "Foi uma famosa atriz de cinema americana.",
            "É considerada um ícone de beleza e estilo.",
            "Estrelou filmes como 'O Pecado Mora ao Lado' e 'Quanto Mais Quente Melhor'.",
            "Sua imagem icônica inclui o vestido branco esvoaçante em 'O Pecado Mora ao Lado'.",
            "Monroe também foi cantora e modelo.",
            "Sua vida pessoal e sua morte prematura contribuíram para o mistério e a fascinação em torno de sua figura.",
            "Nasceu em 1926 em Los Angeles, Califórnia.",
            "Marilyn Monroe é lembrada como um símbolo de feminilidade, sensualidade e vulnerabilidade.",
            "Sua contribuição para a indústria do entretenimento e sua influência cultural continuam a ser reconhecidas até hoje.",
            "É uma das atrizes mais famosas e icônicas da história do cinema."
        ]
    },
    {
        id: 34,
        resposta: "Cafeteira",
        tipo: "Coisa (Objeto)",
        dicas: [
            "É um eletrodoméstico usado para preparar café.",
            "Existem diferentes tipos de cafeteiras, como as de filtro, espresso e cápsulas.",
            "As cafeteiras de filtro utilizam papel ou metal para filtrar o café moído.",
            "As cafeteiras espresso produzem um café mais concentrado e são comuns em cafeterias.",
            "As cafeteiras de cápsulas utilizam cápsulas pré-dosadas para fazer o café.",
            "O café é uma bebida amplamente consumida em todo o mundo e a cafeteira é um utensílio essencial para sua preparação.",
            "As cafeteiras modernas possuem recursos como programação, controle de intensidade do café e vaporizador para leite.",
            "O cheiro do café sendo preparado na cafeteira é reconfortante para muitas pessoas.",
            "A preparação do café envolve a moagem dos grãos, a escolha da quantidade e a seleção da temperatura e tempo de extração.",
            "A cafeteira facilita o processo de fazer café, tornando-o mais rápido e conveniente."
        ]
    },
    {
        id: 35,
        resposta: "Vincent van Gogh",
        tipo: "Pessoa",
        dicas: [
            "Foi um famoso pintor holandês.",
            "É considerado um dos maiores artistas da história da arte.",
            "Sua obra é caracterizada por pinceladas intensas, cores vibrantes e temas emocionais.",
            "Pintou obras icônicas, como 'A Noite Estrelada' e 'Girassóis'.",
            "Van Gogh enfrentou desafios pessoais e lutou contra problemas de saúde mental ao longo de sua vida.",
            "Sua arte ganhou reconhecimento após sua morte e influenciou gerações posteriores de artistas.",
            "Van Gogh nasceu em 1853 na Holanda.",
            "Seu estilo artístico é associado ao pós-impressionismo.",
            "Suas pinturas retratam paisagens, retratos, naturezas-mortas e autorretratos.",
            "Van Gogh deixou um legado duradouro na história da arte, com seu trabalho sendo exibido em museus e apreciado em todo o mundo."
        ]
    },
    {
        id: 36,
        resposta: "Internet",
        tipo: "Coisa (Conceito/Tecnologia)",
        dicas: [
            "É uma rede global de computadores interconectados.",
            "Permite a troca de informações e o acesso a recursos digitais.",
            "A internet revolucionou as comunicações e a forma como as pessoas acessam informações.",
            "É uma fonte de conhecimento, entretenimento e comunicação em todo o mundo.",
            "A internet permite a criação de sites, o envio de e-mails, a realização de videochamadas e o compartilhamento de arquivos.",
            "Tecnologias como Wi-Fi e banda larga facilitam o acesso à internet.",
            "A segurança online e a proteção de dados são preocupações importantes relacionadas à internet.",
            "As redes sociais, os aplicativos de mensagens e as plataformas de compartilhamento de conteúdo são parte integrante da experiência da internet.",
            "A internet continua a evoluir e se expandir, com o desenvolvimento de tecnologias como a Internet das Coisas e a inteligência artificial.",
            "É um meio poderoso de conectar pessoas, ideias e informações em todo o mundo."
        ]
    },
    {
        id: 37,
        resposta: "Arco-íris",
        tipo: "Coisa (Fenômeno Natural)",
        dicas: [
            "É um fenômeno óptico que ocorre após a chuva, quando a luz solar é refratada e refletida pelas gotas de água no ar.",
            "É composto por faixas coloridas, geralmente em uma sequência de sete cores: vermelho, laranja, amarelo, verde, azul, anil e violeta.",
            "O arco-íris forma um semicírculo no céu.",
            "Pode ser observado quando o sol está atrás do observador e as gotas de chuva estão na direção oposta.",
            "É um símbolo de esperança, beleza e renovação em várias culturas.",
            "O arco-íris também pode ser observado em cachoeiras, fontes de água e em condições especiais de luz e umidade.",
            "Cientificamente, o arco-íris é explicado pela dispersão e refração da luz branca em diferentes comprimentos de onda.",
            "Fotografar um arco-íris pode ser um desafio devido às condições ideais de iluminação e posicionamento.",
            "Embora um arco-íris completo seja mais comum, às vezes é possível ver arcos parciais ou até mesmo duplos."
        ]
    },
    {
        id: 38,
        resposta: "Futebol",
        tipo: "Coisa (Esporte)",
        dicas: [
            "É um esporte praticado em todo o mundo.",
            "Envolve duas equipes de onze jogadores cada.",
            "O objetivo é marcar gols ao colocar a bola na meta adversária.",
            "O futebol é jogado em um campo retangular com uma bola.",
            "Os jogadores usam seus pés para chutar a bola e marcar gols.",
            "É um esporte de equipe que requer habilidades técnicas, táticas e condicionamento físico.",
            "O futebol é regido por regras estabelecidas pela Federação Internacional de Futebol (FIFA).",
            "A Copa do Mundo é o torneio mais prestigioso do futebol, realizado a cada quatro anos.",
            "O esporte é conhecido por seu impacto cultural, paixão dos torcedores e rivalidades entre clubes.",
            "Alguns jogadores de futebol se tornaram ícones globais e alcançaram grande fama e sucesso."
        ]
    },
    {
        id: 39,
        resposta: "Grande Muralha da China",
        tipo: "Lugar",
        dicas: [
            "É uma estrutura de defesa histórica localizada na China.",
            "É uma das maravilhas do mundo antigo.",
            "A Grande Muralha se estende por vários milhares de quilômetros.",
            "Foi construída ao longo de várias dinastias chinesas para proteger o império de invasões.",
            "A construção da muralha envolveu trabalho manual intenso e materiais como pedra, tijolo e terra compactada.",
            "A Grande Muralha é um importante destino turístico e um símbolo da China.",
            "Oferece vistas panorâmicas e uma conexão com a história e cultura chinesas.",
            "A muralha é uma das estruturas mais longas já construídas pelo ser humano.",
            "É reconhecida como Patrimônio Mundial da UNESCO desde 1987.",
            "A Grande Muralha da China é um testemunho da engenhosidade e da habilidade arquitetônica dos antigos chineses."
        ]
    },
    {
        id: 40,
        resposta: "Estátua da Liberdade",
        tipo: "Lugar",
        dicas: [
            "É um famoso monumento localizado nos Estados Unidos.",
            "Foi um presente dado pela França aos Estados Unidos.",
            "A estátua representa a liberdade e foi inaugurada em 1886.",
            "Está localizada na Ilha da Liberdade, em Nova York.",
            "É um símbolo icônico dos Estados Unidos e da cidade de Nova York.",
            "A estátua é feita de cobre e possui uma estrutura de ferro.",
            "A Estátua da Liberdade segura uma tocha na mão direita e uma tabuleta com a data da Declaração de Independência dos Estados Unidos na mão esquerda.",
            "É um dos destinos turísticos mais populares do mundo, atraindo milhões de visitantes anualmente.",
            "Os visitantes podem subir até a coroa ou visitar o pedestal da estátua para obter vistas panorâmicas da cidade.",
            "A Estátua da Liberdade representa os valores de liberdade, democracia e acolhimento aos imigrantes."
        ]
    },
    {
        id: 41,
        resposta: "Robô",
        tipo: "Coisa (Objeto/Tecnologia)",
        dicas: [
            "É uma máquina programável capaz de realizar tarefas automaticamente.",
            "Os robôs são amplamente utilizados em várias áreas, como indústria, medicina, exploração espacial e entretenimento.",
            "Podem ter formas humanoides, como robôs humanóides, ou serem projetados para fins específicos.",
            "Alguns robôs são controlados remotamente, enquanto outros possuem inteligência artificial para tomar decisões autônomas.",
            "Os robôs são projetados para aumentar a eficiência, a precisão e a segurança em várias tarefas.",
            "Existem robôs industriais que realizam trabalhos repetitivos em linhas de produção, robôs cirúrgicos que auxiliam em procedimentos médicos e robôs de limpeza doméstica.",
            "A inteligência artificial e a aprendizagem de máquina têm impulsionado avanços na capacidade dos robôs de interagir e se adaptar ao ambiente.",
            "O desenvolvimento de robôs humanoides tem como objetivo criar máquinas que possam se assemelhar e interagir de forma semelhante aos seres humanos.",
            "A robótica é um campo de estudo em constante evolução, com o objetivo de criar robôs cada vez mais avançados e versáteis."
        ]
    },
    {
        id: 42,
        resposta: "Harry Potter",
        tipo: "Pessoa (Personagem Fictício)",
        dicas: [
            "É um personagem fictício protagonista de uma série de livros e filmes.",
            "Foi criado pela escritora britânica J.K. Rowling.",
            "Harry Potter é um jovem bruxo com uma cicatriz em forma de raio na testa.",
            "Ele é conhecido por estudar na escola de magia e bruxaria de Hogwarts.",
            "A série de livros e filmes narra as aventuras de Harry Potter e seus amigos.",
            "Harry Potter tem como melhores amigos Hermione Granger e Ron Weasley.",
            "Ele enfrenta o vilão Lord Voldemort ao longo da história.",
            "A série de livros vendeu milhões de cópias em todo o mundo e foi adaptada para o cinema com grande sucesso.",
            "Os livros e filmes de Harry Potter se tornaram uma das franquias mais populares e influentes da cultura pop.",
            "Harry Potter é um símbolo de coragem, amizade e magia para muitos fãs ao redor do mundo."
        ]
    },
    {
        id: 43,
        resposta: "Taj Mahal",
        tipo: "Lugar",
        dicas: [
            "É um famoso mausoléu localizado na Índia.",
            "Foi construído no século XVII pelo imperador Shah Jahan.",
            "O Taj Mahal está situado na cidade de Agra, às margens do rio Yamuna.",
            "É considerado um dos mais belos exemplos da arquitetura mogol.",
            "O mausoléu foi construído em homenagem à esposa do imperador, Mumtaz Mahal.",
            "O Taj Mahal é feito de mármore branco e possui detalhes decorativos elaborados.",
            "É um Patrimônio Mundial da UNESCO desde 1983.",
            "O monumento é conhecido por sua simetria perfeita e pela beleza de seus jardins.",
            "É um dos destinos turísticos mais visitados da Índia e um símbolo do amor eterno.",
            "Ao amanhecer e ao entardecer, o Taj Mahal exibe diferentes tonalidades, criando uma experiência visual deslumbrante."
        ]
    },
    {
        id: 44,
        resposta: "Império Romano",
        tipo: "Lugar",
        dicas: [
            "Foi um dos maiores impérios da história.",
            "Durou mais de 500 anos, começando no século I a.C. e terminando no século V d.C.",
            "O Império Romano teve sua capital inicialmente em Roma e, posteriormente, em Constantinopla.",
            "Abrangeu vastas áreas da Europa, norte da África e parte do Oriente Médio.",
            "O império foi conhecido por seu sistema político, engenharia avançada, lei e ordem, e cultura influente.",
            "Roma deixou um legado duradouro em áreas como direito, arquitetura, literatura, língua e organização política.",
            "A sociedade romana era dividida em classes sociais, com os imperadores exercendo poder político e militar.",
            "O Império Romano enfrentou uma série de desafios, incluindo invasões bárbaras e problemas econômicos internos.",
            "O declínio do império foi marcado por instabilidade política, divisões territoriais e eventos como a queda de Roma em 476 d.C.",
            "Apesar do seu fim como um império unificado, a influência romana e sua cultura continuaram a se espalhar e influenciar outras civilizações ao longo dos séculos."
        ]
    },
    {
        id: 45,
        resposta: "Odisseia",
        tipo: "Coisa (Obra Literária)",
        dicas: [
            "É um dos grandes épicos da literatura grega antiga.",
            "A 'Odisseia' é atribuída ao poeta grego Homero.",
            "A obra narra a jornada de Ulisses (também conhecido como Odisseu) de volta para casa após a Guerra de Troia.",
            "Ulisses enfrenta diversos desafios e perigos em sua jornada, incluindo encontros com criaturas mitológicas e deuses.",
            "A 'Odisseia' é composta por 24 cantos e é considerada uma das obras mais importantes da literatura ocidental.",
            "A obra aborda temas como heroísmo, honra, astúcia, lealdade e o retorno ao lar.",
            "É uma fonte rica de mitologia grega e oferece insights sobre a cultura e os valores da época.",
            "A 'Odisseia' influenciou muitos outros trabalhos literários ao longo dos séculos.",
            "É amplamente estudada e apreciada até os dias de hoje, sendo considerada uma obra-prima da literatura mundial.",
            "A história de Ulisses e sua jornada épica cativa leitores de todas as idades e continua a inspirar novas interpretações e adaptações."
        ]
    },
    {
        id: 46,
        resposta: "Florença",
        tipo: "Lugar",
        dicas: [
            "É uma cidade italiana localizada na região da Toscana.",
            "Florença é considerada o berço do Renascimento italiano.",
            "A cidade foi o centro cultural, artístico e econômico da Europa durante o século XIV e XV.",
            "É conhecida por sua arquitetura renascentista, como a Catedral de Santa Maria del Fiore e o Palazzo Vecchio.",
            "Florença abriga uma das mais importantes galerias de arte do mundo, a Galleria degli Uffizi.",
            "Grandes artistas renascentistas, como Leonardo da Vinci, Michelangelo e Botticelli, deixaram um legado artístico significativo em Florença.",
            "O rio Arno corta a cidade, proporcionando vistas pitorescas e charme adicional.",
            "Florença é também famosa por sua culinária, incluindo pratos como a Bistecca alla Fiorentina e o gelato italiano.",
            "É um destino turístico popular devido à sua rica história, arte e beleza arquitetônica.",
            "Florença continua a ser um importante centro cultural e artístico, atraindo visitantes de todo o mundo."
        ]
    },
    {
        id: 47,
        resposta: "Grécia Antiga",
        tipo: "Lugar",
        dicas: [
            "Foi uma das civilizações mais influentes da história.",
            "A Grécia Antiga estava localizada na península grega e nas ilhas do mar Egeu.",
            "Conhecida por suas contribuições para a filosofia, arte, ciência, política e literatura.",
            "A democracia ateniense é considerada uma das primeiras formas de governo democrático.",
            "Grandes filósofos, como Sócrates, Platão e Aristóteles, surgiram na Grécia Antiga.",
            "A cidade-estado de Atenas era um centro cultural e intelectual importante.",
            "Os Jogos Olímpicos, que começaram na Grécia Antiga, foram uma das maiores celebrações esportivas da época.",
            "A mitologia grega, com deuses e heróis, também se originou na Grécia Antiga.",
            "A arquitetura grega antiga, incluindo os templos, é conhecida por seu estilo elegante e proporções harmônicas.",
            "A guerra entre Esparta e Atenas, conhecida como Guerra do Peloponeso, foi um conflito significativo na história da Grécia Antiga."
        ]
    },
    {
        id: 48,
        resposta: "Girafa",
        tipo: "Animal",
        dicas: [
            "É um mamífero de pescoço longo e pernas compridas.",
            "As girafas são os animais terrestres mais altos, podendo atingir alturas de até 5,5 metros.",
            "São encontradas em partes da África, principalmente em savanas e áreas arborizadas.",
            "As girafas possuem manchas irregulares em sua pelagem, que ajudam na camuflagem.",
            "Possuem uma língua comprida e preêhensil, que usam para comer folhas e brotos de árvores.",
            "As girafas são herbívoras e se alimentam principalmente de folhagens.",
            "Apesar de seu tamanho, as girafas são animais pacíficos e geralmente evitam conflitos.",
            "Os machos possuem chifres ósseos, chamados de ossicones, que ajudam na defesa e competição por fêmeas.",
            "As girafas são conhecidas por sua caminhada graciosa e sua postura única ao se alimentar ou beber água.",
            "São consideradas espécies vulneráveis devido à caça furtiva e à perda de habitat."
        ]
    },
    {
        id: 49,
        resposta: "Ano-Novo",
        tipo: "Ano",
        dicas: [
            "É a celebração do início de um novo ano.",
            "É comemorado em muitos países ao redor do mundo na noite de 31 de dezembro para 1º de janeiro.",
            "O Ano-Novo marca o fim do ano civil e o começo do próximo.",
            "As comemorações incluem festas, fogos de artifício, jantares especiais e reuniões familiares.",
            "É tradicional fazer resoluções de Ano-Novo, definindo metas e objetivos para o próximo ano.",
            "Em alguns países, como o Brasil, é costume pular sete ondas no mar à meia-noite para trazer sorte.",
            "Em Nova York, a queda da bola na Times Square é um evento icônico de Ano-Novo.",
            "Desejar 'Feliz Ano-Novo' é uma expressão comum durante as festividades.",
            "O Ano-Novo é uma oportunidade de começar de novo, deixar o passado para trás e ter esperanças para o futuro.",
            "Em muitas culturas, é uma ocasião para reunir-se com entes queridos e celebrar o recomeço."
        ]
    },
    {
        id: 50,
        resposta: "Montanha-russa",
        tipo: "Coisa",
        dicas: [
            "É uma atração popular em parques de diversões.",
            "A montanha-russa é um tipo de brinquedo mecânico que simula uma viagem emocionante em trilhos.",
            "Os trilhos da montanha-russa possuem subidas íngremes, quedas rápidas, curvas fechadas e loopings.",
            "Existem diferentes tipos de montanhas-russas, desde as mais suaves e familiares até as mais extremas e radicais.",
            "É uma experiência que proporciona adrenalina e emoção aos visitantes.",
            "Alguns parques de diversões têm montanhas-russas temáticas, com cenários e narrativas.",
            "A primeira montanha-russa foi construída na Rússia no século XVIII.",
            "Hoje em dia, as montanhas-russas são projetadas com tecnologia avançada e oferecem emoções cada vez mais intensas.",
            "As montanhas-russas têm restrições de altura e idade para garantir a segurança dos visitantes.",
            "Andar de montanha-russa é uma experiência divertida e desafiadora para os amantes de emoções fortes."
        ]
    },
]