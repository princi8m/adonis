const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
  /* res.send("All good in here!"); */
});

router.get("/boom", (req, res, next) => {
  res.json("boom");
  /* res.send("All good in here!"); */
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)


module.exports = router;
