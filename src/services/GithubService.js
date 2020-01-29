const axios = require("axios");

const queryProfile = async () => {
  try {
    const data = await axios.get("http://api.github.com/users/johnoestoy");
    return data.data;
  } catch (erro) {
    return console.log(erro);
  }
};

const queryRepos = async () => {
  try {
    const data = await axios.get(
      "http://api.github.com/users/johnoestoy/repos"
    );
    return data.data;
  } catch (erro) {
    return console.log(erro);
  }
};

module.exports = { queryProfile, queryRepos };

/*const request = require("request");

const query = request(
  "https://api.github.com/users/johnoestoy",
  (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);

module.exports = query;
*/
