const express = require("express");

const { connection } = require("./controllers/connection");
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


app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
  console.log("connected to db");
});
