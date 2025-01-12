const mongoose = require('mongoose');

const ExerciseList = require("./models/ExerciseList");

mongoose.connect('mongodb://localhost/Adonis', {
    userNewUrlParser: true
});

// ADD our warehouses
const exercises = [
  {
  name: "Bench Press",
  description: "The bench press is a compound exercise that builds strength and muscle in the chest and triceps. When many people think of listing, the bench press is often the first exercise that comes to mind",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-81e-bench-press-m2-16x9.jpg"
},
{
  name: "Barbell Front Squat",
  description: "The barbell front squat is a compound movement that emphasizes building the lower-body muscle groups. With the barbell racked in front of the body on the anterior delts, the front squat emphasizes the quads and glutes, but also upper back and core strength to remain upright. Front squats can be trained as an alternative to back squats, as an accessory movement for either squats or deadlifts, or for strength and muscle on their own. Many lifters and athletes prefer them to back squats, although they can be uncomfortable and difficult to learn at first.",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-51b-barbell-front-squat-m2-16x9.jpg"
},
{
  name: "Barbell Deadlift",
  description: "The barbell deadlift is a compound exercise used to develop overall strength and size in the posterior chain. It is a competition lift in the sport of powerlifting, but is also considered a classic benchmark of overall strength. When performed with the hands outside the knees, it is often called a conventional deadlift. When the feet are wide and the hands are inside the knees, it is a sumo deadlift.",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-07b-barbell-deadlift-m1-16x9.jpg"
}
];

ExerciseList.insertMany(exercises)
  .then(exercises => {
      console.log(`Success! Added ${exercises.length} exercises to the database.`);
      mongoose.connections.close();
  })
  .catch(err => {
      console.log(err);
  })