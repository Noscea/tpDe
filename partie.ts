import Gobelet from "./gobelet";
import Joueur from "./joueur";
import De from "./de";

export default class Partie {
  public _nbTours: number = 1;
  public _joueurs: Joueur[] = [];
  public _gobelet!: Gobelet;

  set nbTours(tours: number) {
    this._nbTours = tours;
  }

  set joueurs(joueurs: Joueur[]) {
    joueurs.forEach((joueur) => this._joueurs.push(joueur));
  }

  set gobelet(gobelet: Gobelet) {
    this._gobelet = gobelet;
  }

  get nbTours(): number {
    return this._nbTours;
  }

  get joueurs(): Joueur[] {
    return this._joueurs;
  }

  get gobelet(): Gobelet {
    return this._gobelet;
  }

  public initialiserPartie(nbJoueurs: number) {
    this.initialiserJoueurs(nbJoueurs);
    this.initialiserGobelet();
    this.initialiserDes(nbJoueurs);
    this.nbTours = nbJoueurs + 1;
  }

  private initialiserJoueurs(nbJoueurs: number) {
    let listeJoueurs: Joueur[] = [];
    for (let index = 0; index < nbJoueurs; index++) {
      let joueur = new Joueur(`Joueur${index + 1}`);
      listeJoueurs.push(joueur);
    }
    this.joueurs = listeJoueurs;
  }

  private initialiserGobelet() {
    this.gobelet = new Gobelet();
  }

  private initialiserDes(nbJoueurs: number) {
    let listeDes: De[] = [];
    for (let index = 0; index < nbJoueurs; index++) {
      let de = new De();
      listeDes.push(de);
    }
    this.gobelet.des = listeDes;
  }

  public lancerPartie() {
    for (let index = 0; index<this.nbTours;index++){
        this.manche();
    }
  }

  private manche() {
    let resultats: number[] = [];
    this.joueurs.forEach((joueur) => {
      joueur.jouer(this.gobelet);
      resultats.push(this.gobelet.valeur);
    });
    const valeurGagnante: number = Math.max(...resultats);
    const gagnantsManche: number[] = resultats.reduce(
      (resultat: number[], valeur: number, index: number) =>
        resultat.concat(valeur === valeurGagnante ? index : []),
      []
    );
    gagnantsManche.forEach((gagnant) => (this.joueurs[gagnant].score += 1));
  }

  public afficherGagnant() {
    let resultats :number[]= [];
    this.joueurs.forEach(joueur => resultats.push(joueur.score))
    const valeurGagnante: number = Math.max(...resultats);
    const gagnantsManche: number[] = resultats.reduce(
        (resultat: number[], valeur: number, index: number) =>
          resultat.concat(valeur === valeurGagnante ? index : []),
        []
      );
    gagnantsManche.forEach(gagnant => console.log(`${this.joueurs[gagnant].nom} a gagné la partie avec ${this.joueurs[gagnant].score} manches remportés !`));
  }
}
