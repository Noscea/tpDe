import De from "./de";
import Gobelet from "./gobelet";
import Joueur from "./joueur";

const joueurUn = new Joueur("Alex");
const joueurDeux = new Joueur("François");

const deUn = new De();
const deDeux = new De();

const gobelet = new Gobelet();

gobelet.des = [deUn, deDeux];




console.log(joueurUn.jouer(gobelet));
console.log(joueurDeux.jouer(gobelet));
joueurUn.afficherScore();
joueurDeux.afficherScore();