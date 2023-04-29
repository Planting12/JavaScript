var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!",
  });
});

router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!",
  });
});
// upload 라우터로 image 데이터를 보냈을 때
// middleware를 통해서 image가 저장되고
// 잘 저장되었는지 확인 후, 응답해주는 코드.

module.exports = router;
