const { generateHtml } = require('../../scripts/spacer.js');
const phalaData = require('./phala.json');

module.exports = {
  spacerContent: generateHtml(phalaData)
};