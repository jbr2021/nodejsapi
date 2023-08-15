const express = require('express');
const app = express();
const routes = require('./modules/common/master-route');
const IndexModule = require('./modules/home/index');

const PORT = 1122;

app.use(express.json());

app.use('/api', routes);
app.use('/', IndexModule.index);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});