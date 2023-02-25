import { getUser, UpdateUsers, createUser, DeleteUsers, getUserByID} from "./users.controller";
import { DeleteUserTasks, getUserTasks, CreateUserTask } from "./database.controller";

export const methods = {
    getUser,
    UpdateUsers,
    createUser,
    DeleteUsers,
    getUserByID
}

export const TasksMethods = {
    CreateUserTask,
    getUserTasks,
    DeleteUserTasks
}