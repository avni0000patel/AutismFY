const db = require("../config/connection");
const { User, Post } = require("../models");
const userSeeds = require("./userSeeds.json");
const postSeeds = require('./postSeeds.json');

db.once("open", async () => {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Post.create(postSeeds);

    console.log("Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
