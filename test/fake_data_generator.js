require("dotenv").config();
const { NODE_ENV } = process.env;
const { pool } = require("../models/mysql");
// const bcrypt = require("bcrypt");
// const salt = parseInt(process.env.BCRYPT_SALT);

async function createFakeData () {
  if (NODE_ENV !== "test") {
    console.log("Not in test env");
  }
}

async function truncateFakeData () {
  if (NODE_ENV !== "test") {
    console.log("Not in test env");
    return;
  }
  const truncateTable = async (table) => {
    const conn = await pool.getConnection();
    await conn.query("START TRANSACTION");
    await conn.query(`TRUNCATE TABLE ${table}`);
    await conn.query("COMMIT");
    await conn.release();
  };
  const tables = [];
  for (const table of tables) {
    await truncateTable(table);
  }
}

async function closeConnection () {
  return await pool.end();
}

module.exports = {
  createFakeData,
  truncateFakeData,
  closeConnection
};
