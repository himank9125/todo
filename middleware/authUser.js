const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({ message: "Please provide token" });
    }
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verifiedUser) {
      return res.status(400).json({ message: "invalid token" });
    }
    // console.log(verifiedUser);
    req.userId = verifiedUser.id;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = authUser;
