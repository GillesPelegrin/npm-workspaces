import * as express from 'express';
import {TaskApplicationService} from "application-service/module/task-application-service";
import TaskRepository from "domain/module/task-repository";

const router = express.Router();

router.get('/tasks',  (async function (req, res) {

    // This should not be accessible ~ API is not depending on domain
    this.taskRepository = new TaskRepository();

    const tasks = await new TaskApplicationService().getAllTasks();
    res.send(tasks);
}));


export default router;