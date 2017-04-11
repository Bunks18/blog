
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const blogRouter = require('./blogRouter');


const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at

app.use('/blog-posts', blogRouter);


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
