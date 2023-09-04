// const http = require("http");
const url = require("url");
const autocompleteService = require("../service/autocompleteService");

function autocomplete(req, res) {
  const parsedUrl = url.parse(req.url, true);
  if ((parsedUrl.pathname === "/api/autocomplete") & (req.method === "GET")) {
    const query = parsedUrl.query.query;
    if (query) {
      const suggestions = autocompleteService.getSuggestions(query);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ suggestions }));
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: 'Query parameter "query" is missing' }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
}

module.exports = {
  autocomplete,
};
