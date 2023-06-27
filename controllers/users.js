// Handlers for users router
const getUsersRequestHandler = (request, response) => {
  response.send(" You send GET request to /users");
};
const postUsersRequestHandler = (request, response) => {
  response.send(" You send POST request to /users");
};
const putUsersRequestHandler = (request, response) => {
  response.send(" You send PUT request to /users");
};
const patchUsersRequestHandler = (request, response) => {
  response.send(" You send PATCH request to /users");
};
const deleteUsersRequestHandler = (request, response) => {
  response.send(" You send DELETE request to /users");
};
const optionsUsersRequestHandler = (request, response) => {
  response.send(" You send OPTIONS request to /users");
};
const getUserRequestHandler = (request, response) => {
  response.send(
    `You send GET request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const postUserRequestHandler = (request, response) => {
  response.send(
    `You send POST request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const putUserRequestHandler = (request, response) => {
  response.send(
    `You send PUT request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const pathUserRequestHandler = (request, response) => {
  response.send(
    `You send PATH request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const deleteUserRequestHandler = (request, response) => {
  response.send(
    `You send DELETE request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const optionsUserRequestHandler = (request, response) => {
  response.send(
    `You send OPTIONS request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};

module.exports = {
  getUsersRequestHandler,
  postUsersRequestHandler,
  putUsersRequestHandler,
  patchUsersRequestHandler,
  deleteUsersRequestHandler,
  optionsUsersRequestHandler,
  getUserRequestHandler,
  postUserRequestHandler,
  putUserRequestHandler,
  pathUserRequestHandler,
  deleteUserRequestHandler,
  optionsUserRequestHandler,
};
