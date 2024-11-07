import express from 'express';

const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("route get /users");
});

export default router;