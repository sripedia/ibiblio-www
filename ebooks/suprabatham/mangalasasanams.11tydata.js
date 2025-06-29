const { generateHtml } = require('../../scripts/spacer.js');
const mangalasasanamsData = require('./mangalasasanams.json');

module.exports = {
  spacerContent: generateHtml(mangalasasanamsData)
};