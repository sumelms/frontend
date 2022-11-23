const FilterFieldMiddleware = require('./scripts/filter_fields_middleware');
const CourseRouters = require('./scripts/course_routes');
const path = require('path');
const jsonServer = require('json-server');

const db_path = path.join(__dirname, 'db.json');
const server = jsonServer.create();

const router = jsonServer.router(db_path);

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);
server.use(FilterFieldMiddleware(router));
server.use(CourseRouters(router));

server.use('/api', router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
