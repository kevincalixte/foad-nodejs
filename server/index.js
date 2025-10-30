const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const path = require("path");
const portServer = 8081;
const app = express();
app.use(express.json());

// Configuration CORS pour permettre les requêtes depuis n'importe quelle origine
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Répondre aux requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../')));

mongoose
  .connect("mongodb://mongodb-service:27017/users")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Connection error : ", err));

app.use("/api/users", usersRoutes);

app.listen(portServer, "0.0.0.0", () => {
  console.log(`Server at port ${portServer}`);
});
