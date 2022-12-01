import Gobelet from "./gobelet";

export default class Joueur {
  public _nom!: string;
  public _score: number = 0;

  constructor(nom: string) {
    this.nom = nom;
  }

  set nom(nom: string) {
    this._nom = nom;
  }

  set score(score: number) {
    this._score += score;
  }

  get nom(): string {
    return this._nom;
  }

  get score(): number {
    return this._score;
  }

  public jouer(gobelet: Gobelet): void {
    gobelet.lancer();
  }

  public afficherScore() {
    console.log(`Joueur ${this.nom} a eu ${this.score} points.`);
  }
}
