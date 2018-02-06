//
// this is just a stub for a function you need to implement
//
function getStats(txt) {



    return {
        nChars: getnChars(txt),
        nWords: getnWords(txt),
        nLines: getnLines(txt),
        nNonEmptyLines: getnNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function getnChars(txt) {
    return txt.length;
}

function getnWords(txt) {
    var words = txt.split(/\W+/);
    var lastWord = words[words.length - 1]
    if (lastWord == '') {
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

}

function getaverageWordLength(txt){

}

function getmaxLineLength(txt) {

}

function getPalindromes(txt) {

}

function getFrequentWords(txt){

}
