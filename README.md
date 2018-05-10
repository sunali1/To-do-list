# ToDo/Tasks list web app
(work in progress)
Backend API and database ready, frontend React ongoing

This is a Node.js ReactJs application powered by Express using MongoDB database.

## Pre-requisites

node 9.5
MongoDB shell version v3.6.3


## Setup
Clone the repository:

    `git clone https://github.com/sunali1/To-do-list.git
    cd ./To-do-list`

Install the dependencies:

    `npm install`


Open 3 further tabs in terminal and in each
    `mongo` for mongodb database

    `mongod` for mongoose

    run `nodemon` to start the server and `Ctrl C` to stop

You will then be able to access it in your browser at localhost:3003

<!-- You might want to look into config.json to make changes to the port you want to use. -->

## Dependencies

express: Web application framework for nodejs
morgan: HTTP request logger middleware for node.js
mongoose: is a MongoDB object modeling tool designed to work in an asynchronous environment.
body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
mocha: test framework
chai: assertion library for testing
chaiHttp: integration testing
nodemon: server restarts automatically after file changes

## Tests

 run `npm test`
 Note: nodemon should be turned off


## How did I approach this project
* First I setup a basic array and setup CRUD operations to make changes to it.
* I used to test the routes initially
* Then I setup a mongodb database with mongoose as the ORD
* I went through all the steps of creating a RESTful API, doing a naive test with POSTMAN
* Alongside I also setup tests via mocha and chai

### Testing routes with  curl

GET:      curl -D - localhost:3003/task
GET:(:id)  curl -D - localhost:3003/task/1
POST:   curl -i -X POST -H 'Content-Type: application/json' -d '{"deatil":"Milk", "completed": false}'
DELETE: curl -D - -X DELETE localhost:6000/task/1

## Conclusion
This project was useful to learn the full stack approach to creating an TDD web application. I have a good understanding of MongoDB and Node backend API

## Next steps
* Now creating a ReactJS front end which will fetch data from backend Node API using a proxy
* Deploy to heroku
