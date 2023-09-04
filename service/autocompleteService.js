const data = require("../data.json");

function getSuggestions(query) {
  query = query.toLowerCase();
  return data.filter((item) => item.toLowerCase().includes(query));
}

module.exports = {
  getSuggestions,
};
