import {APIError} from './APIError.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // Handle other types of errors (e.g., validation errors)
  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;