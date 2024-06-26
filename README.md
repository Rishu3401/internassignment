Overview
The To-Do List application helps users manage tasks with features for creating, reading, updating, and deleting (CRUD) tasks. Each task includes a title, description, status, and due date. The application also features secure login and sign-up using JWT.

Frontend
Task List Page: Displays all tasks with options to edit, delete, and create new tasks.
Task Form Page: A form for creating or editing tasks with fields for title, description, status, and due date.
Technology: Built with React for a responsive user interface.
Backend
API Endpoints:
GET /tasks: Retrieve all tasks.
GET /tasks/:id: Retrieve a task by ID.
POST /tasks: Create a new task.
PUT /tasks/:id: Update a task by ID.
DELETE /tasks/:id: Delete a task by ID.
Data Storage: Uses MongoDB.
Authentication: Uses JWT for secure user authentication.
Technology: Developed with Node.js and Express.
Environment Variables
JWT_SECRET: Secret key for JWT authentication.
mongoUrl: MongoDB connection URL.

to download dependencies use :npm install
Run the Website
In the backend directory:npm start
In the frontend directory:npm start


Deployment
Access the deployed application at https://rishuassignment.netlify.app/.
Source Code:
Available on GitHub: https://github.com/Rishu3401/internassignment.
