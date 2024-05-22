// create web server with express
const express = require('express');
const app = express();
const port = 3000;

// use express to parse JSON data
app.use(express.json());

// create an array of comments
const comments = [
  { id: 1, author: 'John', text: 'First comment!' },
  { id: 2, author: 'Jane', text: 'Second comment!' },
  { id: 3, author: 'Joe', text: 'Third comment!' },
  { id: 4, author: 'Jill', text: 'Fourth comment!' },
];

// create a GET route to return all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// create a GET route to return a specific comment
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.json(comment);
});

// create a POST route to add a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        // add other properties here
    };
    // add comment to the comments array
    comments.push(comment);
    res.json(comment);
});
