import Event from "events";
import SocketServer from "./socket.js";
import Controller from "./controller.js";
import { constants } from "./constants.js";

const FgYellow = "\x1b[33m";
const port = process.env.PORT || 9898;

const eventEmitter = new Event();

const socketServer = new SocketServer({ port });
const controller = new Controller({ socketServer });

const server = await socketServer.initialize(eventEmitter);

console.log(
  FgYellow + "[socket] server is running at",
  server.address().port,
  "\n"
);

eventEmitter.on(
  constants.event.NEW_USER_CONNECTED,
  controller.onNewConnection.bind(controller)
);
