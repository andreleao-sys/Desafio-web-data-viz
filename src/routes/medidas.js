var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas-Lum/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidasLuminosidade(req, res);
});

router.get("/ultimas-Umi/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidasUmidade(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;