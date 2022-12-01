import De from "./de";

export default class Gobelet {
  public _valeur: number = 0;
  public _des: De[] = [];

  get valeur(): number {
    return this._valeur;
  }

  set valeur(valeur:number){
    this._valeur = valeur;
  }

  public lancer():number {
    this.valeur = 0;
    this._des.forEach(de => this.valeur += de.lancer());
    return this.valeur;
  }
}
