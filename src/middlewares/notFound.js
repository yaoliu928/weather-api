module.exports = (req, res, next) => {
  res.send("not found");
  next();
};
