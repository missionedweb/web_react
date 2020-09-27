import axios from "axios";
//the default port for Flask
let FLASK_URL = "https://rankbackend.herokuapp.com/";
let apiClass = {
  // Get Rank from Flask Backend
  getRank: async function (marks) {
    console.log("activating axios");
    await axios
      .get(FLASK_URL + `/rank/${marks}`)
      .then((res) => console.log(Math.round(res.data)))
      .catch((err) => console.log(err));
  },
};
export { apiClass };
