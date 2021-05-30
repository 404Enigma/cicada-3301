const axios = require("axios");

const get_coordinates = async (req, res) => {
  const data = req.body;
  let response, lat, lon, add_name;
  try {
    response = await axios.get("https://getpath.herokuapp.com/" + String(data));
    console.log(response.data);
    lat = response.data.lati;
    lng = response.data.long;
    add_name = response.data.name;
  } catch (error) {
    return error;
  }

  res.redirect("/main?lat=" + lat + "&lng=" + lng + "&name=" + add_name);

  //res.redirect("www.google.com");
};

module.exports = { get_coordinates };
