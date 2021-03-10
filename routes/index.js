const router = require("express").Router();
const cors = require('cors')
const ExerciseList = require('../models/ExerciseList')

router.use(cors());

router.get("/", (req, res, next) => {
  res.json("All good in here");
  /* res.send("All good in here!"); */
});

// Sending data from exercises.json which is internal to the project
router.get("/boom", (req, res, next) => {
  const exercises = require('./exercises.json');
  res.json(exercises);
});

// Sending data from Front-End to Database
router.post("/insert", async (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const image = req.body.image
  console.log(req.body)
  ExerciseList.create({name: name, description: description, image: image})
  .then(exerciseList => console.log(exerciseList))
}) 

// Receiving Data from Database
router.get("/read", async (req, res) => {
  ExerciseList.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } 
    res.send(result);
  })
});



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)


module.exports = router;
