const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');


//json read
let rawdata = fs.readFileSync('db/data.json');  
let data = JSON.parse(rawdata);

// app.use(cors());
// app.use(express.json()); // for parsing application/json

const corsOptions = {
    // origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());

  

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // check if the provided username and password match the one in the json file
  const user = data.users.find(user => user.username === username && user.password === password);
  if (user) {

    console.log('user: ',user);

    return res.status(200).send({ message: 'Successful login' });
  } else {
    console.log('user: ',user);

    return res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
