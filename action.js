/*ASSIGNMENT
Definire una lista di to-do
e stamparli in pagina in un elenco.
Predisporre un input testuale per aggiungere un nuovo to-do: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei to-do.
Al click su un item della lista, il to-do viene rimosso.
BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo to-do.
*/

let app = new Vue({
  el: '#root',
  data: {
    todo_list: [
      'Climbing Mount Everest',
      'Road tripping in the U.S.',
      'Swimming in bioluminescence in the Pacific Ocean',
      'Camping in the Desert',
      'Visiting Nepal',
      'Seeing the Pyramids of Egypt',
      'Walking the Camino de Santiago',
    ],
  },  // Closing "data"
  methods: {

  },  // Closing "methods"
});
