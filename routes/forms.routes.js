const express = require('express');
const router = express.Router();
const formController = require('../controllers/form.controller');


router.get('/api/forms/:id', formController.getForms);

router.post('/api/forms', formController.postForms);

module.exports = router;