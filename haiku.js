function inArray(arr,index){
    if(arr[index] === undefined){
        console.log("word with " + index + " syllables doesn't exist");
        return false;
    }
    else{
        return true;
    }
}

function randomWord(dict, syllable){
    var num = Math.floor(Math.random() * dict[syllable].length);
    var word = dict[syllable][num];
    return word;
}


function createHaiku(structure, dictArr){
    var poem = [];
    structure.forEach(function(value){
        if(Array.isArray(value)){
            value.forEach(function(syllable){
                if(!inArray(dictArr,syllable)){
                    return;
                }
                else{
                    poem.push(randomWord(dictArr,syllable));
                    if(value.indexOf(syllable) < value.length-1){
                        poem.push(" ");
                    }
                }
            })
        }
        else{
            if(!inArray(dictArr,value)){
                return;
            }
            else{
                poem.push(randomWord(dictArr,value));
            }
        }
        poem.push('\n');
    });
    return poem.join("");
}

module.exports = {
    createHaiku: createHaiku
};

