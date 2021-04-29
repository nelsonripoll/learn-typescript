import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos : TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoews"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection : TodoCollection = new TodoCollection("Nelson", todos);

let newId : number = collection.addTodo("Go for run");
let todoItem : TodoItem = collection.getTodoById(newId);

todoItem.printDetails();
