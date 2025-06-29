const { generateHtml } = require('../../scripts/spacer.js');
const prapattiData = require('./prapatti.json');

module.exports = {
  spacerContent: generateHtml(prapattiData)
};