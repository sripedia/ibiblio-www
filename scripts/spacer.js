const fs = require('fs');
const path = require('path');

// --- Configuration ---
// This is the minimum space between the end of one word-pair column and the start of the next.
const GAP_BETWEEN_COLUMNS = 4;

// --- HTML Styles (as per your rules) ---
const DIV_STYLE = 'margin-bottom: 50px;';
const SANSKRIT_PRE_STYLE = 'color:#ff0000; font-family: monospace; white-space: pre;';
const ENGLISH_PRE_STYLE = 'color:#000000; font-family: monospace; white-space: pre;';


/**
 * Processes a single line of a verse to generate aligned Sanskrit and English strings.
 * This function is the core of the alignment logic.
 * @param {Array<Object>} wordPairs - An array of {sanskrit, english} word pairs.
 * @returns {{sanskritLine: string, englishLine: string}} - The padded strings.
 */
function formatLine(wordPairs) {
    let sanskritLine = '';
    let englishLine = '';

    wordPairs.forEach(pair => {
        const sanskritWord = pair.sanskrit;
        const englishWord = pair.english;

        // 1. Determine the 'column width' for this specific pair.
        //    It's the length of the longer word of the two.
        const columnWidth = Math.max(sanskritWord.length, englishWord.length);

        // 2. Pad both words to match this column width. This ensures that the
        //    space allocated for "kausalyA" is the same as for "Kausalya's".
        const paddedSanskrit = sanskritWord.padEnd(columnWidth, ' ');
        const paddedEnglish = englishWord.padEnd(columnWidth, ' ');

        // 3. Append the padded words to their respective lines, followed by a
        //    consistent gap to separate them from the next word pair.
        sanskritLine += paddedSanskrit + ' '.repeat(GAP_BETWEEN_COLUMNS);
        englishLine += paddedEnglish + ' '.repeat(GAP_BETWEEN_COLUMNS);
    });

    // Trim trailing whitespace from the end of the full lines to avoid extra space
    // after the last word.
    return {
        sanskritLine: sanskritLine.trimEnd(),
        englishLine: englishLine.trimEnd()
    };
}

/**
 * Generates HTML from verse data.
 * @param {Object} data - The parsed JSON data, e.g., { verses: [...] }.
 * @returns {string} - The generated HTML string.
 */
function generateHtml(data) {
    let output = [];
    data.verses.forEach(verse => {
        let verseHtml = [];
        verseHtml.push(`<div style="${DIV_STYLE}">`);
        
        let verseHeader = `Verse ${verse.verseNumber}`;
        if (verse.repeat) {
            verseHeader += ` (${verse.repeat} times)`;
        }
        verseHtml.push(verseHeader);

        // Process each line within the verse
        verse.lines.forEach(line => {
            const { sanskritLine, englishLine } = formatLine(line.words);
            verseHtml.push(`<pre style="${SANSKRIT_PRE_STYLE}">${sanskritLine}</pre>`);
            verseHtml.push(`<pre style="${ENGLISH_PRE_STYLE}">${englishLine}</pre>`);
        });

        verseHtml.push(`</div>`);
        output.push(verseHtml.join('\n'));
    });
    return output.join('\n\n');
}

/**
 * Main function to read the JSON and print the formatted HTML for command-line use.
 */
function main() {
    try {
        // Get the entire process.argv array
        const args = process.argv;

        // The first actual command-line argument is at index 2
        const firstArg = args[2];
        if (!firstArg) {
            console.error("Error: Please provide a path to a JSON file.");
            process.exit(1);
        }
        const JSON_FILE_PATH = path.join(__dirname, firstArg);

        // Read and parse the JSON file
        const fileContent = fs.readFileSync(JSON_FILE_PATH, 'utf8');
        const data = JSON.parse(fileContent);

        const html = generateHtml(data);
        console.log(html);

    } catch (error) {
        console.error("An error occurred:", error.message);
        process.exit(1); // Exit with an error code
    }
}

// Run the script if executed directly
if (require.main === module) {
    main();
}

// Export the core logic for use in other modules (like Eleventy)
module.exports = { generateHtml, formatLine };