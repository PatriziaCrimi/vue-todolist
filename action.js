/*ASSIGNMENT
Definire una lista di to-do
e stamparli in pagina in un elenco.
Predisporre un input testuale per aggiungere un nuovo to-do:
al click di un pulsante,
il testo inserito nell'input viene aggiunto alla lista dei to-do.
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
    new_todo: '',
  },  // Closing "data"
  methods: {
    addTodo: function() {
      this.todo_list.push(this.new_todo);
      // Output in console
      console.log('The updated to-do list with the new to-do item is: ' , this.todo_list);
      console.log(
      `
      The new to-do item is: "${this.new_todo}".
      `);
    },
    removeTodo: function(index_todo) {
      this.todo_list.splice(index_todo, 1);
      // Output in console
      console.log('The updated to-do list without the removed to-do item is: ' , this.todo_list , '\n\n');
    },
  },  // Closing "methods"
});
