const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.API_PORT || 5000;

app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From ss Express' });
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));