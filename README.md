# TASK-MANAGER-API

**Summary** 

Provides SQL Acess to the [TaskListManager](https://github.com/LemonMantis5571/Task-List-Manager)

## Overview

The API allows users to register, login, create, update, and delete tasks. 
Each task is associated with a user account, and users can only access and modify their own tasks.
The API uses JWT tokens to authenticate requests and restrict access to certain endpoints. 
Users can obtain a token by logging in and include the token in the Authorization header of subsequent requests.
The API also uses rate limiting middleware to prevent abuse and ensure fair usage of the API.

## Installation

```
$ npm i
```
**The tables structures are available in the database folder.
Make sure to have the .env file with the proper variables on the config.js**

## Basic use

```
$ npm run dev && npm start
```

# API 

## API Routes

## Users

### GET /api/users/id
Returns the user information for the provided id if authenticated.

### Request Headers
**Authorization: Bearer token obtained from /api/users/login**

### Response Body
```
id: User ID
user: User name
```
### POST /api/users/create
**Creates a new user**.

### Request Body
```
user: User name
password: User password
```
### Response Body
```
id: User ID
user: User name
```
### PATCH /api/users/update/
**Updates the user information for the authenticated user.**

### Request Headers

**Authorization: Bearer token obtained from /api/users/login**

### Request Body
```
user: User name
password: User password
```
### Response Body
```
id: User ID
user: User name
```
### DELETE /api/users/delete/:id
Deletes the user with the provided id.

### Request Parameters
```
id: User ID
```

### POST /api/users/login
**Authenticates the user and returns a Bearer token for accessing protected endpoints.**

### Request Body
```
user: User name
password: User password
```
### Response Body

**token: Bearer token for accessing protected endpoints**

## API Endpoints
### createUser
**Creates a new user with the provided user and password.**

Returns a JSON object with the id and user of the created user.
If the user already exists, returns a 409 Conflict response.

### getUserByID
* Returns the user information for the authenticated user.

* Uses the Bearer token provided in the Authorization header to authenticate the request.

* Returns a 404 Not Found response if the user is not found.

* Returns a 401 Unauthorized response if the token is missing or invalid.

* Returns a JSON object with the id and user of the authenticated user.

### UpdateUsers
* Updates the user information for the authenticated user.
* Uses the Bearer token provided in the Authorization header to authenticate the request.
* Updates the user and password for the authenticated user.
* Returns a 404 Not Found response if the user is not found.
* Returns a JSON object with the updated id and user.

### DeleteUsers
* Deletes the user with the provided id.
* Returns a 404 Not Found response if the user is not found.

### loginUsers
* Authenticates the user and returns a Bearer token.
* Returns a 401 Unauthorized response if the user credentials are invalid.
* Returns a JSON object with the token.

## Tasks

This API allows authenticated users to manage their tasks.

## Endpoints
### Get User Tasks
 **Get all tasks for the authenticated user.**

### URL: /api/users/:id/tasks
### Method: GET

```
Response

  Status Code: 200 OK

[
    {
        "id": 1,
        "user_id": 1,
        "title": "Complete project report",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "is_completed": false,
        "priority": 1,
        "expires": "2023-06-15",
        "user_name": "John"
    },
    {
        "id": 2,
        "user_id": 1,
        "title": "Buy groceries",
        "description": "Milk, eggs, bread, and cheese.",
        "is_completed": false,
        "priority": 2,
        "expires": "2023-05-20",
        "user_name": "John"
    }
]
```
### Delete User Task
**Delete a task for the authenticated user.**

### URL: /api/users/:id/tasks/:taskId
- Method: DELETE
- Headers:

*Authorization: Bearer token*
```
Response:
Status Code: 200 OK

{
    "message": "Task: 'Complete project report' deleted"
}
```

### Create User Task
**Create a task for the authenticated user.**

### URL: /api/users/create/tasks
- Method: POST
- Headers:
*Authorization: Bearer token*
Request Body:
```
{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread, and cheese.",
    "is_completed": false,
    "priority": 2,
    "expires": "2023-05-20"
}
Response:
Status Code: 201 Created
```
```
{
    "user_id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread, and cheese.",
    "is_completed": false,
    "priority": 2,
    "expires": "2023-05-20"
}
```
### Authentication
**All endpoints require a valid JWT token to be included in the Authorization header. The token is obtained by logging in to the application.**

### Errors
The API can return the following errors:

- 401 Unauthorized: when the JWT token is missing or invalid
- 404 Not Found: when the specified task or user cannot be found
- 500 Internal Server Error: when an unexpected error occurs
