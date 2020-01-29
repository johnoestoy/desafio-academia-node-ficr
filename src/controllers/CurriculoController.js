const gitquery = require("../services/GithubService");

class Curriculo {
  async read(req, res) {
    const data = await gitquery.queryRepos();
    return res.send({ data });
  }
}

module.exports = new Curriculo();
