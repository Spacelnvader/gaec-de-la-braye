const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "seniorchauss@gmail.com",
      pass: "sjlbjugfdmetyqat",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
      from: name,
      to: "seniorchauss@gmail.com",
      subject: "Message du site Gaec de la Braye",
      html: `<p>Name: ${name},${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "Erreur, contactez-nous sur notre page Facebook : Gaec de la Braye pour nous envoyer un message" });
      } else {
        res.json({ status: "Votre message a bien été envoyé" });
      }
    });
  });
  