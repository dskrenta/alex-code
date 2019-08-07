// npm install
// node index.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { promisify } = require('util');

const app = express();
const port = 3000;

const PROFILE_FILE = './profile.json';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// enable cors
app.use(cors());

// serve index.html
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/createProfile', async (req, res) => {
  try {
    const fileContents = await readFileAsync(PROFILE_FILE, 'utf-8');
    const profileContents = JSON.parse(fileContents);

    const profileObj = {
      name: req.query.name || profileContents.name,
      age: req.query.age || profileContents.age,
      profileImage: req.query.profileImage || profileContents.profileImage
    };

    await writeFileAsync(PROFILE_FILE, JSON.stringify(profileObj));

    res.json({
      success: true
    });
  }
  catch (error) {
    console.error(error);
  }
});

app.get('/profile', async (req, res) => {
  try {
    const fileContents = await readFileAsync(PROFILE_FILE, 'utf-8');

    res.json(JSON.parse(fileContents));
  }
  catch (error) {
    console.error(error);
  }
});

// app.get('/', (req, res) => res.send('Hello World! FUck off@@@@!@$@#$@#$@#'));

app.get('/json', (req, res) => {
  res.json({ hi: 'hello' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
