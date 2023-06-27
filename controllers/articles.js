// Handlers function for articleRouter
const getArticlesRequestHandler = (request, response) => {
  response.send(" You send GET request to /Articles");
};
const postArticlesRequestHandler = (request, response) => {
  response.send(" You send POST request to /Articles");
};
const putArticlesRequestHandler = (request, response) => {
  response.send(" You send PUT request to /Articles");
};
const patchArticlesRequestHandler = (request, response) => {
  response.send(" You send PATCH request to /Articles");
};
const deleteArticlesRequestHandler = (request, response) => {
  response.send(" You send DELETE request to /Articles");
};
const optionsArticlesRequestHandler = (request, response) => {
  response.send(" You send OPTIONS request to /Articles");
};
const getArticleRequestHandler = (request, response) => {
  response.send(
    `You send GET request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const postArticleRequestHandler = (request, response) => {
  response.send(
    `You send POST request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const putArticleRequestHandler = (request, response) => {
  response.send(
    `You send PUT request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const pathArticleRequestHandler = (request, response) => {
  response.send(
    `You send PATH request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const deleteArticleRequestHandler = (request, response) => {
  response.send(
    `You send DELETE request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};
const optionsArticleRequestHandler = (request, response) => {
  response.send(
    `You send OPTIONS request to ${Object.keys(request.params)}:${Object.values(
      request.params
    )}`
  );
};

module.exports = {
  getArticlesRequestHandler,
  postArticlesRequestHandler,
  putArticlesRequestHandler,
  patchArticlesRequestHandler,
  deleteArticlesRequestHandler,
  optionsArticlesRequestHandler,
  getArticleRequestHandler,
  postArticleRequestHandler,
  putArticleRequestHandler,
  pathArticleRequestHandler,
  deleteArticleRequestHandler,
  optionsArticleRequestHandler,
};
