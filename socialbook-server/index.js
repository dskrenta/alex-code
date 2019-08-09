'use strict';

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { promisify } = require('util');

const app = express();
const port = 3000;

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const fileExistsAsync = promisify(fs.exists);

// enable cors
app.use(cors());

// use static files from public
app.use(express.static('public'))

// createProfile
app.get('/createProfile', async (req, res) => {
  try {
    const userId = genId();
    const userFile = `./profiles/${userId}.json`;
    const userFileExists = await fileExistsAsync(userFile);

    // check if user file exists
    if (userFileExists) {
      const fileContents = await readFileAsync(userFile, 'utf-8');
      profileContents = JSON.parse(fileContents);
    }

    const profileObj = {
      id: userId,
      name: req.query.name || profileContents.name,
      age: req.query.age || profileContents.age,
      profileImage: req.query.profileImage || profileContents.profileImage
    };

    await writeFileAsync(userFile, JSON.stringify(profileObj));

    res.json({
      success: true
    });
  }
  catch (error) {
    console.error(error);
  }
});

// getProfile
app.get('/getProfile', async (req, res) => {
  try {
    const userId = req.query.id;
    const userFile = `./profiles/${userId}.json`;
    const fileContents = await readFileAsync(userFile, 'utf-8');

    res.json(JSON.parse(fileContents));
  }
  catch (error) {
    console.error(error);
  }
});

// post
app.get('/post', async (req, res) => {
  try {
    const userId = req.query.userId;
    const postContent = req.query.post;
    const post = {
      id: genId(),
      userId: userId,
      content: postContent
    };
    const postsFileContent = await readFileAsync('./posts.json', 'utf-8');
    const postsObj = JSON.parse(postsFileContent);
    postsObj.posts.push(post);
    await writeFileAsync('./posts.json', JSON.stringify(postsObj));

    res.json({
      success: 'true'
    })
  }
  catch (error) {
    console.error(error);
  }
})

// getPosts
app.get('/getPosts', async (req, res) => {
  try {
    const postsFileContent = await readFileAsync('./posts.json', 'utf-8');
    const posts = JSON.parse(postsFileContent);
    res.json(posts);
  }
  catch (error) {
    console.error(error);
  }
});

function genId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
