const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

// Socket.IO
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// env
require("dotenv").config();
const { PORT_TEST, PORT, NODE_ENV } = process.env;

// set port
const port = NODE_ENV === "test" ? PORT_TEST : PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const passport = require("passport");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);
const { mysqlEnv } = require("./server/models/mysql");
const sessionStore = new MysqlStore(mysqlEnv);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", async (socket) => {
  console.log("a user connected", socket.id);
  socket.on("disconnect", async () => {
    console.log("Connection disconnected", socket.id);
  });
  socket.on("test", msg => {
    console.log(msg);
  });
  socket.emit("test", "test");
});

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
  require("./server/routes/user_route"),
  require("./server/routes/short_link_route")
]);

app.use((req, res, next) => {
  // eslint-disable-next-line node/no-path-concat
  res.status(404).send("404 Page Not Found");
});

// eslint-disable-next-line node/handle-callback-err
app.use((err, req, res) => {
  console.log("internal server error");
  res.status(500).send({ error: "server error" });
});

server.listen(port, () => {
  console.log(`the server is listening on port ${port}...`);
});

module.exports = app;
