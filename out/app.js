"use strict";
/**
 * @param {string} word
 * @return {number[]}
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Pattern table is nothing but the implementation of the
 * longest proper prefix or the lps array, which does hold the
 * size of the pattern string.
*/
function buildPatternTable(word) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;
    while (suffixIndex < word.length) {
        if (word[prefixIndex] === word[suffixIndex]) {
            patternTable[suffixIndex] = prefixIndex + 1;
            suffixIndex += 1;
            prefixIndex += 1;
        }
        else if (prefixIndex === 0) {
            patternTable[suffixIndex] = 0;
            suffixIndex += 1;
        }
        else {
            prefixIndex = patternTable[prefixIndex - 1];
        }
    }
    return patternTable;
}
/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
/**
 * The actual implementation of the kunthMorrisPratt Algorithm
 *
 */
function knuthMorrisPratt(text, word) {
    let textIndex = 0;
    let wordIndex = 0;
    const patternTable = buildPatternTable(word);
    while (textIndex < text.length) {
        if (text[textIndex] === word[wordIndex]) {
            // We've found a match.
            if (wordIndex === word.length - 1) {
                return (textIndex - word.length) + 1;
            }
            wordIndex += 1;
            textIndex += 1;
        }
        else if (wordIndex > 0) {
            wordIndex = patternTable[wordIndex - 1];
        }
        else {
            wordIndex = 0;
            textIndex += 1;
        }
    }
    return -1;
}
exports.default = knuthMorrisPratt;
/**
 * Test call
 */
console.table(knuthMorrisPratt("Abbccsss", "sss"));
