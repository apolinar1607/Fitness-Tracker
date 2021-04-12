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
    //retrieve all workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(({ message }) => {
                res.json(message);
            });
    });
    //only applicable if location search is undefined
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(({ message }) => {
                res.json(message);
            });
    });

    //PUT/Update workout
    app.put("/api/workouts/:id", ({body, params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
            .then(data => {
                res.json(data);
            })
            .catch(({message}) => {
                res.json(message);
            });
    });

}