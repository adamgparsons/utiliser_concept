// A test using cheerio modifying a html element's class name
const cheerio = require('cheerio');
const fs = require('fs')
const $ = cheerio.load(fs.readFileSync('./src/index.html'));

$('p').text('Hello there!');
$('p.title').addClass('welcome');

const content = $.html()

fs.writeFile('./build/test3.html', content, 'utf8', function (err) {
    if (err) return console.log(err);
 });
