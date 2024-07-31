import express from "express";
import { router } from "./infra/routes/external";

const server = express();
server.use(express.json())
server.use(router)

server.listen(5000, () => {
  console.log("servidor on na porta 5000 http://localhost:5000/");
});