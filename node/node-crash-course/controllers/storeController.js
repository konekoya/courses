exports.middleware = (req, res, next) => {
  res.name = 'joshua';
  next();
};

exports.homePage = (req, res) => {
  console.log(res.name);

  res.render('index');
};
