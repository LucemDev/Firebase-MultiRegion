const functions = require('firebase-functions');

exports.bigben = functions
  .region("europe-west1")
  .runWith({ memory: '256MB', timeoutSeconds: 60 })
  .https.onRequest((req, res) => {
    const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
    res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
  });