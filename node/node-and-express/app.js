const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')),
);

const nav = [
  { link: '/books', title: 'Books' },
  { link: '/authors', title: 'Authorssss' },
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Library',
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' },
    ],
  });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
