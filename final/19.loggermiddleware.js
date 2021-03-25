const morgan = require("morgan");
const middleware = require("./middleware");
const authorize = require("./authorize");

// app.use( middleware);
// app.use("/api", middleware);
// app.use([middleware, authorize]);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});