const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./logger');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/chat.postMessage', (req, res) => {
  logger.info(`Received message for channel ${req.query.channel}: "${req.query.text}".`);
  res.json({ ok: true });
});

app.listen(config.get('slack.mock.port'), () => {
  logger.info(`Slack API mock running on port: ${config.get('slack.mock.port')}.`);
});
