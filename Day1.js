const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log('File Content:\n' + content);
    } catch (error) {
        console.error('Error reading file:', error.message);
    }
}

readFileContent('Test/file1.txt'); 
readFileContent('Test/empty-file.txt'); 
readFileContent('Test/nonexistent-file.txt'); 