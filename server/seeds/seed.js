const db = require("../config/connection");
const { User, Post } = require("../models");
const postSeeds = require("./postSeeds.json");
const userSeeds = require("./userSeeds.json");

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Post.deleteMany({});
    await Post.create(postSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
