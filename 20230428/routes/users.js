var express = require("express");
var router = express.Router();

const userInfo = {
  lee: {
    password: "123123",
  },
  kim: {
    password: "456456",
  },
};

TransformStreamDefaultController.get("/", (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
  });
});

// main 페이지로 돌아갈 수 있는 라우터
router.get("/", (req, res) => {
  const session = req.session;
  res.render(
    "index",
    // view의 index.ejs를 사용자에게 보여주겠다
    {
      username: session.username,
      // 데이터 값을 함께 보낸다
    }
  );
});

router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: "user not found",
    });
  }

  if (userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login!",
    });
  } else {
    res.status(400).json({
      message: "user pw incorrect!",
    });
  }
});

router.get("/logout", (req, res) => {
  const session = req.session;
  if (session.username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
  } else {
    res.redirect("/users");
  }
});

module.exports = router;
