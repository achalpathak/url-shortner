const express = require("express");

const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const urlRedirector = require("./routes/redirector.js");

const app = express();
connectToMongoDB("mongodb://mongodb-server:27017/short-url").then(() =>
  console.log("Connected to mongodb success."),
);
app.use(express.json());

app.use("/url", urlRoute);
app.use("/", urlRedirector);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
