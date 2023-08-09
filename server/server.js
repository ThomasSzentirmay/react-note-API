require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3333;
const is_prod = process.env.PORT;

// Import Routers
const api_routes = require('./routes/api_routes');

// Load Middleware
if (is_prod) {
    app.use(express.static(path.join(__dirname, '../browser/build')));
}

app.use(express.json());
// Add additional cookie tools to the route request object
app.use(cookieParser());

// Load Routes
app.use('/api', api_routes);

// Ensure DB connection is open and start express server
db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
});