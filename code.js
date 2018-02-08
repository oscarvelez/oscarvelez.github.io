//
// this is just a stub for a function you need to implement
//
//Code by Oscar Velez Moncada
//student ID: 10123550
//
function getStats(txt) {



    return {
        nChars: getnChars(txt),
        nWords: getnWords(txt),
        nLines: getnLines(txt),
        nNonEmptyLines: getnNonEmptyLines(txt),
        averageWordLength: getaverageWordLength(txt),
        maxLineLength: getMaxLineLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: getFrequentWords(txt)
    };
}
//finished
function getnChars(txt) {
    return txt.length;
}

//finished
function getnWords(txt) {
       var words = txt.trim().split(/\W+/);
    var lastWord = words[words.length - 1];
    if (lastWord === '') {
        words.pop();
    }
    return words.length;

}

//finished
function getnLines(txt){
    if (txt !== '') {
        var lines = txt.split(/\r\n|\r|\n/);
        return lines.length;
    }
    else {
        return 0;
    }

}

//finished
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

//finished
//clean up this function pls
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
    var lengthWords = txt.trim().split(/\W+/);

//This piece of code counts parses through all the characters
    var count = 0;
    for (var i = 0; i < words.length; i++) {

        count += words[i].length;
    }

    return (count/lengthWords.length);
}

//finished
function getMaxLineLength(txt) {
/*
Will contain the length of the longest line. Line length will be computed by counting the number of
characters in the line, including any trailing white spaces, but excluding the newline character ‘\n’.
 */
    var lines = txt.split("\n");
    var longestLine = 0;
    var count = 0;
    for (var i = 0; i < lines.length; i++){
        count = lines[i].length;
        //must compare each new line, if new line is longer than the previous, replace that one with the newest one
        if (count > longestLine){
            longestLine = count;

        }

    }
    return longestLine;
}

function getPalindromes(txt) {


}

function getLongestWords(txt){

}

function getFrequentWords(txt){

}
