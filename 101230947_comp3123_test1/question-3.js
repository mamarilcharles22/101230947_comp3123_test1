// remove.js
// Remove Log files

import fs from 'fs'; // Import fs module using ES6 import
import path from 'path'; // Import path module using ES6 import

fs.existsSync = function (logs) {
    return false;
}
// If Logs directory exists
if(fs.existsSync("Logs")) {
    // Get list of all files from Logs directory
    fs.readdir("Logs", (err, files) => {
        // If there is any error
        if (err) throw err;

        // Traverse through list of all files
        // of Logs directory
        for (const file of files) {
            // Create complete path of the file using
            // join() function and delete it
            const filepath = path.join("Logs", file);
            fs.unlink(filepath, err => {
                // If there is any error
                if (err) throw err;
            });
            // Print out the file name to console
            console.log(`delete files...${file}`);
        }
        // Remove the Logs directory
        fs.rmdirSync("Logs");
    });
}

// add.js
// Create Log files

import fs from 'fs'; // Import fs module using ES6 import

// Create Logs directory, if it does not exist
if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

// Change the current process to Logs directory
process.chdir("Logs");

// Create 10 log files
for(let i = 0; i < 10; i++) {
    // Create filename in the given format
    const filename = `log${i}.txt`;
    // Open the file and write some text into the file
    fs.writeFile(filename, 'some text', (err) => {
        // If there is any error in writing the file
        if (err) {
            // Throw the error
            throw err;
        }
    });
    // Output file name to console
    console.log(filename);
}