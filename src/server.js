const bodyParser = require('body-parser');
const express = require('express');

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [
  {
    title: 'pulp fiction',
    content: 'two old-enough-to-know-better men shoot a lot of people'
  },
  {
    title: 'lord of the rings',
    content: 'a bunch of kids go on a journey with a ring'
  }
];

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

server.get('/posts', (req, res) => {
  res.status(200).send(JSON.stringify(posts));
});
server.post('/posts', (req, res) => {
  const { title } = req.body;
  const { contents } = req.body;
  if (title !== undefined && contents !== undefined) {
    posts.push(req.body);
  }
  res.send(`title: ${title} || content: ${contents}`);
});

const port = 8080;
server.listen(port, () => {
  console.log(`i see you on port ${port}`);
});
// TODO: your code to handle requests

module.exports = { posts, server };
