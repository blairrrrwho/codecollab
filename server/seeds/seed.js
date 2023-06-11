const db = require('../config/connection');
const { User, Post } = require('../models')

const userData = require('./userData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Post.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const posts = await Post.insertMany(postData);

  console.log('data seed complete!');
  process.exit(0);
});