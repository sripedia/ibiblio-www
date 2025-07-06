const { generateHtml } = require('../../scripts/spacer.js');
const namasData = require('./namas.json');

module.exports = {
  spacerContent: generateHtml(namasData)
};