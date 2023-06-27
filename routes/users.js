const express = require("express");
const router = express.Router();

const controllers = require("../controllers/users");
router
  .route("/")
  .get(controllers.getUsersRequestHandler)
  .post(controllers.postUsersRequestHandler)
  .put(controllers.putUsersRequestHandler)
  .patch(controllers.patchUsersRequestHandler)
  .delete(controllers.deleteUsersRequestHandler)
  .options(controllers.optionsUsersRequestHandler);
router
  .route("/:user")
  .get(controllers.getUserRequestHandler)
  .post(controllers.postUserRequestHandler)
  .put(controllers.putUserRequestHandler)
  .patch(controllers.pathUserRequestHandler)
  .delete(controllers.deleteUserRequestHandler)
  .options(controllers.optionsUserRequestHandler);

module.exports = router;
