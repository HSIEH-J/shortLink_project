const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { NODE_ENV } = process.env;

chai.use(chaiHttp);

const assert = chai.assert;
const requester = chai.request(app).keepOpen();

// eslint-disable-next-line no-undef
before(async () => {
  if (NODE_ENV !== "test") {
    // eslint-disable-next-line no-throw-literal
    throw "Not in test env";
  }
});

module.exports = {
  assert,
  requester
};
