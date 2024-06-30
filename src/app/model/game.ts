export class Game {
  id: number;
  title: string;
  developer: string;
  publisher: string;
  launchDate: string;
  genre: string;
  image: string;
  description: string
  constructor(id: number, title: string, developer: string, publisher: string, launchDate: string, genre: string, image: string, description: string) {
    this.id = id;
    this.title = title;
    this.developer = developer;
    this.publisher = publisher;
    this.launchDate = launchDate;
    this.genre = genre;
    this.image = image;
    this.description = description;
  }

  public static clone(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre, game.image, game.description);
    return g;
  }

  public static toWS(game: Game) {
    let g: Game = new Game(game.id, game.title, game.developer, game.publisher, game.launchDate, game.genre, game.image, game.description);
    return g;
  }
}
