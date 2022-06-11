module.exports = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/auth/login");
  }
  console.log(req.session.user);
  req.user = req.session.user;
  next();
};
