import Task from "./task.js";

export default class TaskRepository  {

    getAll() {
        return [new Task("message", Date.now())]
    }
}