const axios = require("axios");

class GitService{
  async queryProfileGit () {
    try {
      const baseUrl = "http://api.github.com/users";
      const data = await axios.get(`${baseUrl}/johnoestoy`);
      return data.data;
    } catch (erro) {
      return erro;
    }
  }

  async queryReposGit () {
    try {
      const data = await axios.get(
        "http://api.github.com/users/johnoestoy/repos"
      );
      return data.data;
    } catch (erro) {
      return  erro;
    }
  }

}
module.exports = new GitService();
