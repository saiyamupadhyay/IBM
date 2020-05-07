const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

var app = express();

const url = 'mongodb://localhost:27017/survey';

const ChoiceSchema = new mongoose.Schema({
    text: { type: String, default: "" },
    count: { type: Number, default: 0 }
});

const SurveySchema = new mongoose.Schema({
    text: { type: String, default: "" },
    date: { type: Date, default: Date.now },
    choices: [ChoiceSchema]
});

const Survey = mongoose.model("Survey", SurveySchema);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connected to mongo db'))

app.use(bodyParser.json());
app.use(cors());

// app.get("/survey", (req, res) => {
//     Survey.find((err, result) => {
//         console.log(result);
//         res.json = result;
//     })
// })

app.get('/survey', function(req, res) {
    // use mongoose to get all todos in the database
    Survey.find(function(err, survey) {
        // if there is an error retrieving, send the error otherwise send data
        if (err)
            res.send(err)
        res.json(survey); // return all employees in JSON format
    });
});
app.post("/survey", (req, res) => {
    let surveyObj = new Survey();
    surveyObj.text = req.body.text;
    surveyObj.choices = req.body.choices;
    surveyObj.save((err, result) => {
        if (err) throw err
        res.status(201).json({ message: "employee saved to db" })
    })
})

app.listen(3001, () => console.log("started on port 3001"));
