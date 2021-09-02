const { requester } = require("./set_up");

// eslint-disable-next-line no-undef
after(async () => {
  requester.close();
});
