const express = require("express");

const app = express();

// env
require("dotenv").config();
const { PORT_TEST, PORT, NODE_ENV } = process.env;

// set port
const port = NODE_ENV === "test" ? PORT_TEST : PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("myfirstreactapp/public"));

const passport = require("passport");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);
const { mysqlEnv } = require("./models/mysql");
const sessionStore = new MysqlStore(mysqlEnv);

app.use(session({
  secret: "mySecret",
  name: "user",
  saveUninitialized: false,
  resave: false,
  store: sessionStore
}));

app.use(passport.initialize());
// if login session is used =>
app.use(passport.session());

app.use([
  require("./routes/user_route")
]);

app.use((req, res, next) => {
  // eslint-disable-next-line node/no-path-concat
  res.status(404).sendFile(__dirname + "/myfirstreactapp/public/404.html");
});

// eslint-disable-next-line node/handle-callback-err
app.use((err, req, res) => {
  console.log("internal server error");
  res.status(500).send({ error: "server error" });
});

app.listen(port, () => {
  console.log("the server is listening on port 3000...");
});

module.exports = app;
