import De from "./de";

export default class Gobelet {
  public _valeur: number = 0;
  public _des: De[] = [];

  get valeur(): number {
    return this._valeur;
  }

  get des():De[]{
    return this._des;
  }

  set valeur(valeur: number) {
    this._valeur = valeur;
  }

  set des(des:De[]){
    des.forEach(de=> this._des.push(de));
  }

  public lancer(): number {
    this.valeur = 0;
    this._des.forEach((de) => (this.valeur += de.lancer()));
    return this.valeur;
  }

  public afficherScore(): void {
    this._des.forEach((de) => console.log(de._valeur));
  }
}
