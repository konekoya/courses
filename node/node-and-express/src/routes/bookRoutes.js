const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  },
  {
    title: 'Les Miserables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false,
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false,
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false,
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false,
  },
];

const router = nav => {
  bookRouter.route('/').get((req, res) => {
    res.render('bookListView', {
      title: 'Library',
      nav,
      books,
    });
  });

  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;

    res.render('bookView', {
      title: 'book',
      nav,
      book: books[id],
    });
  });

  return bookRouter;
};

module.exports = router;
