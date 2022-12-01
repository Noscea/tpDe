import Partie from "./partie";

const partie = new Partie();

const nbJoueurs: number =4 ;

partie.initialiserPartie(nbJoueurs);
partie.lancerPartie();
partie.afficherGagnant();