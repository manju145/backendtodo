const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://todo:todo@cluster0.mhwb3cy.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
