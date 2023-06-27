const express = require("express");
const router = express.Router();
/* 
or you can write :
const router = require("express").Router()

*/
const controllers = require("../controllers/articles"); // Adding Handlers functions
router
  .route("/") // User chaine requests
  .get(controllers.getArticlesRequestHandler)
  .post(controllers.postArticlesRequestHandler)
  .put(controllers.putArticlesRequestHandler)
  .patch(controllers.patchArticlesRequestHandler)
  .delete(controllers.deleteArticlesRequestHandler)
  .options(controllers.optionsArticlesRequestHandler);
router
  .route("/:artiles") // Using request.params
  .get(controllers.getArticleRequestHandler)
  .post(controllers.postArticleRequestHandler)
  .put(controllers.putArticleRequestHandler)
  .patch(controllers.pathArticleRequestHandler)
  .delete(controllers.deleteArticleRequestHandler)
  .options(controllers.optionsArticleRequestHandler);

module.exports = router;
