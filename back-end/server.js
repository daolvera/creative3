const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// connect to the database
mongoose.connect('mongodb://localhost:27017/teams', {
	useUnifiedTopology: true,	
	useNewUrlParser: true
});

const taskSchema = new mongoose.Schema({
	id: Number,
	desc: String,
	priority: String,
	name: String,
	date: Date,
	day: Number,
	done: Boolean
  });
  


const Task = mongoose.model('Task', taskSchema);

// router.get('/', async (req, res) => {
// 	let tasks = [];
// 	try {
// 	  return res.send({
// 		appliances: appliances
// 	  });
// 	} catch (error) {
// 	  console.log(error);
// 	  return res.sendStatus(500);
// 	}  
// });

app.listen(3000, () => console.log('Server listening on port 3000!'));