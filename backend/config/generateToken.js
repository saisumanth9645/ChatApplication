const jwt = require("jsonwebtoken");

/**
 * 
 * @param {*} id 
 * @returns 
 * 
 * JSON web token for authorizing API
 */
const generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
