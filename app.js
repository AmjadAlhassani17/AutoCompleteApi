const http = require("http");
require("dotenv").config();
const { autocomplete } = require("./routes/autocomplete");

const server = http.createServer((req, res) => {
  autocomplete(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
