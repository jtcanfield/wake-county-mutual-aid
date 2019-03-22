require('dotenv').config();
const functions = require('firebase-functions');
const emailValidator = require('email-validator');
const cors = require('cors')({ origin: true });
const mailgun = require('mailgun-js')({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN_NAME });

exports.sendMail = functions.https.onRequest((req, res) => {
  try {
    return cors(req, res, () => {
      const body = req.body.data;
      const text = `
      Email: ${body.email || 'None Provided'}
      Phone: ${body.phone || 'None Provided'}
      Message: ${body.message}
    `;
      const data = {
        from: emailValidator.validate(`${body.email}`) ? body.email : 'website@wakecountymutualaidcollective.com',
        to: 'wakecountymutualaidcollective@gmail.com',
        // to: 'jonathantcanfield@gmail.com',
        // cc: process.env.EMAIL_2,
        subject: 'Website Message',
        text,
      };
      return mailgun.messages().send(data, (error, mailRes) => {
        if (error) {
          throw error;
        }
        console.log(mailRes);
        return res.status(200).send({ data: 'Success' });
      });
    });
  } catch (err) {
    console.dir(err, { depth: null });
    return res.status(500).send({ data: 'Failure' });
  }
});
