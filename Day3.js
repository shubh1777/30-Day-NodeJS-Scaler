const { exec } = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log('Command Output:\n' + stdout);
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    });
}

// Test Cases
executeCommand('ls-la');
executeCommand('echo "Hello, Node.js!"');
