import { TodoItem } from "../src/todoItem";

describe("TodoItem", () => {
    let task = new TodoItem(1, "New Todo Item")
    
    it("should be instance of TodoItem", () => {
        expect(task).toBeInstanceOf(TodoItem);
    });

    it("should print details to console.log", () => {
        console.log = jest.fn();
        task.printDetails();
        expect(console.log).toHaveBeenCalledWith(`1\tNew Todo Item`);
    });

    it("should print details with complete to console.log", () => {
        console.log = jest.fn();
        task.complete = true;
        task.printDetails();
        expect(console.log).toHaveBeenCalledWith(`1\tNew Todo Item\t(complete)`);
    });
});