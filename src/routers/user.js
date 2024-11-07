import express from 'express';

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send("hello world");
  console.log("route get /users");
});

export default router;