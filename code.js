//
// this is just a stub for a function you need to implement
//
//Code by Oscar Velez Moncada
//student ID: 10123550
//TA: Emmanuel Onu
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
    var lines = txt.split("\n");
    var emptyLine = "";

    var wordLines = 0;
    /* lines that are not empty*/
/* remove empty space that makes the code think there's an empty line */
    for(var i = 0; i < lines.length; i++){
        emptyLine = lines[i].replace(/\s+/g,"");
       if (emptyLine !== ""){
           wordLines++;
       }
    }

    return wordLines;
}

//somewhat finished, but doesn't work for 'sample text.' or example 1
//has something to do with the punctuation
function getaverageWordLength(txt){
    //text removes all punctuations and stuff
    //splits whitespaces
    //gotta have count of whats being parsed in the for loop
    //for some reason the if statement isn't working and returns null if string is empty
    var words = txt.trim().split(/\W+/);

//This piece of code counts parses through all the characters
    var count = 0;
    for (var i = 0; i < words.length; i++) {

        count += words[i].length;
    }

    return (count/words.length);

}

//finished
function getMaxLineLength(txt) {
/*
Will contain the length of the longest line. Line length will be computed by counting the number of
characters in the line, including any trailing white spaces, but excluding the newline character ‘\n’.
 */
    if(txt === ""){
        return 0;
    }

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

    //getPalindromes is an array of strings
    /*
    Will contain a list of unique palindromes in the text. Palindrome is a word with length > 2, which reads the
same forward and backwards. Example: “Kayak, mom, MOM, XXx and 10z01 zz” contains 4 unique
palindromes: [“kayak”, “mom”, “xxx”, “10x01”]. Palindromes should be reported in the same order they
appear in the text.
 */
    //using split instead of replace gives me errors and wont compile
    var originalWord = txt.toLowerCase().replace(/\W/g," ");
    var words = originalWord.split(" ");

    //var word;
    var checkPalindrome;
    var returnList = [];

    for (var i=0; i < words.length; i++) {
        if((words[i] != "") && (words[i].length > 2)) {
            checkPalindrome = words[i].split("").reverse().join("");
            if(words[i] === checkPalindrome)
                returnList.push(words[i]);
            }
        }
     /*
     so currently it's able to put the longest words in the top 10 array, but repeating words get put into there.
     will try to implement a bubble sorting algorithm to pop out the repeating words
     wish me luck

      */


return returnList;
}

//Function somewhat works except it shows repeating words
function getLongestWords(txt){
   // array of strings
    /*
    Will contain the 10 longest words in the text. In case of ties, the secondary sorting criteria should be
alphabetical sorting. Example: “0, XXX, YYYY, AAAA, BBB” will yield a list: [“aaaa”, “yyyy”, ”bbbb”,
“xxx”, ”0”].
     */
    var words = txt.split(/\W+/);

    words.sort(function(a,b) {
        return b.length - a.length
    });

    return words.slice(0,10);

}
//frequent word function not working
//giving up
function getFrequentWords(txt){

    /*
    Will contain the 10 most frequent words in the text, concatenated with their respective frequencies. Use
alphabetic sorting to to resolve frequency ties. The results will include the corresponding frequencies
appended to the actual words surrounded by brackets. Example: the text “The,the,THE,and,AND,and,it,IT”
should yield a list [“and(3)”, “the(3)”, “it(2)”].
     */


    var noCharacters = txt.toLowerCase().split(/\W+/);
    //var removeSpace = noCharacters.split('');
    var sortWords = noCharacters.sort();
    var wordNumber = []; //will hold the value of number word shows up
    var frequentList = [];

    var count;

    for (var i = 0; i < sortWords.length; i++){
        frequentList.push(sortWords[i]);
        count = 0;
        //parse through list and compare
        for (var j = 0; j < frequentList.length; j++){
            if (frequentList[i] === frequentList[j]) {
                count++;

            }
        }
        wordNumber.push(count);



        }
        //sorts from highest to lowest
    wordNumber.sort(function(a, b){return b-a});

    //sorts alphabetical order
    frequentList.sort(function(a, b) {
        return b.count-a.count});

    for (var x = 0; x < frequentList ; x++){
        frequentList[x] = wordNumber[x]

    }
    //str1 = frequentList.slice(0,10);
    //var str2 = ("("+ wordNumber.slice((0,10)) + ")");
    //var result = str1.concat(str2);
    return wordNumber.slice(0,10);



}
