export default class De {
  public _valeur: number = 0;

  get valeur(): number {
    return this._valeur;
  }

  set valeur(valeur: number) {
    this.valeur = valeur;
  }

  public lancer(): number {
    this.valeur = Math.floor(Math.random() * 6);
    return this.valeur;
  }
}
