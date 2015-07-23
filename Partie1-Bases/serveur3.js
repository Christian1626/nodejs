/**************
 *   MODULE   *
 **************/

var monmodule = require('monmodule');
monmodule.direBonjour();
monmodule.direAurevoir();

//npm search <module>
//npm install <module>
//npm update <module>
var markdown = require('markdown').markdown;
console.log(markdown.toHTML('**plus important** ou __également important__'));
