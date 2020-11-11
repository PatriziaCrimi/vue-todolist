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
        description: 'Climbing Mount Everest',
        text_decoration: '',
      },
      {
        description: 'Skydiving in New Zealand',
        text_decoration: '',
      },
      {
        description: 'Road tripping the U.S.A.',
        text_decoration: '',
      },
      {
        description: 'Swimming in bioluminescence in the Pacific Ocean',
        text_decoration: '',
      },
      {
        description: 'Camping in the Desert',
        text_decoration: '',
      },
      {
        description: 'Visiting Nepal',
        text_decoration: '',
      },
      {
        description: 'Seeing the Pyramids of Egypt',
        text_decoration: '',
      },
      {
        description: 'Walking the Camino de Santiago',
        text_decoration: '',
      },
    ],
    new_todo_description: '',
  },  // Closing "data"
  methods: {
    addTodo: function() {
      let new_todo = {
        description: this.new_todo_description,
      };
      this.todo_list.push(new_todo);
      // Output in console
      console.log(
      `
      The new to-do item is: "${this.new_todo_description}".
      `);
      console.log('\n The updated to-do list containing the new to-do item is: \n\n');
      this.todo_list.forEach((item) => {
        console.log(`       ${item.description}`);
      });
    },
    removeTodo: function(index_todo) {
      this.todo_list.splice(index_todo, 1);
      // Output in console
      console.log('\n The updated to-do list without the removed to-do item is: \n\n');
      this.todo_list.forEach((item) => {
        console.log(`       ${item.description}`);
      });
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
    strikethroughText: function(index_todo) {
      this.todo_list[index_todo].text_decoration = 'strikethrough';
    },
  },  // Closing "methods"
});
