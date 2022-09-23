const express = require('express');
const routerApi = require('./routes');
// const { faker } = require('@faker-js/faker');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

routerApi(app);

app.listen(port, () => {
  console.log('mi port ' + port);
});
