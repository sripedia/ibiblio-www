const { generateHtml } = require('../../scripts/spacer.js');
const suprabathamData = require('./suprabatham.json');

module.exports = {
  spacerContent: generateHtml(suprabathamData)
};