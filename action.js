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
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Skydiving in New Zealand',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Road tripping the U.S.A.',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Swimming in bioluminescence in the Pacific Ocean',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Camping in the Desert',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Visiting Nepal',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Seeing the Pyramids of Egypt',
        date: '12/11/2020',
        checked: '',
      },
      {
        description: 'Walking the Camino de Santiago',
        date: '12/11/2020',
        checked: '',
      },
    ],
    new_todo_description: '',
  },  // Closing "data"
  methods: {
    addTodo: function() {
      let new_todo = {
        description: this.new_todo_description,
        date: '12/11/2020',
        checked: '',
      };
      this.todo_list.push(new_todo);
      // Removing text from the input tag
      this.new_todo_description = '',
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
    strikethroughText: function(index_todo) {
      this.todo_list[index_todo].checked = 'strikethrough';
    },
  },  // Closing "methods"
});
