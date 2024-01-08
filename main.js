require("dotenv").config();
const express = require("express");
const cors = require("cors");
const genPwd = require("./passgen");

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://passgen-p1etrodev.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/password", (req, res) => {
	const len = Number(req.body.length);
	const useData = Object(req.body.useData);
	const pwd = genPwd(len, useData);

	answer = { status: "success", password: String(pwd) };

	console.log(answer);

	res.status(200).json(answer);
});

app.get(["/", "/ping"], (req, res) =>
	res.status(200).json({ status: "success", message: "Pong!" })
);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
