const { generateHtml } = require('../../scripts/spacer.js');
const stotramData = require('./stotram.json');

module.exports = {
  spacerContent: generateHtml(stotramData)
};