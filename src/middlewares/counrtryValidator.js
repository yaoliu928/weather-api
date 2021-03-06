const { getCode, getName } = require("country-list");
const responseFormatter = require("./../utils/responseFormatter");

module.exports = (req, res, next) => {
  const { cc } = req.query;
  if (cc.length === 2) {
    if (getName(cc)) {
      return next();
    }
  } else {
    if (getCode(cc)) {
      req.query.cc = getName(cc);
      return next();
    }
  }
  return responseFormatter(res, 400, "Invalid country name or country code");
};
