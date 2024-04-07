const validation = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.errors[0].message;
    const error = {
      status: 422,
      message,
    };

    console.log(error);

    // res.status(400).json({ message: errorMessage });
    next(error);
  }
};

module.exports = validation;
