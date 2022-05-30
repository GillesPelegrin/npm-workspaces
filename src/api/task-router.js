import * as express from 'express';
import {TaskApplicationService} from "../application-service/task-application-service.js";

const router = express.Router();

router.get('/tasks',  (async function (req, res) {
    const tasks = await new TaskApplicationService().getAllTasks();
    res.send(tasks);
}));


export default router;