var haiku = require('./haiku');
var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
    return fs.readFileSync(file).toString();
}

function formatData(data){
    var lines = data.toString().split("\n"),
        lineSplit,
        word,
        syllablesArr = [[]];

    lines.forEach(function(line){
        lineSplit = line.split("  ");
        word = lineSplit[0];
        if(lineSplit[1] === undefined){

        }
        else if(lineSplit[1].match(/\d/g) === null){
            syllablesArr[0].push(word);
        }
        else if(syllablesArr[lineSplit[1].match(/\d/g).length] === undefined){
            syllablesArr[lineSplit[1].match(/\d/g).length] = [];
        }
        else{
            syllablesArr[lineSplit[1].match(/\d/g).length].push(word);
        }
    });
    return syllablesArr;
}

var syllablesArr = formatData(cmudictFile);

console.log(haiku.createHaiku([[2,3],7,5], syllablesArr));

