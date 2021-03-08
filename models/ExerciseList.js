const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Exercise Input Schema 
const ExerciseListSchema = new Schema({
  name: String,
  description: String,
  image: String
});

const ExerciseList = mongoose.model('ExerciseList', ExerciseListSchema);
module.exports = ExerciseList;