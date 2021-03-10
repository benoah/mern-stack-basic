const express = require("express");
const connectDB = require("./config/connectDB");
const { body, validationResults } = require(`express-validator`);

// Schemas
const User = require("./models/User");

const app = express();

connectDB();

// Middleware
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

const testUser = new User({
  firstbame: "Mannuel",
  email: "mannue@email.com",
  password: "akjshdkajshdh",
});

app.post("/users", async (req, res) => {
  console.log("BODY!!!!:", req.body);
  try {
    const user = await User.create(req.body);
    res.status(201).send({
      result: req.body,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users", async (req, res) => {
  // console.log("BODY:", req.body);
  // try {
  //   let users = await User.find();
  //   return res.json(users);
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(500).send("Server error");
  // }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
