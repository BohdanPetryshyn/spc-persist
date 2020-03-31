const http = require('http');
const jsonStream = require('jsonstream');

const levelDb = require('../levelDb');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  levelDb.createValueStream().pipe(jsonStream.stringify()).pipe(res);
});

module.exports = () => {
  server.listen(
    {
      port: PORT,
    },
    () => console.log(`History server started at port ${PORT}`)
  );
};
