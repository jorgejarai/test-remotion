import express from "express";
import http from "http";

const app = express();
const httpServer = new http.Server(app);

app.get("/", (_, res) => {
  res.download(__dirname + "/out.mp4");
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
