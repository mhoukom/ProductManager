const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "products_db";

// Middleware
app.use(cors(), express.json(), express.urlencoded({extended: true}));

// Database connection
require('./config/mongoose.config')(DB)

// Connect the routes
require('./routes/products.routes')(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));