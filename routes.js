const express = require("express");
/* 
use 'npm run dev' to run nodemon or 'npm start' 
*/

const app = express();
const router = require("./routes/"); //import main router

// using package dotenv to set const PORT
require("dotenv").config();
const PORT = process.env.PORT;

app.use(router); // using method 'use' wich is includes all methods (get, post. delete ...)
app.listen(PORT, console.log("Server is running on PORT:", PORT));
