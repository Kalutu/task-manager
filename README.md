# Task Manager App
This app is built using Node.js, Express, and MongoDB. The app focuses on basic CRUD operations for managing tasks. Users can create, read, update, and delete tasks.

## Features
- **Task CRUD Operations**: Users can create, read, update, and delete tasks.
- **Simple Interface**: The app provides a clean and intuitive interface for managing tasks.

## Technologies Used
- Node.js
- Express
- MongoDB

## Prerequisites
Make sure you have the following installed on your machine:

- Node.js
- npm
- MongoDB

## Getting Started
1. **Clone the repository:** ```git clone https://github.com/Kalutu/task-manager```
   
2. **Navigate to the project directory:** ```cd task-manager```

3. **Install dependencies:** ``` npm install ```

4. **Set up your MongoDB database**

5. **Update the connection string in config/db.js.**

6. **Start the application:** ```npm start```

7. **Open your browser:** Go to http://localhost:3000 to access the Task Manager app.

## Project Structure
- **Controllers:** The `controllers` directory contains the logic for handling different HTTP requests related to tasks.

- **Models:** The `models` directory includes the MongoDB schema definition for tasks.

- **Routes:** The `routes` directory defines the API routes for handling different task-related operations.

- **Middleware:** The `middleware` directory includes custom middleware functions, such as `asyncWrapper`, `notFound`, and `error-handler`, used in the application.

- **Configuration:** Configuration files, such as `config/db.js`, contain settings like the MongoDB connection string.


## Contributing
We welcome contributions! If you find a bug or have a feature request, please open an issue or submit a pull request.
