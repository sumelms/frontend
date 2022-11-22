let router;

const _filterResponse = (data, fields) => {
  let value = {};

  if (data instanceof Array) {
    return data.map((item) => {
      fields.forEach((field) => {
        value[field] = item[field];
      });

      return value;
    });
  }

  fields.forEach((field) => {
    value[field] = item[field];
  });

  return value;
};

function _valid_to_filter(method, fields) {
  isValid = method !== 'POST';

  return isValid && fields !== '' && fields !== undefined;
}

const filterFieldMiddleware = (req, res, next) => {
  console.debug(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);

  const { fields } = req.query;

  delete req.query.fields;

  if (!_valid_to_filter(req.method, fields)) {
    next();
    return;
  }

  const oldRender = router.render;

  router.render = (req, res) => {
    const filterFields = fields.split(',');

    res.locals.data = _filterResponse(res.locals.data, filterFields);

    router.render = oldRender;
    router.render(req, res);
  }; 

  next();
};

module.exports = (app_router) => {
  router = app_router;

  return filterFieldMiddleware;
};
