require("dotenv").config();
const express = require("express");
const glob = require("glob");
const app = express();
const errorController = require("./api/controllers/errorController");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 5000;

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
const allowlist = ["https://motaro-2020d.web.app", "http://localhost:3000", "https://motaro-2020d.firebaseapp.com"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate));


app.use("/public", express.static("public"));
glob.sync("./api/routes/Route.js").forEach((file) => {
  require(file)(app);
});

app.use(errorController.notFound);
app.use(errorController.error);
app.get('/', (req, res) => {
  res.send('Hello moms')
})

app.listen(process.env.PORT || `${PORT}`, () => {
  console.log(
    "CORS-enabled web server listening on port",
    process.env.PORT || `${PORT}`
  );
});
