const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const shelf_controller = require('./shelf_controller');
const bin_controller = require('./bin_controller');

const app = express(); 

app.use ( bodyParser.json() );
app.use ( cors() );

massive( process.env.CONNECTION_STRING ).then ( dbInstance => app.set('db', dbInstance) );

app.get( '/api/shelves', shelf_controller.getShelves );
app.get( '/api/item/:item_id', bin_controller.get);
app.get( '/api/items', bin_controller.getAll);
app.put( '/api/item/:bin_id/:item_id', bin_controller.update);
app.delete( '/api/item/:item_id', bin_controller.delete);
app.post( '/api/item', bin_controller.new);

const port = process.env.PORT || 3000;
app.listen 
( port, () => {console.log(`Tuned in to chanel ${port}`); } );