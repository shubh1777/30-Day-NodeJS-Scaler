const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Extract the extension from the provided file path
    const actualExtension = path.extname(filePath);

    // Compare the actual extension with the expected extension
    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}

// Test Cases
checkFileExtension('Test/file1.txt', '.txt');
checkFileExtension('Test/resume.jpg', '.jpg');

