/**
 * Middleware that logs out the requests
 */
export const requestLogger = (req, _res, next) => {
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`body: ${JSON.stringify(req.body)}`);
  console.log(`----`);
  next();
};

/**
 * Middleware for unknown endpoints
 */
export const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};
