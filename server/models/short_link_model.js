const { pool } = require("./mysql");

const checkIsShortLink = async (shortLink) => {
  const result = await pool.query("SELECT short_link FROM links WHERE short_link = ?", [shortLink]);
  if (result[0].length !== 0) {
    return false;
  } else {
    return true;
  }
};

const shortLink = async (url, shortLink) => {
  const link = {
    url: url,
    shortLink: shortLink
  };
  const result = await pool.query("INSERT INTO links SET original_url = ? , short_link = ?, times = 0", [url, shortLink]);
  link.id = result[0].insertId;
  return { link };
};

const findUrl = async (shortLink) => {
  const conn = await pool.getConnection();
  try {
    await conn.query("START TRANSACTION");
    const result = await conn.query("SELECT id, original_url FROM links WHERE short_link = ? FOR UPDATE", [shortLink]);
    if (result[0].length === 0) {
      await conn.query("COMMIT");
      return { error: "URL Is Not Exist." };
    }
    const id = result[0][0].id;
    await conn.query("UPDATE links SET times = times + 1 WHERE id = ?", [id]);
    const timesResult = await conn.query("SELECT times FROM links WHERE id = ?", [id]);
    await conn.query("COMMIT");
    return { original_url: result[0][0].original_url, times: timesResult[0][0].times };
  } catch (error) {
    console.log(error);
    await conn.query("ROLLBACK");
    return { error: error };
  } finally {
    await conn.release;
  }
  // may cause race condition
};

const showRedirectTimes = async (data) => {
  const conn = await pool.getConnection();
  try {
    await conn.query("START TRANSACTION");
    const timesResult = { data: [] };
    for (const n of data) {
      const result = await conn.query("SELECT id, times FROM links WHERE id = ?", [n.id]);
      timesResult.data.push({ id: result[0][0].id, times: result[0][0].times });
    }
    await conn.query("COMMIT");
    return timesResult;
  } catch (error) {
    console.log(error);
    await conn.query("ROLLBACK");
    return { error: error };
  } finally {
    await conn.release;
  }
};

module.exports = { shortLink, findUrl, checkIsShortLink, showRedirectTimes };
