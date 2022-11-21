const path = require('path');
const jsonServer = require('json-server');
const low = require('lowdb');
const server = jsonServer.create();
const db_path = path.join(__dirname, 'db.json');
const router = jsonServer.router(db_path);
const middlewares = jsonServer.defaults();

server.use(middlewares);

const filterResponse = (data, fields) => {
  if (data instanceof Array) {
    return data.map((item) => {
      let value = {};
      fields.forEach((field) => {
        value[field] = item[field];
      });

      return value;
    });
  }

  let value = {};
  fields.forEach((field) => {
    value[field] = item[field];
  });

  return value;
};

const FilterFieldMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);

  const { fields } = req.query;
  delete req.query.fields;

  if (
    req.method == 'POST' ||
    (req.method == 'GET' && (fields === '' || fields == undefined))
  ) {
    next();
    return;
  }

  const filterFields = fields.split(',');
  const data = router.db.get('courses').value();

  response = filterResponse(data, filterFields);
  res.locals.data = response;
  res.jsonp(response);
};

server.use(FilterFieldMiddleware);

server.get('/api/courses/:slug', function (req, res, next) {
  const { slug } = req.params;
  const course = router.db.get('courses').find({ slug }).value();

  if (course) {
    return res.jsonp(course);
  } 

  res.sendStatus(404);
});

server.use('/api', router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
