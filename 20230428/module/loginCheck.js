const loginCheck = (req, res, next) => {
  const userLogin = flase;
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fail!",
    });
  }
};

module.exports = loginCheck;
