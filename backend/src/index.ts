/** @format */

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});

app.get("/", (req, res) => {
  return res.json({ ok: true });
});
