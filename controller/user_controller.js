const users = require("../models/user_model");
const validator = require("validator");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const loginAuthenticate = (req, res, next) => {
  console.log(req.session);
  passport.authenticate("local", (err, user, info) => {
    if (err) { return next(err); };
    console.log(user);
    if (!user) {
      return res.send({ message: info.message });
    }
    req.login(user, (err) => {
      if (err) { return next(err); };
      return res.send({ message: "login successfully" });
    });
  })(req, res, next);
};

// build authentication mechanism through passport.use()
passport.use(new LocalStrategy(
  // change field name
  {
    usernameField: "email"
  },

  // verify callback
  async (email, password, done) => {
    try {
      if (!email || !password) {
        return done(null, false, { message: "The Email And Password Is Required." });
      }
      if (!validator.isEmail(email)) {
        return done(null, false, { message: "Request Error: Invalid Email Format" });
      }
      const result = await users.signIn(email, password);
      if (result.error) {
        return done(null, false, { message: "Wrong Password Or Account Is Not Exits" });
      }
      if (!result.user) {
        return done(null, false, { message: "Database Query Error" });
      }
      const user = { email: email, id: result.user.id };
      return done(null, user, { message: "Login Successfully." });
    } catch (error) {
      return done(null, false, { message: error });
    }
  }

));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await users.getUserDetail(id);
  done(null, user[0]);
});

const signUp = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ error: "Request Error: email and password are required." });
    return;
  }
  if (!validator.isEmail(email)) {
    res.status(400).send({ error: "Request Error: Invalid email format" });
    return;
  }
  const result = await users.signUp(email, password);
  if (result.error) {
    res.status(403).send({ error: result.error });
    return;
  }
  const user = result.user;
  if (!user) {
    res.status(500).send({ error: "Database Query Error" });
    return;
  };
  res.status(200).send({
    data: { sessionID: req.sessionID }
  });
};

const logout = async (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};

module.exports = { signUp, loginAuthenticate, logout };
