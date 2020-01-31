const axios = require("axios");

class FacebookService {
  async queryProfileFb (){
    try {
      const data = await axios.get(
        "https://graph.facebook.com/v5.0/me?access_token=EAACv7qZBDjoMBAGKN8rPZCpYmobkOSXjAkfcymIEoJxY8UtUL3fPN2daYfZB0F0IceCMKcVzbUwl99owU5W8rhR8ksm3sZAFiXqHP7jfw0JcH0ZBqslOL4yDP0xga6soyCBzTggEg1ODQIuhtNIQ4i6w2mf6A23WI4scyhZCd8tQ0ZADcwICmm8KsnFPYQ8HJU1EjAeaFEGZAwZDZD&debug=all&fields=id%2Cname%2Cabout%2Cbirthday%2Caddress%2Cemail%2Cgender%2Clocation%2Cwork&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors "
        );

        return data.data;
      } catch (erro) {
        return erro;
      }
    };


  }
module.exports = new FacebookService();