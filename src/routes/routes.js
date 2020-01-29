const { Router } = require("express");

// Controllers
const CurriculoController = require("./controllers/CurriculoController");

const app = Router();

app.get("/api/curriculo", Curriculo.read);

module.exports = app;
