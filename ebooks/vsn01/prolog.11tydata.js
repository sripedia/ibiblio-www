const { generateHtml } = require('../../scripts/spacer.js');
const prologData = require('./prolog.json');

module.exports = {
  spacerContent: generateHtml(prologData)
};