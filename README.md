# Task Manager Application



## Features 

1. **Create Task** 
2. **View All Tasks** 
3. **Edit Task** 
4. **Delete Task** 
5. **Mark Complete** 

## Database

- MongoDB 
- Database name: `taskmanager`
- Collection name: `task`

## Project Structure


├── index.js          (Main server file)
├── package.json      (Dependencies)
├── views/
│   ├── home.ejs      (Create task form)
│   ├── show.ejs      (All tasks view)
│   └── edit.ejs      (Edit task form)


## Installation
npm install
## Run
npx nodemon

then open in browser  `http://localhost:3000`

## Routes

- `GET /` - Home page ( create new task)
- `POST /register` - save task
- `GET /show` - show task
- `POST /edit` - Edit page (Edit task)
- `POST /update` - Task update 
- `POST /delete` - Task delete 

## Tech Stack

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Database ODM
- **EJS** - View engine
- **Bootstrap** - Styling
