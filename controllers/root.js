//  Handlers for root router
const rootHandler = (request, response) => {
  response.send(
    "<h1>Main page</h1> <p>Test server with GET method  - localhost:3000</p> <p>ALL METHODS  -  localhost:3000/users, localhost:3000/users/anyWord, localhost:3000/artiles,localhost:3000/artiles/anyWord </p>"
  );
};
module.exports = rootHandler;
