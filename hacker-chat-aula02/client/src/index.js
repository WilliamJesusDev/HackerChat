/**
  node index.js
  --username williamjesus
  --room sala01
  --hostUri localhost
*/

import Events from "events";
import CliConfig from "./cliConfig.js";
import SocketClient from "./socket.js";
import TerminalController from "./terminalController.js";

const [nodePath, filePath, ...commands] = process.argv;
const config = CliConfig.parseArguments(commands);

const componentEmitter = new Events();
const controller = new TerminalController();
const socketClient = new SocketClient(config);

socketClient.initialize();
//await controller.initializeTable(componentEmitter);

//console.log(config);
