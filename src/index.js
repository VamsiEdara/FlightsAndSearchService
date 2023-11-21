const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  // to create express object
  const app = express();
  // const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
  });
};

setupAndStartServer();
