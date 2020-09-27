import axios from "axios";
//the default port for Flask
let FLASK_URL = "https://rankbackend.herokuapp.com";
let apiClass = {
  // Get Rank from Flask Backend
  getRank: async function () {
    console.log("activating axios");
    await axios
      .get(FLASK_URL + "/rank")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  },
};
export { apiClass };
