const productsRouter = require('./products.route');
const usersRouter = require('./users.route');
const categoriesRouter = require('./categories.route');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
