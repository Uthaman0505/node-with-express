// req => Middleware res

const middleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing");
  next();
};

module.exports = middleware;
