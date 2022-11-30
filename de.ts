export default class De {
    public _valeur!:number;

    get valeur() : number {
        return this._valeur;
    }

    set valeur(valeur:number){
        this.valeur = valeur;
    }

    public lancer() :void {
        this.valeur = Math.floor(Math.random() * 6);
    }
}