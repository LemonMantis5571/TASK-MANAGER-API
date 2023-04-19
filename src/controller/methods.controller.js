import { getUser, UpdateUsers, createUser, DeleteUsers, getUserByID, loginUsers} from "./users.controller.js";
import { DeleteUserTasks, getUserTasks, CreateUserTask } from "./database.controller.js";

export const methods = {
    getUser,
    UpdateUsers,
    createUser,
    DeleteUsers,
    getUserByID,
    loginUsers
}

export const TasksMethods = {
    CreateUserTask,
    getUserTasks,
    DeleteUserTasks
}