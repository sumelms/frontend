const path = require('path');
const jsonServer = require('json-server');
const { data } = require('autoprefixer');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);


const filterResponse = (data, fields) => {
  if (data instanceof Array) {
    return data.map(item => {
      let value = {};
      fields.forEach(field => {
        value[field] = item[field];
      });

      return value;
    });
  }

  let value = {};
  fields.forEach(field => {
    value[field] = item[field];
  });

  return value;
};

const FilterFieldMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  
  const { fields } = req.query;
  delete req.query.fields;

  if (req.method == 'POST') {
    next();
    return;
  }

  res.on('finish', () => {
    if (fields === '' || fields == undefined) {
      return res.locals.data;
    }
    
    const filterFields = fields.split(',');
    const { data } = res.locals;
    
    response = filterResponse(data, filterFields);
    res.locals.data = response;
    res.end();
  });
  next();
};

server.use(FilterFieldMiddleware);

server.use('/api', router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
