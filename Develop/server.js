const express = require('express');
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');

const app = express();
const PORT = process.env.port || 3001;
const path = require('path');

// Add a static middleware for serving assets in the public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// localhost:3001/
app.use('/', htmlRoutes); // importing routes from htmlroutes.js

// localhost:3001/api/notes
app.use('/api', apiRoutes);


app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);

