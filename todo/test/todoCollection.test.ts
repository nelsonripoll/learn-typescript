import { TodoItem } from "../src/todoItem";
import { TodoCollection } from "../src/todoCollection";

let todos : TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Boss", true)
];

let tasks = new TodoCollection("User", todos);

describe("TodoCollection read operations", () => {
    it("should be instance of TodoCollection", () => {
        expect(tasks).toBeInstanceOf(TodoCollection);
    });

    it("should return TodoItem by Id", () => {
        let task = tasks.getTodoById(1);

        expect(task).toBeInstanceOf(TodoItem);

        expect(task.id).toBe(1);
        expect(task.task).toBe("Buy Flowers");
        expect(task.complete).toBeFalsy();

        expect(task).toBe(todos[0]);
    });

    it("should return ItemCounts", () => {
        expect(tasks.getItemCounts()).toEqual({ total: 4, incomplete: 3});
    });

    it("should return array of incomplete TodoItems", () => {
        let tasksArr = tasks.getTodoItems();

        let expected = [
            new TodoItem(1, "Buy Flowers"),
            new TodoItem(2, "Get Shoes"),
            new TodoItem(3, "Collect Tickets")
        ];

        expect(tasksArr).toEqual(expected);
    });

    it("should return array of all TodoItems", () => {
        let tasksArr = tasks.getTodoItems(true);

        let expected = [
            new TodoItem(1, "Buy Flowers"),
            new TodoItem(2, "Get Shoes"),
            new TodoItem(3, "Collect Tickets"),
            new TodoItem(4, "Call Boss", true)
        ];

        expect(tasksArr).toEqual(expected);
    });
});

describe("TodoCollection create/update/remove operations", () => {
    it("should add new TodoItem and return Id", () => {
        let newTaskId = tasks.addTodo("New Todo Item");
        let itemCounts = tasks.getItemCounts();

        expect(newTaskId).toEqual(5);
        expect(tasks.getItemCounts()).toEqual({ total: 5, incomplete: 4});
    });

    it("should mark TodoItem as complete", () => {
        let tasksArr = tasks.getTodoItems(); // return incomplete items

        tasks.markComplete(tasksArr[0].id, true);

        expect(tasks.getItemCounts()).toEqual({ total: 5, incomplete: 3});

        tasks.markComplete(5, true); // added in previous test

        expect(tasks.getItemCounts()).toEqual({ total: 5, incomplete: 2});
    });

    it("should mark TodoItem as incomplete", () => {
        let tasksArr = tasks.getTodoItems(true); // return all items

        tasks.markComplete(tasksArr[0].id, false);

        expect(tasks.getItemCounts()).toEqual({ total: 5, incomplete: 3});
    });

    it("should delete all completed TodoItems", () => {
        tasks.removeComplete();

        let tasksArr = tasks.getTodoItems(true); // return all items

        let expected = [
            new TodoItem(1, "Buy Flowers"),
            new TodoItem(2, "Get Shoes"),
            new TodoItem(3, "Collect Tickets")
        ];

        expect(tasks.getItemCounts()).toEqual({ total: 3, incomplete: 3});
        expect(tasksArr).toEqual(expected);
    });
});