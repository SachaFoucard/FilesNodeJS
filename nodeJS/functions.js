// Require the file system and path modules
const fs = require('node:fs/promises');
const path = require('node:path');

// Create function: creates a file with the provided text
exports.Create = async (n, text) => {
    await fs.writeFile(path.join(__dirname, 'files', `file${n}.txt`), text); // create n files 
}

// Read function: reads the content of a file
const Read = async (n) => {
    let data = await fs.readFile(path.join(__dirname, 'files', `file${n}.txt`)); // read texts from files{n}
    return data.toString();
}

// GetRandNumber function: returns a random number between 1 and 5
const GetRandNumber = async () => { // choose a number beetween 0 - 6
    let a = Math.floor(Math.random() * 5) + 1;
    return a;
}

// ConcatFiles function: concatenates a random number of files into a single file
exports.ConcatFiles = async () => {
    await fs.unlink(path.join(__dirname, 'files', 'concatTextFile.txt')); // delete the 'concatTextFile.txt' file 
    let a = await GetRandNumber(); // function callBack
    for (let i = 1; i <= a; i++) {
        let data = await Read(i) // enter into 'data' the text that into 'files[i]'
        await fs.appendFile(path.join(__dirname, 'files', 'stringtxt.txt'), '\n' + data); // push the new text that there is into 'data' into the 'stringtxt' file
    }
    await fs.rename(path.join(__dirname, 'files', 'stringtxt.txt'), path.join(__dirname, 'files', 'concatTextFile.txt')) // // rename the file 'stringtxt' to 'concatTextFile.txt'
}