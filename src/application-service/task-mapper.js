export default class TaskMapper {

    mapTaskDTO(task) {
        return {
            id: task.id,
            message: task.message
        }
    }
}