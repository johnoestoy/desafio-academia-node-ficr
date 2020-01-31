const gitService = require("../services/GithubService");
const fbService = require("../services/FbService");
var CurriculoDto = require("../models/CurriculoDto")


class Curriculo {


  async read(req, res) {
    
    try {
      const data = await Promise.all([
        gitService.queryProfileGit(),
        gitService.queryReposGit(),
        fbService.queryProfileFb()
      ]).catch(function ( erro){
        console.log(`errrou `, erro)
      });
    
    var fb = data[2];
    var git = data[0];
    var repos = data[1];

    console.log("console  clase curricul o",CurriculoDto);
    
    let dto = new CurriculoDto(fb,git,repos);
    
    return res.send(dto);
    } catch(erro) {
      console.log(erro);
      return erro;
    }
  }

}
module.exports = new Curriculo();
