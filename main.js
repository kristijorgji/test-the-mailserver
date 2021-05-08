const nodemailer = require('nodemailer');
require('dotenv').config()
const os = require("os");

let transport = nodemailer.createTransport({
    host: process.env.M_HOST,
    port: 25,
//    requireTLS: true,
    auth: {
       user: process.env.M_USERNAME, // here should be email
       pass: process.env.M_PASSWORD // password of email
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});

const message = {
    from: process.env.M_FROM,
    to: process.env.M_TO,
    subject: 'Test Email', 
    text: `[${Date.now().toString()}] test email from host ${os.hostname()}`
};


transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

// transport.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });