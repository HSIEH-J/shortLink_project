const authentication = () => {
  return async function (req, res, next) {
    if (!req.isAuthenticated()) {
      res.status(401).send({ error: "Unauthorized" });
    } else {
      next();
    }
  };
};

module.exports = { authentication };
