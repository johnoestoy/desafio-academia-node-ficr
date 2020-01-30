const gitquery = require("../services/GithubService");
const fbquery = require("../services/FbService");

class Curriculo {
  async read(req, res) {
    const data = await Promise.all([
      gitquery.queryProfile(),
      gitquery.queryRepos(),
      fbquery()
    ]);
    var fb = data[2];
    var git = data[0];
    var repos = data[1];
    return res.send({ fb, git, repos });
  }
}
module.exports = new Curriculo();
