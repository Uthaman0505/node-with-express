const express = require("express");
const app = express();
const path = require("path");

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>resource not found</h1>");
// });

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
