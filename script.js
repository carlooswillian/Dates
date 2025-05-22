const encontros = {
  fora: {
    acordar: [
      "Café da manhã em uma padaria",
      "Fazer um bate-volta",
      "Dia em búzios",
      "Day use em hotel em Búzios",
      "Passeio de barco",
      "Ir para uma cabana"
    ],
    manha: [
      "Passeio de bicicleta juntos",
      "Passeio na orla",
      "Caminhada nas Palmeiras",
      "Tomar sorvete em uma sorveteria",
      "Passear no shopping",
      "Fazer uma trilha",
      "Ir a um fliperama",
      "Conhecer uma cafeteria nova",
      "Visitar um ponto turístico da cidade",
      "Montar o look um do outro na C&A",
      "Ver a cidade de um mirante"
    ],
    tarde: [
      "Piquenique com comida feita por vocês",
      "Relembrar a noite de carro no foguete",
      "Ir ao cinema",
      "Jantar em um restaurante novo",
      "Assistir o pôr do sol",
      "Tour gastronômico",
      "Comprar uma planta nova e montar arranjos juntos",
      "Ir em uma cervejaria",
      "Fazer brincadeira da compra na Americanas (bebida+snack+doce)",
      "Jantar com tema",
      "Rodízio de pizza",
      "Ir a uma doceria",
      "Jogar sinuca",
      "Ir a um restaurante com jogos de tabuleiro",
      "Experimentar comida internacional"
    ],
    noite: [
      "Ver as estrelas",
      "Ir a um bar com música ao vivo",
      "Ver a lua da praia",
      "Ir a um restaurante na passagem",
      "Ver o nascer do sol"
    ]
  },
  casa: {
    acordar: [
      ""
    ],
    manha: [
      "Fazer uma cápsula do tempo",
      "Montar um quebra-cabeça",
      "Montar um lego juntos", 
      "Fazer uma cápsula do tempo",
      "Desenhar ou pintar juntos",
      "Escrever uma carta um para o outro",
      "Rever fotos antigas e relembrar histórias",
      "Fazer uma lista de coisas para fazer juntos",
      "Criar vídeos engraçados no TikTok",
      "Fazer um quiz de casal",
      "Tocar uma música juntos",
      "Fazer origamis",
      "Planejar uma próxima viagem",
      "Desenhar sonhos em comum",
      "Assistir vídeos antigos",
      "Montar um lego juntos",
      "Criar uma colagem de sonhos",
      "Inventar um jogo de casal",
      "Treinar uma dancinha do TikTok",
      "Fazer aula online de algo novo",
      "Montar caixas surpresa para datas futuras",
      "Assistir vídeos do casamento juntos"
    ], 
    tarde: [
      "Tomar banho juntos",
      "Noite do fondue",
      "Cozinhar juntos uma receita nova",
      "Acampar na sala",
      "Maratona de série escolhida a dois",
      "Criar um spa em casa",
      "Fazer uma playlist juntos",
      "Brincar de uma trend do TikTok",
      "Fazer um bolo juntos",
      "Fazer um jantar à luz de velas",
      "Usar um brinquedo novo de casal",
      "Pintar camisetas personalizadas",
      "Inventar uma receita do zero",
      "Montar uma noite de petiscos",
      "Noite mexicana com nachos ou tacos",
      "Fazer noite do hambúrguer artesanal",
      "Noite do sushi em casa",
      "Jogo da meia, melhor de 3",
      "Fazer um piquenique no chão da sala",
      "Reprodução de uma aula de culinária"
    ],
    noite: [
      "Jogar videogame de casal",
      "Noite de jogos de tabuleiro",
      "Cantar no karaokê em casa",
      "Lista de desejos mais quentes e começar realizando um",
      "Noite de sorvete com toppings",
      "Noite temática de filmes com fantasia",
      "Noite de vinhos e queijos",
      "Fazer massagem um no outro",
      "Brincar de adedonha",
      "Jogar um jogo de cartas só de casal",
      "Fazer uma noite com vinho, velas aromáticas e música", 
      "Tomar uma garrafa de vinho, conversar sobre a vida, porém pelados" 
    ]
  },
  embarque: [
    "Assistir o mesmo filme e fazer vídeo chamada",
    "Jogar um jogo online juntos",
    "Gravar um vídeo surpresa contando uma lembrança",
    "Ler a Bíblia juntos por chamada",
    "Escrever cartas digitais de amor (e ler um para o outro)",
    "Planejar juntos um fim de semana quando você voltar",
    "Fazer uma lista de sonhos e metas juntos",
    "Compartilhar fotos que geram lembranças",
    "Jogar show do milhão",
    "Fazer uma playlist personalizada e ouvir juntos",
    "Tomar banho juntos",
    "Assistir uma série e vídeo chamada"
  ]
};

function gerarEncontro(tipo) {
  const agora = new Date();
  const hora = agora.getHours();
  let categoria = "";

  if (tipo === "embarque") {
    const lista = encontros.embarque;
    exibirMensagem(lista[Math.floor(Math.random() * lista.length)]);
    return;
  }

  if (hora < 9) categoria = "acordar";
  else if (hora < 12) categoria = "manha";
  else if (hora < 16.75) categoria = "tarde";
  else categoria = "noite";

  const lista = encontros[tipo][categoria];
  const aleatorio = lista[Math.floor(Math.random() * lista.length)];
  exibirMensagem(aleatorio);
}

function exibirMensagem(texto) {
  const msg = document.getElementById("mensagem");
  msg.textContent = texto;
}
