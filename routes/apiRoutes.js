const db = require("../models");

module.exports = function (app) {
    //retrieve all records
    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(({ message }) => {
                res.json(message);
            })
    });


}