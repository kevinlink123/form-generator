const express = require("express");
const cors = require("cors");
const config = require('./config/config');

const app = express();
const db = require('./models');

const formRoutes = require('./routes/forms.routes');

db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:3000"
}; 
  
app.use(cors(config.application.corsOptions));
app.use(express.json());

app.use('/', formRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
