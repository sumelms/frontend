const FilterFieldMiddleware = require('./scripts/filter_fields_middleware');
const path = require('path');
const jsonServer = require('json-server');

const db_path = path.join(__dirname, 'db.json');
const server = jsonServer.create();

const router = jsonServer.router(db_path);

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);
server.use(FilterFieldMiddleware(router));

server.get('/api/courses/:slug', function (req, res, next) {
  const { slug } = req.params;

  res.locals.data = router.db.get('courses').find({ slug }).value();
  next();
});

server.use('/api', router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
