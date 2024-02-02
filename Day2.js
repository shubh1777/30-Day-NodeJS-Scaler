const fs = require('fs').promises;

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8')
        .then(() => {
            console.log(`Data written to ${filePath}`);
        })
        .catch((error) => {
            console.error(`Error writing to file: ${error.message}`);
        });
}

// Test Cases
writeToFile('Test/output1.txt', 'Sample content.');
writeToFile('Test/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
