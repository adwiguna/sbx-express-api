const logger = (req, res, next) => {
  console.log(
    `${req.method} Request on ${req.protocol}://${req.hostname}${
      req.originalUrl
    }`
  );
  next();
};

module.exports = { logger };
