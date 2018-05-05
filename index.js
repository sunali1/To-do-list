'use strict';

const express = require ('express');
const app = express();
const port = 3003

const bodyParser = require("body-parser")

let fakeData = ['apples', 'oranges', 'bananas']

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/items', (req, res) => {
  res.send(fakeData)
})


app.post('/item', (req, res) => {
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


app.get('/item/:id', (req, res) => {
  let lookedItem = fakeData[parseInt(req.params.id)] //to gaurd against params not being a number
  if(lookedItem === undefined) {
    res.status(400).send( 'Item not found' )
  }
  else {
    res.send(lookedItem)
  }

})
app.delete('/item/:id', (req, res) => {
  let removedItems = fakeData.splice((req.params.id), 1)
  if(removedItems.length > 0){
    res.status(202).send(removedItems)
  } else {
    res.status(400).send()
  }
})

app.get('/', (req, res) => {
  res.status(404).send('Not found')
})

app.listen(port, () => {
  console.log(`Express is listening on ${port}` )
});
module.exports = app;
