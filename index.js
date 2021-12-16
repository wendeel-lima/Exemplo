if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const Conn = require("./models/exemplo.conn");

const app = express();

app.use(express.json());
app.use(cors(true));

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data);

const contato = require("./routes/exemplo.route");
app.use("/contato", contato);

const porta = 3000;

app.listen(process.env.PORT || porta, () => {
  console.info(`app rodando em : http://localhost:${porta}/`);
});
