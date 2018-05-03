# Shopping Basket (work in progress)

This is a Node.js ReactJs application powered by Express.

## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

<!-- You might want to look into config.json to make changes to the port you want to use. -->

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

<!-- Once the dependencies are installed, in the terminal cd into NodeReactApp and run `npm run dev`. -->

Open another tab and cd into shopping-basket and run `npm start` to start the application. -->
You will then be able to access it at localhost:6000

## Testing routes with  curl

GET:      curl -D - localhost:6000/items
GET:(:id)  curl -D - localhost:6000/item/1
POST:   curl -i -X POST -H 'Content-Type: application/json' -d '{"fruit":"peach"}'
DELETE: curl -D - -X DELETE localhost:6000/item/1
