const path = require('path');

function resolvePath(relativePath) {
    const resolvedPath = path.resolve(relativePath);
    console.log(`Resolved Path: ${resolvedPath}`);
}


resolvePath('Test\file1.txt');
resolvePath('nonexistent-folder/file.txt');

