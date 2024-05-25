const bcrypt = require('bcrypt');
const { ResponseHandler } = require('../responseHandler/responseHandler');
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    ResponseHandler(res,null, error.message, 500);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    ResponseHandler(res, null, error.message, 500);
  }
};

module.exports = { hashPassword, comparePassword };
