const router = require("express").Router();
const rootHandler = require("../controllers/root");
router.get("/", rootHandler);
module.exports = router;
