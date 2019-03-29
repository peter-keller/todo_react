This project is part of a bundle project.

### [Todo REST API](https://github.com/peter-keller/module-one-final-project-guidelines-london-web-career-031119)

### [Todo React App](https://github.com/peter-keller/todo_react)

### [Todo CLI](https://github.com/peter-keller/todo_cli)

# Todo React App

- About the app:

  - Todo React app is a single page web application to communicate with the Todo REST API and execute every function the Todo CLI can.
  - The main advantage is that everyone can access this site (once it's deployed) and can interact with it without any difficulty.

- How to set up:

  - Prerequisites

    - Node 8.0 or bigger
    - Npm 5.6 or bigger
    - create-react-app 2.1.8 was used.

  * How to run
    - **[Follow the instructions to set up the REST API here first.](https://github.com/peter-keller/module-one-final-project-guidelines-london-web-career-031119)**
    - `git clone https://github.com/peter-keller/todo_react`
    - `cd todo_react/todo`
    - `npm install`
    - `npm start`

# Todo CLI

- About the app:

  - Todo CLI is a command line application written in Ruby. It connects to it's own server and can execute basic CRUD functions.
  - The main avantage of this is that once the user quits the program, the modifications won't be lost and it's portable once the web server is deployed on Heroku or Digital Ocean.

- How to set up:
  - Prerequisites
    - Ruby 2.3.3


    - **[Follow the instructions to set up the REST API here first.](https://github.com/peter-keller/module-one-final-project-guidelines-london-web-career-031119)**
    - `git clone https://github.com/peter-keller/todo_cli`
    - `cd todo_cli`
    - `bundle install`
    - `rake run`

- Commands:
  - Once the user is prompted for a name and authenticated/new user created, the following features will be available:
    - View todos
      - It displays the tasks that belong to the current user with the priority that is color coded.
    - Add todo
      - Prompts the user for a new task and then for the priority then saves it in the database.
    - Complete todo
      - Displays all the tasks that belong to the user and makes them selectable so the user can decide which task has been completed.
    - Edit todo
      - Displays all the tasks that belong to the user and makes them selectable so the user can edit the choosen task and it's priority.
    - Exit
      - Quits the program with a message that contains the user's name.

# Todo REST API

- About this REST API:

  - Todo REST API is a pretty much what it says, a REST API written in Rails that works with JSON to execute CRUD functions and save/retrieve the result to/from the connected MySQL database.
  - The main advantage of this is that once it's deployed to a web hosting platform, the user can access the tasks and features of the app all over the world just using a browser.

- How to set up:
  - Prerequisites
    - Ruby 2.3.3
    - Rails 5.2.2.1

* How to run:

  - `git clone https://github.com/peter-keller/module-one-final-project-guidelines-london-web-career-031119 rest_api`
  - `cd rest_api`
  - `bundle install`
  - `rails s`
  - Once it's done, the app will run on `http://localhost:3000`

* Routes:

  - User:

    - GET `http://localhost:3000/api/v1/user` - Gets all users from the db
    - GET `http://localhost:3000/api/v1/user/:id` - Gets the user with the given id
    - POST `http://localhost:3000/api/v1/user` `{name: user_name}` - Checks if user_name is in db, if not creates new user
    - POST `http://localhost:3000/api/v1/matches` `{id: user_id}` - Returns all the tasks that belong to that user.

  - Task:
    - GET `http://localhost:3000/api/v1/todo` - Gets every task from the db
    - DELETE `http://localhost:3000/api/v1/destroy_selected/user_id=#{USER_ID}&todo_id=#{TASK_ID}` - Delete/Complete the task that belong to the user and matches the task ID
    - POST `http://localhost:3000/api/v1/todo` `{data: {task: TASK, priority: PRIORITY}, user_id: USER_ID}` - Creates a new task for the current user and saves it in the db.
    - PUT `http://localhost:3000/api/v1/todo/:TASK_ID"` `{data: {task: NEW_TASK, priority: NEW_PRIORITY}}` - Updates the selected task and saves the changes.
