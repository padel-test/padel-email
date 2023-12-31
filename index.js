require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
// Configuración del transporte SMTP utilizando Mailtrap
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '61972a41238896',
    pass: '1e67093b6179bc',
  },
});

// Ruta para enviar el correo electrónico
app.get('/enviar-correo', (req, res) => {
  const params = req.query;
  if (
    params.from &&
    params.to &&
    params.subject &&
    params.text &&
    req.headers.api ===
      '654sdf68asf6a48sef35a4sdf468awef4a3sd4f6a8s4df6a8wefa35sd4f68s'
  ) {
    // Configuración del correo electrónico a enviar
    const mailOptions = {
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
    };

    // Envío del correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar el correo:', error);
        res.status(500).send({ msg: 'Error al enviar el correo electrónico' });
      } else {
        console.log('Correo enviado correctamente:', info.response);
        res.send({ msg: 'Correo electrónico enviado correctamente' });
      }
    });
  } else {
    res.send({ msg: 'missingparams' });
  }
});

const port = process.env.PORT || 3000;
// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
