function reverseWords(sentence) {
    let words = sentence.split(' '); // Split the sentence into words
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

const inputSentence = "This is a sunny day"; // Replace with the input sentence you want to reverse
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);
