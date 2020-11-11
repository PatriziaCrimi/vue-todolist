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
      {
        todo_item: 'Climbing Mount Everest',
      },
      {
        todo_item: 'Road tripping in the U.S.',
      },
      {
        todo_item: 'Swimming in bioluminescence in the Pacific Ocean',
      },
      {
        todo_item: 'Camping in the Desert',
      },
      {
        todo_item: 'Visiting Nepal',
      },
      {
        todo_item: 'Seeing the Pyramids of Egypt',
      },
      {
        todo_item: 'Walking the Camino de Santiago',
      },
    ],
    new_todo_item: '',
    /*
    index_text: null,
    */
  },  // Closing "data"
  methods: {
    addTodo: function() {
      let new_todo = {
        todo_item: this.new_todo_item,
      };
      this.todo_list.push(new_todo);
      // Output in console
      /*
      console.log('The updated to-do list containing the new to-do item is: ' , this.todo_list);
      */
      console.log(
      `
      The new to-do item is: "${this.new_todo_item}".
      `);
    },
    /*
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
    /*
    strikethroughText: function(index_todo) {
      // If the <span> containing the to-do item has the same index as the checked icon that is clicked, then the "strikethrough" class should be added ONLY to that <span> element
      this.index_text = index_todo;
    },
    */
  },  // Closing "methods"
});
