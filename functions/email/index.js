// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
require('dotenv').config();
const functions = require('firebase-functions');
const mailgun = require('mailgun-js')({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN_NAME });

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.sendMail = functions.https.onRequest((body) => {
  const text = `
  Email: ${body.email}
  Phone: ${body.phone}
  Message: ${body.message}
  `;
  const data = {
    from: body.email || 'wakecountymutualaidcollective@website.com',
    to: 'wakecountymutualaidcollective@gmail.com',
    // cc: process.env.EMAIL_2,
    subject: 'Website Message',
    text,
  };
  return mailgun.messages().send(data, (error, res) => {
    console.log(body);
  });
});
