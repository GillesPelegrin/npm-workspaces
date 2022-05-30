import TaskMapper from "./task-mapper.js";
import TaskRepository from "domain/module/task-repository";

export class  TaskApplicationService {

     taskRepository;
     taskMapper;

    constructor() {
        this.taskRepository = new TaskRepository();
        this.taskMapper = new TaskMapper();
    }

    async getAllTasks(){
        const tasks = await this.taskRepository.getAll();
        return tasks.map((task) => this.taskMapper.mapTaskDTO(task))
    }
}