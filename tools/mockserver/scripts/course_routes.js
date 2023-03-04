const express = require('express');

let lowdb;

const Course = (req, res, next) => {
  const { slug } = req.params;

  res.locals.data = lowdb.db.get('courses').find({ slug }).value();
  next();
};

const Nested = (req, res, next) => {
  const { slug, nested } = req.params;

  const course = lowdb.db.get('courses').find({ slug }).value();

  const fkValue = course[`${nested}Id`];

  const key = fkValue === undefined ? 'courseId' : 'id';
  const value = `${fkValue === undefined ? course.id : fkValue}`;

  req.url = `/api/${nested}`;
  req.query[key] = value;

  next();
};

module.exports = (low) => {
  const router = express.Router();

  lowdb = low;

  router.get('/api/courses/:slug', Course);
  router.get('/api/courses/:slug/:nested', Nested);
  return router;
};
