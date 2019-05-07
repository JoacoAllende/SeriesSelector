const express = require('express');
const router = express.Router();
const serie = require('../controllers/series.controller');

router.get('/series', serie.getSeries);
router.post('/series', serie.createSerie);
router.put('/series', serie.updateSerie);
router.delete('/series:id', serie.deleteSerie);

module.exports = router;