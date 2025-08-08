export const validateSignup = (req, res, next) => {
  const { fullName, email, phone, password } = req.body;

  const errors = {};

  if (!fullName || fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    errors.email = 'Invalid email address';
  }

  if (!phone || !phone.match(/^\+?[\d\s-]{10,}$/)) {
    errors.phone = 'Invalid phone number';
  }

  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (Object.keys(errors).length > 0) {
    const error = new Error('Validation failed');
    error.status = 400;
    error.errors = errors;
    throw error;
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { identifier, password } = req.body;

  const errors = {};

  if (!identifier || (!identifier.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) && !identifier.match(/^\+?[\d\s-]{10,}$/))) {
    errors.identifier = 'Invalid email or phone number';
  }

  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (Object.keys(errors).length > 0) {
    const error = new Error('Validation failed');
    error.status = 400;
    error.errors = errors;
    throw error;
  }

  next();
};