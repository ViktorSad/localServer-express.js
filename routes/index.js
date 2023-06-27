const express = require("express");
const router = express.Router();
/* 
or you can write :
const router = require("express").Router()

*/

const usersRouter = require("./users"); // import users router
const articlesRouter = require("./articles"); // import article rounter
const rootRouter = require("./root"); // import root router
// setting route for the routers
router.use("/", rootRouter);
router.use("/users", usersRouter);
router.use("/articles", articlesRouter);
// Export router
module.exports = router;
