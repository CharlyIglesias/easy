const usersRoutes = require('./users.routes')
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      console.error("Validation Error:", error.details); // Print errors for debugging
      return res.status(400).json({ error: error.details.map(e => e.message) });
    }
    next();
  };
  
module.exports = validate;
module.exports = usersRoutes;