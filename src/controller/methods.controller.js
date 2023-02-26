import { getUser, UpdateUsers, createUser, DeleteUsers, getUserByID, loginUsers} from "./users.controller";
import { DeleteUserTasks, getUserTasks, CreateUserTask } from "./database.controller";

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