const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config/config');
const formController = require('./controllers/form.controller');

const app = express();
const db = require('./models');

db.sequelize.sync({force: true});

var corsOptions = {
    origin: "http://localhost:3000"
}; 
  
app.use(cors(config.application.corsOptions));
app.use(express.json());

app.get('/api/forms:id', formController.getForms);

app.post('/api/forms', formController.postForms);

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
