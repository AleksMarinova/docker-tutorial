const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json ([
    {
      id: 1,
      name: 'John',
      age: 30
    },
    {
      id: 2,
      name: 'Jane',
      age: 25
    }
  ]);
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})