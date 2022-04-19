const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/@a_tyagi/infographics-wizard-flexible-infographics-authoring-and-design-exploration-acb03ce4e28c')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});