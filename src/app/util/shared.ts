import { Game } from '../model/game';
import { User } from '../model/user';
import { Constants } from './constants';

export class Shared {
  constructor() {}


  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.INIT) != null) {
      return;
    }
    let g1 = new Game(0, "Persona 4 Golden", "ATLUS", "SEGA", "09/12/2008", "JRPG", "assets/resources/images/cover/persona-4-golden.jpg", "A coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.")
    let g2 = new Game(1, "Pizza Tower", "Tour De Pizza", "Tour De Pizza", "26/01/2023", "Plataforma", "assets/resources/images/cover/pizza-tower.jpg", "Pizza Tower is a fast paced 2D platformer inspired by the Wario Land series, with an emphasis on movement, exploration and score attack. Featuring highly stylized pixel art inspired by the cartoons from the '90s, and a highly energetic soundtrack.")
    let g3 = new Game(2, "Phoenix Wright: Ace Attorney", "Capcom", "Capcom", "11/10/2001", "Aventura", "assets/resources/images/cover/phoenix-wright-ace-attorney.jpg", "Torne-se Phoenix Wright e experimente a emoção da batalha lutando para salvar seus clientes inocentes no tribunal. Jogue todos os 14 episódios, cobrindo os três primeiros jogos, em uma bela coleção.")
    let g4 = new Game(3, "The Legend of Zelda: Tears of the Kingdom", "Nintendo", "Nintendo", "12/05/2023", "Ação/Aventura", "assets/resources/images/cover/the-legend-of-zelda-tears-of-the-kingdom.jpg", "Nesta continuação de The Legend of Zelda: Breath of the Wild, você decidirá seu próprio caminho pelas extensas paisagens de Hyrule e pelas misteriosas ilhas flutuantes nos vastos céus. Será que você conseguirá aproveitar o poder das novas habilidades de Link para lutar contra as forças malévolas que ameaçam o reino?")
    let g5 = new Game(4, "Tales of Arise", "Bandai Namco", "Bandai Namco", "09/09/2021", "JRPG", "assets/resources/images/cover/tales-of-arise.jpg", "300 anos de tirania. Uma máscara misteriosa. Dor e memórias perdidas. Empunhe a Espada Flamejante e se una a uma jovem intocável para enfrentar os opressores. Viva uma história de libertação com personagens caprichados nos gráficos de nova geração!")
    let g6 = new Game(5, "Devil May Cry 5", "CAPCOM", "CAPCOM", "07/03/2019", "Ação", "assets/resources/images/cover/devil-may-cry-5.jpg", "O melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando.")
    let g7 = new Game(6, "DRAGON QUEST XI S: Echoes of an Elusive Age", "Square Enix", "Square Enix", "04/12/2020", "JRPG", "assets/resources/images/cover/dragon-quest-xi.jpg", "A Definitive Edition inclui o aclamado DRAGON QUEST XI, além de cenários adicionais, trilha sonora orquestrada, modo 2D e muito mais! Sendo fã de longa data ou um novo aventureiro, esta é a experiência suprema de DQXI.")
    let g8 = new Game(7, "ELDEN RING", "FromSoftware", "Bandai Namco", "24/02/2022", "RPG", "assets/resources/images/cover/elden-ring.jpg", "O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.")
    let g9 = new Game(8, "Hi-Fi RUSH", "Tango Gameworks", "Tango Gameworks", "25/01/2023", "Ação", "assets/resources/images/cover/hi-fi-rush.jpg", "Sinta a batida enquanto o aspirante a estrela Chai e seu inesperado time de aliados lutam contra uma megacorporação maligna usando um estrondoso combate ritmado! Da Tango Gameworks, chega agora Hi-Fi RUSH, um novo jogo de ação em que o mundo entra em sincronia com a música!")
    let g10 = new Game(9, "Animal Crossing: New Horizons", "Nintendo", "Nintendo", "20/03/2020", "Simulação", "assets/resources/images/cover/animal-crossing-new-horizons.jpg", "Escape para uma ilha deserta e crie o seu próprio paraíso enquanto explora, cria e customiza em Animal Crossing: New Horizons. A sua ilha traz uma variedade incrível de recursos naturais que podem ser usados para criar de tudo, desde objetos para o seu conforto a ferramentas. Você pode caçar insetos ao amanhecer, decorar o seu paraíso durante o dia ou desfrutar do pôr do sol na praia enquanto pesca no oceano. A hora do dia e as estações do ano correspondem à realidade, então aproveite a oportunidade de conferir a sua ilha a cada dia para encontrar novas surpresas durante o ano todo.")
    let g11 = new Game(10, "Resident Evil 4", "CAPCOM", "CAPCOM", "23/03/2023", "Survival Horror", "assets/resources/images/cover/resident-evil-4.jpg", "Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.")
    let g12 = new Game(11, "Yakuza 0", "Ryu Ga Gotoku Studio", "SEGA", "01/10/2018", "Ação", "assets/resources/images/cover/yakuza-0.jpg", "SEGA’s legendary Japanese series finally comes to PC. Fight like hell through Tokyo and Osaka as junior yakuza Kiryu and Majima. Take a front row seat to 1980s life in Japan in an experience unlike anything else in video gaming, with uncapped framerates and 4K resolutions. A legend is born.")
    let g13 = new Game(12, "Danganronpa V3", "Spike Chunsoft", "Spike Chunsoft", "26/09/2017", "Visual Novel", "assets/resources/images/cover/danganronpa-v3.jpg", "Um novo elenco de 16 personagens é aprisionado em uma escola. Lá, alguns matarão, alguns morrerão e alguns serão punidos. Reimagine o que você pensava que a investigação de ritmo acelerado e alto risco era enquanto investiga casos de assassinatos perversos e condena seus novos")
    let g14 = new Game(13, "Splatoon 3", "Nintendo", "Nintendo", "99/09/2022", "Tiro em Terceira Pessoa", "assets/resources/images/cover/splatoon-3.jpg", "Entre em batalhas de 4 contra 4* neste jogo de tiro de ação colorido repleto de estilo e atitude. Como um Inkling parecido com uma lula, cubra rapidamente seus arredores (e oponentes) com tinta usando armas selvagens e nade em meio a sua própria cor para se camuflar e lambuzar. Mergulhe nessa diversão com a família e os amigos e curta em equipe. Foi atingido por um oponente? Sem estresse! O objetivo em Turf War é cobrir o máximo de terreno possível, então reapareça e volte para a ação.")
    let g15 = new Game(14, "Shin Megami Tensei V", "ATLUS", "SEGA", "11/11/2021", "JRPG", "assets/resources/images/cover/shin-megami-tensei-v.jpg", "Torne-se um poderoso semideus e batalhe em uma Tóquio dizimada pela guerra entre anjos e demônios. Faça novos aliados na sua jornada, participe de combates por turno, recrute centenas de demônios e forje seu próprio caminho para definir o destino do mundo.")

    let games = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15]

    localStorage.setItem(Constants.GAMES_KEY, JSON.stringify(games));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, JSON.stringify(false));
    localStorage.setItem(Constants.LOGGED_USER, "");
    localStorage.setItem(Constants.INIT, "");
  }
}
