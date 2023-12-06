const express = require("express");
const { connnection } = require("./controllers/connection");
require("dotenv").config();
const { router } = require("./Routers/user.router");
const { auth } = require("./Middlewares/auth.middleware");
const routertodo = require("./Routers/ToDoRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/api", routertodo);
app.use(auth);


//PORT
app.listen(process.env.PORT_NUMBER, async () => {
  try {
    await connnection;
    console.log("connected with db");
  } catch (error) {
    console.log({ msg: error.message });
  }
  console.log(`server is running at port ${process.env.PORT_NUMBER}`);
});
