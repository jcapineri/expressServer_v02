var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test');
});

/* POST test page. */
router.post('/test', function(req, res, next) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;

  res.send(`
    <h1>Datos Ingresados:</h1>
    <div>
      <h1>Nombre: [` + nombre + `] Edad: [` + edad + `]</h1>
      <button name="boton" onclick="window.location='http://localhost:3000'">Volver</button>
    </div>
  `)    
});

module.exports = router;
