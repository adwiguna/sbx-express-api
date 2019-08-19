const logger = (req, res, next) => {
  console.log(
    `${req.method} Request on ${req.protocol}://${req.hostname}${
      req.originalUrl
    }: ${Date().toString()}`
  );
  next();
};

module.exports = { logger };
