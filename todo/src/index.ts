import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos : TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoews"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection : TodoCollection = new TodoCollection("Nelson", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);
console.log(`${collection.getItemCounts().incomplete} items to do`);
collection.getTodoItems(true).forEach(item => item.printDetails());
