//
// this is just a stub for a function you need to implement
//
function getStats(txt) {



    return {
        nChars: getnChars(txt),
        nWords: getnWords(txt),
        nLines: getnLines(txt),
        nNonEmptyLines: getnNonEmptyLines(txt),
        averageWordLength: getaverageWordLength(txt),
        maxLineLength: getmaxLineLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: getFrequentWords(txt)
    };
}

function getnChars(txt) {
    return txt.length;
}

function getnWords(txt) {
       var words = txt.trim().split(/\W+/);
    var lastWord = words[words.length - 1];
    if (lastWord === '') {
        words.pop();
    }
    return words.length;

}
function getnLines(txt){
    if (txt !== '') {
        var lines = txt.split(/\r\n|\r|\n/);
        return lines.length;
    }
    else {
        return 0;
    }

}

function getnNonEmptyLines(txt) {
    /*var emptyLine = 0;*/
    var lines = txt.split("\n");
    var emptyLine = "";

    var wordLines = 0; /* lines that are not empty*/
/* remove empty space that makes the code think there's an empty linw\e */
    for(var i = 0; i < lines.length; i++){
        emptyLine = lines[i].replace(/\s+/g,"");
       if (emptyLine !== ""){
           wordLines++;
       }
    }

    return /*(getnLines(txt) - */wordLines;
    /*should return number of lineds in code minus empty lines */


}

function getaverageWordLength(txt){
    /*number should be divided by words.length */

    var words = txt.trim().split(/\W+/);
    /*
    var lastWord = words[words.length - 1];
    if (lastWord === '') {
        words.pop();
    }
    */
    /*return words.length;*/

    //var lengthWords = txt.replace(/\s/g,'');

    //this line gets number of words
    //RETURN should be lengthWords.length
    var lengthWords = txt.trim().split(/\s+/);

//This piece of code counts parses through all the characters
    var answer = 0;
    var count = 0;
    for (var i = 0; i < words.length; i++) {

        count += words[i].length;
    }
    return (lengthWords.length);
}

function getmaxLineLength(txt) {

}

function getPalindromes(txt) {


}

function getLongestWords(txt){

}

function getFrequentWords(txt){

}
