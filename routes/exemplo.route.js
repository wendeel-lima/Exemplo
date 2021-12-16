const express = require("express");
const router = express.Router();
const db = require("../models/exemplo.model");

router.get("/", async (req, res) => {
  await db
    .find({})
    .then((db) => {
      res.send(db);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/read/:id", async (req, res) => {
  await db
    .findOne({ _id: req.params.id })
    .then((db) => {
      res.send(db);
    })
    .catch((err) => {
      res.status(404).send("Não encontrado");
      console.error(err);
    });
});

router.post("/create", async (req, res) => {
  if (!db || !db.nome || !db.email || !db.idade) {
    await db
      .create(req.body)
      .then(() => {
        res.status(200).send("contato adicionado com sucesso");
      })
      .cath((err) => {
        res.status(400).send("Algo errado com o contato, tente novamente");
        console.error(err);
      });
  } else {
    res.status(400).send("Algo errado com o contato, tente novamente");
  }
});

router.put("/update/:id", async (req, res) => {
  await db
    .updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("contato atualizado com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com o contato, tente novamente");
      console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await db
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("contato deletado com sucesso");
    })
    .catch((err) => {
      res.status(404).send("Não encontrado");
      console.error(err);
    });
});

module.exports = router;
