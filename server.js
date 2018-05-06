'use strict';

const express = require ('express'); // call express
const app = express(); // define our app using express
const port = process.env.PORT || 3003; // set our port
let fakeData = ['apples', 'oranges', 'bananas'] //this a fakedata array which will soon be a database
//middleware
const bodyParser = require("body-parser"); // configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// ROUTES FOR OUR API
// =============================================================================
app.get('/tasks', (req, res) => {
  res.send(fakeData)
})

app.post('/task', (req, res) => {
  let addedItem = req.body.fruit
  console.log(addedItem)
  if(typeof addedItem === 'string') {
    fakeData.push(addedItem)
    console.log(fakeData)
  }
  else {
    res.status(400).send( 'Item not added' )
  }
  res.status(201).send(`${addedItem} was added`)
})


app.get('/task/:id', (req, res) => {
  let lookedItem = fakeData[parseInt(req.params.id)] //to gaurd against params not being a number
  if(lookedItem === undefined) {
    res.status(400).send( 'Item not found' )
  }
  else {
    res.send(lookedItem)
  }
});

app.delete('/task/:id', (req, res) => {
  let removedItems = fakeData.splice((req.params.id), 1)
  if(removedItems.length > 0){
    res.status(202).send(removedItems.toString())
  } else {
    res.status(400).send()
  }
})

app.get('/', (req, res) => {
  res.send('Your To-do-List')
})
// START THE SERVER
// =============================================================================
app.listen(port, () => {
  console.log(`Express is listening on ${port}` )
});
module.exports = app;
