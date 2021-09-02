/* eslint-disable no-undef */
const check = require("../server/controller/short_link_controller");
const { assert } = require("./set_up");

describe("formatCheck", () => {
  it("should check the url start with https", () => {
    const url = "https://github.com/";
    const result = check.checkFormat(url);
    assert(result === true, "wrong");
  });
  it("should check the url start with http", () => {
    const url = "http://github.com/";
    const result = check.checkFormat(url);
    assert(result === true, "wrong");
  });
  it("should check the url start with https or http", () => {
    const url = "htt://github.com/";
    const result = check.checkFormat(url);
    assert(result === true, "wrong");
  });
});
