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
    index_text: 0,
    text_decoration: '',
  },  // Closing "data"
  methods: {
    addTodo: function() {
      this.todo_list.push(this.new_todo);
      // Output in console
      console.log('The updated to-do list with containing the new to-do item is: ' , this.todo_list);
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
    addTodoEnter: function() {
      if(event.key === 'Enter') {
        // Print in console which key you pressed
        console.log(
        `
        You pressed the ${event.key} key.
        `);
        // Adding new to-do item
        this.addTodo();
      }
    },
    strikethroughText: function(todo_item, index_todo) {
      // If the <span> containing the to-do item has the same index as the checked icon that is clicked, then the "strikethrough" class should be added ONLY to that <span> element
      if (this.todo_list.indexOf(todo_item) === index_todo) {
        this.text_decoration = 'strikethrough';
      }
    },
  },  // Closing "methods"
});
