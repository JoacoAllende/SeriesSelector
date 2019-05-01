const serieCtrl = {};

const mysqlConnection = require('../database');

serieCtrl.getSeries = (req, res) => {
    const query = 'SELECT * FROM serie';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

serieCtrl.createSerie = (req, res) => {
    const serie = req.body;
    const query = 'INSERT INTO serie (nombre, puntaje) VALUES ("' + serie.nombre + '", ' + serie.puntaje + ');';
    mysqlConnection.query(query, (req, rows, fields) => {        
        res.json({
            'status' : 'serie creada'
        })
    })
};

serieCtrl.updateSerie = (req, res) => {
    const serie = req.body;
    const query = 'UPDATE serie SET nombre = "' + serie.nombre + '", puntaje = ' + serie.puntaje + ' WHERE id = ' + serie.id;
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
};

serieCtrl.deleteSerie = (req, res) => {
    const query = 'DELETE FROM serie WHERE id = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) =>{
        res.json('deleted');
    })
};

module.exports = serieCtrl;