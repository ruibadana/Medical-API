//Import Plan Model
Plan = require('../Models/model');//Index
exports.index = (req, res) => {
    Plan.get((err, plan) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "OK",
            message: "Successfully got Plans",
            data: plan
        });
    });
};

//New Plan
exports.add = (req, res) => {
    var plan = new Plan();
    //Info basica
    plan.basic_info.name = req.body.basic_info.name;
    plan.basic_info.date_of_birth = req.body.basic_info.date_of_birth;
    plan.basic_info.address = req.body.basic_info.address;
    plan.basic_info.emergency_phone = req.body.basic_info.emergency_phone;
    plan.basic_info.care_plan = req.body.basic_info.care_plan;

    //historia médica
    plan.health_history.medication_history = req.body.health_history.medication_history;
    plan.health_history.allergies = req.body.health_history.allergies;
    plan.health_history.mental_state = req.body.health_history.mental_state;

    //Dados de consulta
    plan.consult.consult_date = req.body.consult.consult_date;
    plan.consult.exams.type_exams = req.body.consult.exams.type_exams;
    plan.consult.exams.date_exams = req.body.consult.exams.date_exams;
    plan.consult.medications = req.body.consult.medications;
    plan.consult.description = req.body.consult.description;

    plan.save((err) => {
        if (err) res.json(err);
        res.json({
            message: "New Plan Added!",
            data: plan
        });
    });
};

//Get Plan
exports.view = (req, res) => {
    Plan.findById(req.params.id, (err, plan) => {
        if (err) res.send(err);
        res.json({
            message: 'Plan Details',
            data: plan
        });
    });
}

//Get Data Nascimento
/* exports.view = (req, res)=>
{
    Plan.get (req.params.id, (err, plan)=>
    {
        if (err) res.send(err);
        res.json({
            message: 'Date of Birthday',
            data: plan
        });
    });
} */

// Get Find Name Maria
exports.findbyname = function (req, res) {
    var name_maria = [];
    Plan.get(function (err, plan) {

        if (err)
            res.json({
                status: "error",
                message: err
            });
        for (var i = 0; i < Plan.length; i++) {
            if (plan[i].name == "Maria") name_maria.push(plan[i].name);
        }
        res.json({
            message: "Name: Maria",
            name: name_maria
        });
    });
};