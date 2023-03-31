Simon Says
===

**Descrizione:**  
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.  
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o tramite input).  
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

## Sviluppo  
- Aggiunti input, bottone e h1;
- aggiunti due array vuoti;
- creata funzione randomNumber;
- inserita in funzione random che genera numeri unici e li pusha nell'array nunmberRandom;
- stampo in pagina i numeri con view;
- timer e time;
- noView rimuove i numeri dalla pagina dopo 5s;
- i numeri inseriti nell'input vengono salvati in numberUser col click del bottone;
- vengono verificati e stampati fuori quelli corretti;
