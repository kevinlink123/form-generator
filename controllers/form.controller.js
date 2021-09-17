const db = require("../models");
const Form = db.form;
const Question = db.question;

exports.postForms = async (req, res) => {
    const { name, description, questions } = req.body;
    const data = req.body;
    questions.forEach((question) => {
        delete question.id;
        question.options = question.options.toString();
    });

    const form = await Form.create({ 
        name: name,
        description: description,
        questions: questions
     },{
        include:['questions']
    });

    res.status(200).send({
        message: "TUKI"
    });
}

exports.getForms = async (req, res) => {
    const form = await Form.findByPk(req.params.id , 
        { include: { 
            model: Question, 
            as: 'questions',
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }, 
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });
    if(!form){
        return res.status(404).send({
            message: "Form not found"
        })
    }
    res.status(200).send({
        form
    });
}