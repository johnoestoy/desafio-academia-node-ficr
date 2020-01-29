const { Router } = require("express");

// Controllers
const Curriculo = require("../controllers/CurriculoController");

const app = Router();

app.get("/curriculo", Curriculo.read);

module.exports = app;
