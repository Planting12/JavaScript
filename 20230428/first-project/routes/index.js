var express = require("express");
var router = express.Router();

let arr = [];

router.get("/read", (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

router.post("/create", (req, res) => {
  const data = req.body.data;
  // data의 키값과 함수명이 동일할 경우,
  // 비구조화 할당을 통해 바로 할당이 가능하다.
  // const { data } = req.body; 로 쓸 수 있다.
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

module.exports = router;
