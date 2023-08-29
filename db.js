const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://root:example@db:27017/");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failed!!!");
  }
}

module.exports = { connect };
