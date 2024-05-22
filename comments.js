// Create web server with express
// Create a router
// Create a route to get comments
// Create a route to post comments
// Create a route to delete comments
// Create a route to update comments
// Export the router
// Path: server.js
// Import comments.js
// Use comments.js as middleware
// Listen to a port

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/comments', (req, res) => {
  res.send('Get comments');
});

router.post('/comments', (req, res) => {
  res.send('Post comments');
});

router.delete('/comments', (req, res) => {
  res.send('Delete comments');
});

router.put('/comments', (req, res) => {
  res.send('Update comments');
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;