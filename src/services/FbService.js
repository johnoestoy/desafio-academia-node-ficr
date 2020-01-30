const axios = require("axios");

const queryProfileFb = async () => {
  try {
    const data = await axios.get(
      "https://graph.facebook.com/v5.0/me?access_token=EAACv7qZBDjoMBAGY6rgjAhtixa7UJ4gTOBZBTxyIhlEVRfJ2413fSUqYgehPFGqrLLM5US0l15y2hkmfOrLWZBhVLNrquqhBxbHZBs8qWHV7Fe4DQLPH8WfSVoTTRdI5ZBGxv6JIuqODUusUohpnInngyjaANed5sTZAhMjeE2ghDL8YDfmDbZC8OWRUdEtgaWaIYemZAEA3CyAYO1vCP7KB2eTepehJRbGMrObLP71DzAZDZD&debug=all&fields=id%2Cname%2Cbirthday%2Caddress%2Cemail%2Cgender%2Cabout%2Ceducation&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors"
    );
    return data.data;
  } catch (erro) {
    return erro;
  }
};
module.exports = queryProfileFb;
/*
FB.api(
  "/me",
  "GET",
  { fields: "id,name,birthday,address,email,gender,about,education" },
  function(response) {
    // Insert your code here
  }
);
*/
